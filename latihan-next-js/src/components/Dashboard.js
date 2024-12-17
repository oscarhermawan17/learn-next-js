// const progress = ["Todo", "In Progress", "Done", "Freeze"]

const progress = [
  {
    key: "todo",
    label: "Todo",
  },
  {
    key: "inprogress",
    label: "In Progress",
  },
  {
    key: "done",
    label: "Done",
  },
  {
    key: "freeze",
    label: "Freeze",
  },
]

export default function Dashboard() {
  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
      {progress.map((current) => {
        return (
          <div key={current.key} className="bg-slate-400">
            {current.label}
          </div>
        )
      })}
    </div>
  )
}
