import React from 'react'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

export const ToDo = ({task, toggleComplete, deleteToDo, editTodo}) => {
  const ToggleComplete = () => {
    toggleComplete(task.id)
  }

  const HandleOnClickEdit = (e) => {
    e.stopPropagation()
    editTodo(task.id)
  }

  const HandleOnClickDelete = (e) => {
    e.stopPropagation()
    deleteToDo(task.id)
  }

  return (
    <button type="button" className='ToDo' onClick={ToggleComplete}>
      <p className={clsx(task.completed && "ToDo--completed")}>{task.task}</p>
      <div className='ToDoIcons'>
        <button type="button" data-delete onClick={HandleOnClickEdit}><FontAwesomeIcon icon={faPenToSquare} /></button>
        <button type="button" data-edit onClick={HandleOnClickDelete}><FontAwesomeIcon icon={faTrash} /></button>
      </div>
    </button>
  )
}
