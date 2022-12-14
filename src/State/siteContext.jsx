import React, { useContext, useState } from "react"

const SiteContext = React.createContext()
export const useSite = () => {
  return useContext(SiteContext)
}

export const SiteProvider = ({ children }) => {
  const [type, setType] = useState("Tv Shows")
  const [theme, setTheme] = useState(true)
  const [query, setQuery] = useState("")
  const value = {
    theme,
    type,
    query,
    setQuery,
    setType,
    setTheme,
  }
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
}
