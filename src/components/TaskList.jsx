function TaskList({ tasks, onCheckTask }) {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type='checkbox'
              checked={task.done}
              onChange={() => onCheckTask(task.id)}
            />
            <input type='text' value={task.text} readOnly />
          </li>
        ))}
      </ul>
    </>
  )
}

export default TaskList
