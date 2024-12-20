// src/components/LoginForm.js
"use client"

import { useState } from "react"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      })

      if (!res.ok) {
        throw new Error("Invalid credentials")
      }

      const { token } = await res.json()

      document.cookie = `token=${token}; path=/`
      window.location.href = "/"
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="flex justify-center">
      <div className="min-w-96 w-2/5 p-4 bg-slate-400">
        <form onSubmit={handleSubmit}>
          <div className="flex mb-1">
            <p className="w-24">Username:</p>
            <input
              type="email"
              id="email"
              name="email"
              className="flex-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex items-center mb-4">
            <p className="w-24">Password:</p>
            <input
              type="text"
              id="password"
              name="password"
              className="flex-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p>{error}</p>}

          <button type="submit" className="p-1 bg-slate-500 w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
