"use client"
import { authLogin } from "@/actions/auth-actions"
import { redirect } from "next/navigation"
import { useFormState } from "react-dom"

export default function AuthComponent() {
  const [state, formAction] = useFormState(authLogin, {})

  if (state.token) {
    localStorage.setItem("token", state.token)
    redirect("/")
  }

  return (
    <div className="flex justify-center">
      <div className="min-w-96 w-2/5 p-4 bg-slate-400">
        <form action={formAction}>
          <div className="flex mb-1">
            <p className="w-24">Username:</p>
            <input type="email" id="email" name="email" className="flex-1" />
          </div>
          {state.errors?.email && state.errors?.email}

          <div className="flex items-center mb-4">
            <p className="w-24">Password:</p>
            <input
              type="text"
              id="password"
              name="password"
              className="flex-1"
            />
          </div>
          {state.errors?.password && state.errors?.password}

          <button type="submit" className="p-1 bg-slate-500 w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
