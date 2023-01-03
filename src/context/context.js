import { createContext, useState } from "react";


export const Context = createContext();

const ModalContext  = ({children}) => {

    const [loader, setLoader] = useState(true)



    return(
        <Context.Provider value = {{
            loader , setLoader
            }}>
                {children}
        </Context.Provider>
    )
}

export default ModalContext;
