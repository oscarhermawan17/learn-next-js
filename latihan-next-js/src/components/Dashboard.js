import { useEffect } from "react"
import useToggle from "./useToggle"
import Modal from "./Modal"

export default function Dashboard({ tasks, onLogout }) {
  const { toggle: modalToggle, setToggleOn, setToggleOff } = useToggle(false)

  return (
    <>
      <div className="flex justify-end gap-2 mb-5">
        <button className="bg-sky-600 p-2 rounded-md" onClick={setToggleOn}>
          Add New Task
        </button>
        <button onClick={onLogout} className="bg-red-600 p-2 rounded-md">
          Logout
        </button>
      </div>

      <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
        {Object.keys(tasks).map((current) => {
          return (
            <div key={current} className="bg-slate-400">
              {tasks[current].tasks.map((task) => {
                return <div key={task.id}>{task.title}</div>
              })}
            </div>
          )
        })}
      </div>

      <Modal
        title="title"
        description="description"
        modalToggle={modalToggle}
        setToggleOff={setToggleOff}
      />
    </>
  )
}
