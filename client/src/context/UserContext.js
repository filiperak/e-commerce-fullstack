import { createContext,useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [leggedUser,setLoggedUser] = useState(null)
    return <UserContext.Provider value={{leggedUser,setLoggedUser}}>
        {children}
    </UserContext.Provider>
}
