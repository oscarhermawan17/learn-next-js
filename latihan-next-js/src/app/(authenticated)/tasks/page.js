"use client"

import { getTasksUser } from "@/actions/task-actions"
import Dashboard from "@/components/Dashboard"
import { AuthContext } from "@/context/AuthContext"
import { useContext, useEffect, useState } from "react"

export default function TasksPage() {
  const [tasks, setTasks] = useState({})

  const { token, logoutHandler } = useContext(AuthContext)

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

    if (token) {
      gettingTasksUser(token)
    }
  }, [token])

  return <Dashboard tasks={tasks} onLogout={logoutHandler} />
}
