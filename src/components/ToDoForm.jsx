import React, { useState }  from 'react'

export const ToDoForm = ({ addToDo }) => {
  const [value, setValue] = useState("");

  const HandleChange = (e) => {
    setValue(e.target.value)
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    if(value === "") return;
    addToDo(value)
    setValue("")
  }

  return (
    <form className='ToDoForm' onSubmit={HandleSubmit}>
      <input className='ToDoInput' type="text" placeholder='Task title' value={value} onChange={HandleChange}></input>
      <button type='submit' className='ToDoBtn'>Add Task</button>
    </form>
  )
}
