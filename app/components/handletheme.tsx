// use react hook in react js
import {useContext, createContext, ReactNode, useState} from "react";

interface themeType {
    theme: string,
    toggleTheme: () => void,
}
//Create our context
export const ThemeContext = createContext<themeType | undefined>(undefined);
// From the above code we set our createContext with the values expected. which are theme:string and a function with no expected return type.
//The value on createContext is first set to undefined since the values will be coming from the them  Provider

export const ThemeContextProvider = ({ children } : { children: ReactNode }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

// checks if there is any values present or set at the context
export const setTheme = () => {
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error("Opps no theme was set");
    }
    return context;
}