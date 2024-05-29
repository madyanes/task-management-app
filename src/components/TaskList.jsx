import { useContext } from 'react'
import Task from './Task'
import { TasksContext } from '../contexts/TasksContext'

function TaskList() {
  const tasks = useContext(TasksContext)
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default TaskList
