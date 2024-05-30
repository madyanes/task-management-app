import { createContext, useContext, useReducer } from 'react'
import tasksReducer from '../reducers/taskReducer'
import initialTasks from '../utils/tasks'

const TasksContext = createContext(null)
const TasksDispatchContext = createContext(null)

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

export function useTasks() {
  /** A custom hook named useTasks() */
  return useContext(TasksContext)
}

export function useTasksDispatch() {
  /** A custom hook called useTasksDispatch() */
  return useContext(TasksDispatchContext)
}
