import { createContext,useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [leggedUser,SetLoggedUser] = useState(null)
    return <UserContext.Provider value={{leggedUser,SetLoggedUser}}>
        {children}
    </UserContext.Provider>
}
