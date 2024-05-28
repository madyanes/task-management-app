import { useState } from 'react'

function AddTask({ onAddTask }) {
  const [text, setText] = useState('')

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          placeholder='Add a new task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => onAddTask(text)}>Add</button>
      </form>
    </>
  )
}

export default AddTask
