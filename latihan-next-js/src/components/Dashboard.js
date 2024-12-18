export default function Dashboard({ tasks, onLogout }) {
  return (
    <>
      <button onClick={onLogout}>Logout</button>
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
        {Object.keys(tasks).map((current) => {
          return (
            <div key={current} className="bg-slate-400">
              {tasks[current].tasks.map((task) => {
                return <div>{task.title}</div>
              })}
            </div>
          )
        })}
      </div>
    </>
  )
}
