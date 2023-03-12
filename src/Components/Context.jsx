import { createContext, useState } from "react";

export const UserContext = createContext()

const Context = ({ children }) => {
    const [auth, setauth] = useState(false);
    return (
        <UserContext.Provider value={{auth,setauth}}>
            {children}
        </UserContext.Provider>
    );
};

export default Context