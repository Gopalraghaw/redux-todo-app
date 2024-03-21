import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodoAction, updateTodoAction  } from '../redux/action/todo.action';

export default function Input() {
  const dispatch = useDispatch();
  let editData = useSelector(state => state.editData)
  let [todo, setTodo] = useState('')

  const inputChange = (event) => {
    setTodo(event.target.value)
  }
  const submit = (event) => {
    event.preventDefault()
    if (editData.index === -1) {
      dispatch(addTodoAction(todo))
    } else {
      dispatch(updateTodoAction(editData.index,todo))
    }

    setTodo('');
  }

  useEffect(() => {
    setTodo(editData.data)
  }, [editData.index, editData.data])

  return (
    <form className="row " onSubmit={submit}>
      <div className="col-sm-10 ">
        <input
          type="text"
          className="form-control"
          placeholder="Enter todo"
          value={todo}
          onChange={inputChange} />

      </div>
      <div className="col-sm-2 ">
        <button
          type="submit"
          className="btn btn-primary mb-3"
          disabled={todo.length > 0 ? false : true}>
          {editData.index === -1 ? 'Add' : 'Update'}
        </button>

      </div>

    </form>
  )
}
