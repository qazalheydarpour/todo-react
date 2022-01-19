import React from 'react'
import TodoItems from '../TodoItems/TodoItems'
import './todocard.css'


const TodoCard = ({todo , handelDeleteTodoList , handelUpdateTodoItemStatus , handelAddTodoItem}) => {
    return (
              <div className='todo container' key={todo.id}>
              <img className='closeIcon' onClick={()=>handelDeleteTodoList(todo.id)} src={require('./../../img/icons8-close-50.png')}/>
              <p className='todoname'>{todo.name}</p>
              <p className='tododesc'>{todo.description}</p>
              <TodoItems todo = {todo}
              handelUpdateTodoItemStatus = {handelUpdateTodoItemStatus}
              />
              <hr/>
              <p className='addnewtext' onClick={() => handelAddTodoItem(todo.id)} >+ ADD NEW ITEM</p>
              </div>
    )
}

export default TodoCard
