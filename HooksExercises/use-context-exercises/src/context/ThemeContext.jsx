import { createContext } from "react";
import React from "react";
export const ThemeContext = createContext(
    {
        theme: "light",
        toggleTheme: () => { }
    }
);
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = React.useState("light");
    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
    };
    const contextValue = { theme, toggleTheme };
    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = React.useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};