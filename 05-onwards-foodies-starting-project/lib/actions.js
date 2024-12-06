"use server"

import { redirect } from "next/navigation"
import { saveMeal } from "./meals"
import { revalidatePath } from "next/cache"

function isInvalidText(text) {
  return !text || text.trim() === ""
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  }

  if (
    isInvalidText(meal.text) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input.",
    }
  }

  await saveMeal(meal)
  // revalidatePath('/meals', 'layout'); // revalidate semua yang ada di /meals
  revalidatePath("/meals") // hanya revalidate cache di /meals (tidak nested) (case ini untuk pre-rendered hasil BUILD, bukan di development)
  redirect("/meals")
}
