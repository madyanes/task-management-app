import Task from './Task'
import { useTasks } from '../contexts/TasksContext'

function TaskList() {
  const tasks = useTasks()
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
