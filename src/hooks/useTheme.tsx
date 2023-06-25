import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react";
import { ThemeProvider as ThemeProviderMui } from '@mui/material/styles';
import lightTheme from '@/styles/lightTheme';
import darkTheme from '@/styles/darkTheme';
import GlobalStyles from "@mui/material/GlobalStyles";

type ThemeContextType = {
    theme: 'light' | 'dark';
    handleTheme: (themeName: 'light' | 'dark') => void;
}

interface ThemeProviderProps {
    children: ReactNode;
}


export const ThemeContext = createContext({} as ThemeContextType)

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const themeLocalStorage = localStorage.getItem('@andra-sistemas:theme') === 'dark' ? 'dark' : 'light';
        setTheme(themeLocalStorage)
    }, [])

    const handleTheme = useCallback((themeName: 'light' | 'dark') => {
        localStorage.setItem('@andra-sistemas:theme', themeName);
        setTheme(themeName);
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, handleTheme }}>
            <ThemeProviderMui theme={theme === 'dark' ? darkTheme : lightTheme}>
                <GlobalStyles
                    styles={{
                        body: { backgroundColor: theme === 'dark' ? '#000' : '#fff' }
                    }}
                />
                {children}
            </ThemeProviderMui>
        </ThemeContext.Provider>
    )
}

export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext);

    return context;
}