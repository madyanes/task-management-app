import Task from './Task'

function TaskList({ tasks, onDeleteTask, onEditTask }) {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task
              task={task}
              onDeleteTask={onDeleteTask}
              onEditTask={onEditTask}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default TaskList
