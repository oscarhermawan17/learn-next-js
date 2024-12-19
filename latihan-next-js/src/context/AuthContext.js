import { createContext } from "react"

export const AuthContext = createContext()

export default function AuthComponent({ children, value }) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
