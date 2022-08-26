import { createContext, Dispatch, SetStateAction, useState } from "react";

type LoginTypes = {
  isOpen: boolean;
};

type PropsLoginContext = {
  state: LoginTypes;
  setState: Dispatch<SetStateAction<LoginTypes>>;
};

const DEFAULT_VALUES = {
  state: {
    isOpen: false,
  },
  setState: () => {},
};

const LoginContext = createContext<PropsLoginContext>(DEFAULT_VALUES);

const LoginContextProvider = ({ children }: any) => {
  const [state, setState] = useState(DEFAULT_VALUES.state);
  return (
    <LoginContext.Provider value={{ state, setState }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContextProvider };
export default LoginContext;
