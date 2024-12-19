"use client"

import AuthComponent from "@/context/AuthContext"
import { notFound, redirect } from "next/navigation"
import { useEffect, useState } from "react"

export default function LayoutAuth({ children }) {
  const [token, setToken] = useState(undefined)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getingToken = localStorage.getItem("token")
    setToken(getingToken)
    setIsAuthenticated(!!getingToken)
    setLoading(false)
  }, [])

  const logoutHandler = () => {
    console.log("masuk")
    setLoading(true)
    localStorage.removeItem("token")
    setIsAuthenticated(false)
    setLoading(false)
  }

  if (loading) {
    return "Loading..." // spinner
  }

  if (isAuthenticated) {
    return (
      <AuthComponent
        value={{
          token,
          logoutHandler,
        }}
      >
        {children}
      </AuthComponent>
    )
  }

  return redirect("/")
}
