import { useState } from 'react'

function TaskList({ tasks, onCheckTask, onDeleteTask, onEditTask }) {
  const [editableTasks, setEditableTasks] = useState({})

  const handleToggleEdit = (taskId) => {
    setEditableTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }))
  }

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
            <input
              type='text'
              value={task.text}
              onChange={(e) => onEditTask({ ...task, text: e.target.value })}
              readOnly={!editableTasks[task.id]}
            />
            <button onClick={() => handleToggleEdit(task.id)}>
              {editableTasks[task.id] ? 'Save' : 'Edit'}
            </button>
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TaskList
