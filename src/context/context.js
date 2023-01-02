import { createContext, useState } from "react";


export const Context = createContext();

const ModalContext  = ({children}) => {

    const [deneme, setDeneme] = useState(true)



    return(
        <Context.Provider value = {{
            deneme , setDeneme
            }}>

        </Context.Provider>
    )
}

export default ModalContext
