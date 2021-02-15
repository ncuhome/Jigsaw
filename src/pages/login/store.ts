import { stateFactory } from "@/utils/state_factory";
import { post, getUsername } from "@/lib/http";

interface LoginData {
  [key: string]: any;
  name: string;
  token: string;
  userId: string;
  password: string;
  message: string;
  status: 0 | 1;
}

export const useLogin = stateFactory(
  {
    name: window.localStorage.getItem("name"),
    token: window.localStorage.getItem("token"),
    userId: window.localStorage.getItem("userId"),
    password: window.localStorage.getItem("password"),
    message: "",
    status: 0,
  } as LoginData,
  (set) => ({
    setValue: <T extends keyof LoginData>(key: T, value: LoginData[T]) =>
      set((state) => {
        state[key] = value;

        return state;
      }),
    login: async (userId: string, password: string) => {
      const data = {
        username: userId,
        password,
      };

      const { status, token, message } = await post("https://os.ncuos.com/api/user/token", data);

      if (status === 1) {
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("userId", userId);
        window.localStorage.setItem("password", password);
        const name = await getUsername(token);

        set((state) => {
          state.token = token;
          state.message = message;
          state.name = name;
          state.status = 1;

          return state;
        });
      } else {
        throw Error(message)
      }
    },
    logout: async () => {
      window.localStorage.clear();
      window.location.reload();

      set((state) => {
        state.token = null;
        state.name = null;
        state.status = 0;

        return state;
      });
    },
  })
);
