import { createContext, useState } from "react";

export const Context = createContext();

const ModalContext = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const [userProfileData , setUserProfileData ] = useState(false)

  return (
    <Context.Provider
      value={{
        loader,
        setLoader,
        userProfileData,
        setUserProfileData
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ModalContext;
