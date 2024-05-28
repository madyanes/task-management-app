function TaskList({ tasks, onCheckTask, onDeleteTask }) {
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
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TaskList
