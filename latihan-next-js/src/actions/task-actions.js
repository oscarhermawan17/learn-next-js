"use server"
import { Users } from "@/mockupData"
import jwt from "jsonwebtoken"

export async function getTasksUser(token) {
  const decoded = jwt.verify(token, "secret_key")
  if (!decoded) {
    throw new Error("Wrong Akses")
  }

  const findUserByEmail = Users.find((user) => user.email === decoded.email)

  if (!findUserByEmail) {
    throw new Error("User not found")
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(findUserByEmail.tasks)
    }, 1000)
  })
}

export async function createTaskUser(token, prevState, formData) {
  const decoded = jwt.verify(token, "secret_key")
  if (!decoded) {
    throw new Error("Wrong Akses")
  }

  const findUserByEmail = Users.find((user) => user.email === decoded.email)

  if (!findUserByEmail) {
    throw new Error("User not found")
  }

  console.log("findUserByEmail", findUserByEmail)
}
