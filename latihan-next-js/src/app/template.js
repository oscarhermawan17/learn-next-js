"use client"
// import { cookies } from "next/headers"
import LoginForm from "@/components/LoginFormComponent"
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

  useEffect(() => {
    const token = Cookies.get("token")
    if (token) {
      setAuth(true)
    }
  }, [])

  if (auth) {
    return children
  }

  return <LoginForm />
}
