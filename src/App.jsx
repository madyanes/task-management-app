import { useReducer } from 'react'
import initialTasks from './utils/tasks'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import tasksReducer from './reducers/taskReducer'
import { TasksContext, TasksDispatchContext } from './contexts/TasksContext'

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <h1>Todo App</h1>
        <AddTask />
        <TaskList />
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

export default App
