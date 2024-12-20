// context/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react"
import Cookies from "js-cookie"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false) // auth state
  const [user, setUser] = useState(null) // user data

  useEffect(() => {
    const token = Cookies.get("authToken")
    if (token) {
      // Simpan state auth jika token valid
      setAuth(true)
      // Fetch user data (optional)
      // fetch('/api/user', {
      //   headers: { Authorization: `Bearer ${token}` },
      // })
      //   .then((res) => res.json())
      //   .then((data) => setUser(data))
      //   .catch(() => setAuth(false));
    }
  }, [])

  return (
    <AuthContext.Provider value={{ auth, user, setAuth, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
