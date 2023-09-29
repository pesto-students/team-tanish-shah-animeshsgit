import { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

const useTheme = () => {
    const context = useContext(ThemeSwitcher);
    return context;
};

// function ThemeSwitcher({children}) {
const ThemeSwitcher = ({ children }) => {
    const [theme, setTheme] = useState(true);

    const toggleTheme = (prevTheme) => { setTheme(!prevTheme) }

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
}

export { useTheme, ThemeSwitcher };