import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  // states
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // onchnage function
  const handleChange = (e) => {
    setEmail(e.target.value);
    setPassword(e.target.value);
  };
  const user_details = { email, password };

  //
  return (
    <AuthContext.Provider value={{ handleChange, user_details }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
