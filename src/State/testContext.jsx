import React, { useContext } from "react"
const TestContext = React.createContext()
export const useTest = () => {
  return useContext(TestContext)
}
export const TestProvider = ({ children }) => {
  const haris = "haris"
  const value = { haris }
  return <TestContext.Provider value={value}>{children}</TestContext.Provider>
}
