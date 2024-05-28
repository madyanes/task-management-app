import { useState } from 'react'
import initialTasks from './utils/tasks'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState(initialTasks)

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        text: text,
        done: false,
      },
    ])
  }

  function handleCheckTask(taskId) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, done: !task.done }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  function handleDeleteTask(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(updatedTasks)
  }

  function handleEditTask(task) {
    const updatedTasks = tasks.map((t) => (t.id === task.id ? task : t))
    setTasks(updatedTasks)
  }

  return (
    <>
      <h1>Todo App</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onCheckTask={handleCheckTask}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
      />
    </>
  )
}

export default App
