"use server"
import { Users } from "@/mockupData"
import jwt from "jsonwebtoken"

export async function getTasksUser(token) {
  const decoded = jwt.verify(token, "secret_key")
  console.log("decoded", decoded)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("masuk")
    }, 1000)
  })
}
