"use client"

import { useEffect, useState } from "react"
import AuthComponent from "./AuthComponent"
import Dashboard from "./Dashboard"
import { getTasksUser } from "@/actions/task-actions"
import { redirect } from "next/navigation"

export default function HomeWrapperComponent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [tasks, setTasks] = useState({})

  useEffect(() => {
    async function gettingTasksUser(token) {
      const fetchTasks = await getTasksUser(token)
      const settingData = fetchTasks.reduce((accum, currentValue) => {
        if (accum.hasOwnProperty(currentValue.status)) {
          return {
            ...accum,
            [currentValue.status]: {
              tasks: [...accum[currentValue.status].tasks, currentValue],
            },
          }
        }

        return {
          ...accum,
          [currentValue.status]: {
            tasks: [currentValue],
          },
        }
      }, tasks)

      setTasks(settingData)
    }

    if (isAuthenticated) {
      const token = localStorage.getItem("token")
      gettingTasksUser(token)
    }
  }, [isAuthenticated])

  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsAuthenticated(!!token)
    setLoading(false)
  }, [])

  const logoutHandler = () => {
    setLoading(true)
    localStorage.removeItem("token")
    setIsAuthenticated(false)
    setLoading(false)
    redirect("/")
  }

  if (loading) {
    return null
  }

  if (isAuthenticated) {
    return <Dashboard tasks={tasks} onLogout={logoutHandler} />
  }

  return <AuthComponent />
}
