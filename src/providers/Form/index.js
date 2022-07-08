import { createContext, useState } from "react";
import { api } from "../../services/api";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(
    JSON.parse(localStorage.getItem("@userNoWasteToken")) || false
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@userNoWaste")) || false
  );

  const registerUser = (user) => {
    api
      .post("/register", user)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const loginUser = (user) => {
    api
      .post("/login", user)
      .then((response) => {
        setUserToken(response.data.accessToken);
        setUser(response.data.user);

        localStorage.setItem(
          "@userNoWasteToken",
          JSON.stringify(response.data.accessToken)
        );
        localStorage.setItem(
          "@userNoWaste",
          JSON.stringify(response.data.user)
        );
      })
      .catch((error) => console.log(error));
  };

  const exitUser = () => {
    localStorage.clear();
    setUserToken(false);
    setUser(false);
  };

  return (
    <FormContext.Provider
      value={{
        userToken,
        user,
        registerUser,
        loginUser,
        setUserToken,
        setUser,
        exitUser,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
