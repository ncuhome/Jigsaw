import React from "react";
import Routers from "./Router";
import GlobalReset from "./style/reset";
import { usePreFetch } from "@/lib/hooks/usePreFetch";
import { Provider } from "@/lib/websocket/Provider";

function App() {
  usePreFetch();

  return (
    <Provider url={"jigsaw.ncuos.com"}>
      <GlobalReset />
      <Routers />
    </Provider>
  );
}

export default App;
