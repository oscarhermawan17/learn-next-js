"use client"
// import { cookies } from "next/headers"
import LoginForm from "@/components/LoginFormComponent"
import { AuthProvider } from "@/context/AuthContext"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"

export default function TemplateHomePage({ children }) {
  // const token = cookies().get("token")?.value
  // if (token) {
  //   return children
  // }
  // return <LoginForm />

  const [auth, setAuth] = useState(false) // auth state
  const [user, setUser] = useState(null) // user data
  const [token, setToken] = useState(undefined)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getToken = Cookies.get("token")
    if (getToken) {
      setToken(getToken)
    }
    setIsLoading(false)
  }, [])

  const logOutHandler = () => {
    setIsLoading(true)
    setToken(undefined)
    Cookies.remove("token", { path: "" })
    setIsLoading(false)
  }

  if (isLoading) {
    return "Loading..."
  }

  if (token) {
    return (
      <AuthProvider token={token} onLogOut={logOutHandler}>
        {children}
      </AuthProvider>
    )
  }

  return <LoginForm />
}
