import React from 'react'

const Todo = ({ todo, removeTodo}) => {
    return (
        <div className="todo" 
        style={{textDecoration: todo.isCompleted ? "line-through" : ""}}> 
            <div className="content">
                <p>{todo.text}</p>
                <p className="category">({todo.categoria})</p>
              </div>
              <div>
                <button className='remove' onClick={() => removeTodo(todo.id)}>X</button>
              </div>
            </div>
    )
}
export default Todo;