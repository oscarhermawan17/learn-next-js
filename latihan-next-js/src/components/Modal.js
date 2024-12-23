"use client"

import { createTaskUser } from "@/actions/task-actions"
import { useAuth } from "@/context/AuthContext"
import { useFormState } from "react-dom"

export default function Modal({ modalToggle, setToggleOff }) {
  const { token } = useAuth()

  const [state, formAction] = useFormState(createTaskUser.bind({}, token), {
    error: {
      title: "",
      description: "",
      status: "",
    },
  })

  return (
    <>
      {modalToggle && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <form action={formAction}>
              <div className="flex mb-2">
                <p className="mb-1 min-w-24">Title: </p>
                <input
                  className="flex-1 border-gray-700 border-2 rounded-md px-1"
                  type="text"
                  name="title"
                />
              </div>
              <div className="flex mb-2">
                <p className="mb-1 min-w-24">Description: </p>
                <input
                  className="flex-1 border-gray-700 border-2 rounded-md px-1"
                  type="text"
                  name="description"
                />
              </div>
              <div className="flex mb-2">
                <p className="mb-1 min-w-24">Status: </p>
                <select
                  className="flex-1 border-gray-700 border-2 rounded-md px-1"
                  type="text"
                  name="cars"
                  id="cars"
                >
                  <option value="todo">Todo</option>
                  <option value="inprogress">In Progress</option>
                  <option value="done">Done</option>
                  <option value="freeze">Freeze</option>
                </select>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setToggleOff(false)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
