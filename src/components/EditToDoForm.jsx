import React, { useState }  from 'react'

export const EditToDoForm = ({ editToDo, task }) => {
  const [value, setValue] = useState(task.task);

  const HandleChange = (e) => {
    setValue(e.target.value)
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    editToDo(value, task.id)
  }

  return (
    <form className='EditToDoForm' onSubmit={HandleSubmit}>
      <input className='ToDoInput' type="text" placeholder={task.task} value={value} onChange={HandleChange}></input>
      <button type='submit' className='ToDoBtn'>Update Task</button>
    </form>
  )
}
