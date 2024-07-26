import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import { ToDoForm } from './ToDoForm'
import { ToDo } from './ToDo';
import { EditToDoForm } from './EditToDoForm';
import "./ToDo.scss";
uuidv4();

export const ToDoWrapper = () => {
  const [toDos, setToDos] = useState([])

  const AddToDo = (toDo) => {
    setToDos([...toDos, {
      id: uuidv4(),
      task: toDo,
      completed: false,
      isEditing: false
    }])
  }

  const ToggleComplete = (toDoID) => {
    setToDos(toDos.map( todo => todo.id === toDoID ? {
      ...todo,
      completed: !todo.completed
    } : todo))
  }

  const DeleteTodo = (toDoID) => [
    setToDos(toDos.filter(todo => todo.id !== toDoID))
  ]

  const EditToDo = (toDoID) => {
    setToDos(toDos.map(todo => todo.id === toDoID ? {
      ...todo,
      isEditing: !todo.isEditing
    } : todo))
  }

  const UpdateToDo = (value, toDoID) => {
    setToDos(toDos.map(todo => todo.id = toDoID ? {
      ...todo,
      task: value,
      isEditing: false
    } : todo))
  }

  return (
    <div className='ToDoWrapper'> 
      <h1>ToDo List</h1>
      <ToDoForm addToDo={AddToDo}/>
      {
        toDos.map(t => (
          t.isEditing ?
          <EditToDoForm key={t.id} task={t} editToDo={UpdateToDo} /> :
          <ToDo key={t.id} task={t} toggleComplete={ToggleComplete} deleteToDo={DeleteTodo} editTodo={EditToDo}/>
        ))
      }
    </div>
  )
}
