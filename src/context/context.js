import { createContext, useState } from "react";

export const Context = createContext();

const ModalContext = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const [userProfileData , setUserProfileData ] = useState(false)
  const [allUserLandingPageData , setAllUserLandingPageData] = useState(false)

  return (
    <Context.Provider
      value={{
        loader,
        setLoader,
        userProfileData,
        setUserProfileData,
        allUserLandingPageData,
        setAllUserLandingPageData
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ModalContext;
