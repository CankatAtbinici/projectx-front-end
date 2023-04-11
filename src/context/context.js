import { createContext, useState } from "react";

export const Context = createContext();

const ModalContext = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const [userProfileData , setUserProfileData ] = useState(false)
  const [allUserLandingPageData , setAllUserLandingPageData] = useState(false)
  const [userLastSeen, setUserLastSeen] = useState("12-12-2023");
  const [reservationTimeSubmitObject, setReservationTimeSubmitObject] = useState([])

  return (
    <Context.Provider
      value={{
        loader,
        setLoader,
        userProfileData,
        setUserProfileData,
        allUserLandingPageData,
        setAllUserLandingPageData,
        userLastSeen,
        setUserLastSeen,
        reservationTimeSubmitObject,
        setReservationTimeSubmitObject
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ModalContext;
