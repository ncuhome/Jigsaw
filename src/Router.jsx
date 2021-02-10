import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Jigsaw from "./pages/jigsaw";
import Login from "./pages/login";
import Home from "./pages/home";
import New from "./pages/new";
import Room from "./pages/room";
import Join from "./pages/join";
import Sort from "./pages/sort";
import Result from "./pages/result";
import { useLogin } from "./pages/login/store";
import { listenToken, removeSocket } from "@/lib/ws";

const RoutesList = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/jigsaw/",
    component: Jigsaw,
  },
  {
    path: "/login/",
    component: Login,
    auth: false,
  },
  {
    path: "/home/",
    component: Home,
  },
  {
    path: "/new/",
    component: New,
  },
  {
    path: "/room/",
    component: Room,
  },
  {
    path: "/join/",
    component: Join,
  },
  {
    path: "/sort/",
    component: Sort,
  },
  {
    path: "/result/",
    component: Result,
  },
  {
    path: "*",
    component: Home,
  },
];

function Routers() {
  const [token, setValue] = useLogin((state) => [state.token, state.setValue]);
  const isLogin = !!token;

  React.useEffect(() => {
    listenToken((res) => {
      console.log(res);
      if (res.status === 1) {
        setValue("status", 1);
      } else {
        setValue("status", 0);
      }
    });
    return () => removeSocket("token");
  }, []);

  const renderPage = (item, props) => {
    if (item.auth === undefined) {
      item.auth = true;
    }

    if (!item.auth) return <item.component {...props} />;

    if (isLogin) return <item.component {...props} />;

    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: props.location },
        }}
      />
    );
  };

  return (
    <Router>
      <Switch>
        {RoutesList.map((item, index) => (
          <Route
            key={index}
            exact
            path={item.path}
            render={(props) => renderPage(item, props)}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default Routers;
