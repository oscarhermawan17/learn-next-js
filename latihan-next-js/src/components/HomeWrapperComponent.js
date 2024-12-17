"use client"

import { useEffect, useState } from "react"
import AuthComponent from "./AuthComponent"
import Dashboard from "./Dashboard"
import { getTasksUser } from "@/actions/task-actions"

export default function HomeWrapperComponent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [task, setTask] = useState({})

  useEffect(() => {
    if (isAuthenticated) {
      const token = localStorage.getItem("token")
      getTasksUser(token)
    }
  }, [isAuthenticated])

  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsAuthenticated(!!token)
    setLoading(false)
  }, [])

  if (loading) {
    return null
  }

  if (isAuthenticated) {
    return <Dashboard />
  }

  return (
    <div className="flex justify-center">
      <div className="min-w-96 w-2/5 p-4 bg-slate-400">
        <AuthComponent />
      </div>
    </div>
  )
}
