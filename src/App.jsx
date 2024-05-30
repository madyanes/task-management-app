import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import { TasksProvider } from './contexts/TasksContext'

function App() {
  return (
    <TasksProvider>
      <h1>Todo App</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  )
}

export default App
