import { Users } from "@/mockupData"
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"

export async function POST(req) {
  const { email, password } = await req.json()

  const findUserByEmail = Users.find((user) => user.email === email)
  if (!findUserByEmail) {
    NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  }

  const isPasswordSame = findUserByEmail.password === password

  if (!isPasswordSame) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  }

  const token = jwt.sign({ email: findUserByEmail.email }, "secret_key")

  const response = NextResponse.json({ token })
  response.cookies.set("token", token, { httpOnly: false, path: "/" })
  return response
}
