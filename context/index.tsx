import { LoginContextProvider } from "./login/index";

const GlobalContext = ({ children }: any) => {
  return <LoginContextProvider>{children}</LoginContextProvider>;
};

export default GlobalContext;
