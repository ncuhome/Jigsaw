import { stateFactory } from "@/utils/state_factory";
import { post, getUsername } from "@/lib/http";
import { sendToken } from "@/lib/ws";

export const useLogin = stateFactory(
  {
    name: window.localStorage.getItem("name"),
    token: window.localStorage.getItem("token"),
    userId: "",
    password: "",
    message: "",
    status: window.localStorage.getItem("status"),
  },
  (set) => ({
    setValue: (key, value) => {
      set((state) => {
        state[key] = value;
      });
    },
    login: async (userId, password) => {
      const data = {
        username: userId,
        password,
      };

      const { status, token, message } = await post(
        "https://os.ncuos.com/api/user/token",
        data
      );

      if (status === 1) {
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("status", status);
        const name = await getUsername(token);

        sendToken(
          JSON.stringify({
            username: name,
            token,
          })
        );

        set((state) => {
          state.token = token;
          state.message = message;
          state.name = name;
          state.status = 1;
        });
      } else {
        set((state) => {
          state.message = message;
        });
      }
    },
  })
);
