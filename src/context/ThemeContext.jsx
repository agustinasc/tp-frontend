import React, { createContext, useState, useEffect, useContext } from 'react'

export const ThemeContext = createContext()

export const useTheme = ()=> {
    return useContext(ThemeContext)
}

export const ThemeProvider = ({children}) => {

    const [ theme, setTheme ] = useState(() => {
         return localStorage.getItem("theme") || "claro"
    })

    /* para actualizar el local storage */
    useEffect(() => {
      localStorage.setItem("theme", theme);
      //document.documentElement.className = theme
      document.documentElement.classList.remove("claro", "oscuro")
      document.documentElement.classList.add(theme)// para agregar la clase al html
    }, [theme])

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "claro" ? "oscuro" : "claro"))
    }

    return(
        <ThemeContext.Provider 
            value={{
                theme, 
                toggleTheme
            }}>
            {children}
        </ThemeContext.Provider>
    )
    
}

export default ThemeContext