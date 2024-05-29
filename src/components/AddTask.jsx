import { useState, useContext } from 'react'
import { TasksDispatchContext } from '../contexts/TasksContext'

let nextTaskId = 3

function AddTask() {
  const [text, setText] = useState('')
  const dispatch = useContext(TasksDispatchContext)

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          placeholder='Add a new task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => {
            setText('')
            dispatch({
              type: 'added',
              id: nextTaskId++,
              text: text,
            })
          }}
        >
          Add
        </button>
      </form>
    </>
  )
}

export default AddTask
