// context/AuthContext.js
import { createContext, useContext } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children, ...restProps }) => {
  return (
    <AuthContext.Provider value={{ ...restProps }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
