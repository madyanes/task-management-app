import { useState } from 'react'

function AddTask({ onAddTask }) {
  const [text, setText] = useState('')

  return (
    <>
      <form>
        <input
          type='text'
          placeholder='Add todo'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => onAddTask(text)} type='button'>
          Add
        </button>
      </form>
    </>
  )
}

export default AddTask
