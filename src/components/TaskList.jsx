import { useState } from 'react'

function TaskList({ tasks, onCheckTask, onDeleteTask, onEditTask }) {
  const [editable, setEditable] = useState(false)

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
              readOnly={!editable}
            />
            <button onClick={() => setEditable(!editable)}>
              {editable ? 'Save' : 'Edit'}
            </button>
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TaskList
