// import "server-only"
"use server"
import { Users } from "@/mockupData"

import jwt from "jsonwebtoken"

export async function authLogin(prevState, formData) {
  const email = formData.get("email")
  const password = formData.get("password")

  const findUserByEmail = Users.find((user) => user.email === email)

  if (!findUserByEmail) {
    return {
      errors: {
        email: "Email is not found",
      },
    }
  }

  const isPasswordSame = findUserByEmail.password === password

  if (!isPasswordSame) {
    return {
      errors: {
        password: "Wrong password",
      },
    }
  }

  const token = jwt.sign({ email: findUserByEmail.email }, "secret_key")
  // const decoded = jwt.verify(token, "secret_key")
  // console.log("decoded", decoded)

  return {
    token,
  }
}
