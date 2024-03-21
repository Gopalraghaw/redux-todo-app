import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodoAction, editTodoAction } from '../redux/action/todo.action';

export default function List() {
  const todos = useSelector(state => state.todos);
 const dispatch = useDispatch();
  return (
    <ul className="list-group">
      {
        todos.length > 0 ? todos.map((todo, index) => {
          return <li className="list-group-item d-flex justify-content-between"key={index}>
            <div>
            {todo}
            </div>
            <div>
              <button 
              className="btn btn-warning me-2"
              onClick={()=>dispatch(editTodoAction(index,todo))}
               >Edit</button>
              <button 
              className='btn btn-danger'
              onClick={()=>dispatch(deleteTodoAction(todo))}>Delete</button>
            </div>
          </li>
        }) : <li className="list-group-item">No todo</li>
      }

    </ul>
  )
} 
