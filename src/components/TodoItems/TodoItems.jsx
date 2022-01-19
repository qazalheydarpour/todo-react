import React from 'react'
import './todoitems.css'

const TodoItems = ({todo , handelUpdateTodoItemStatus }) => {
    return (
        
            <div>
                {
                  todo.items.map ( item => (
                    
                    <div key={`${item.id}-${todo.id}`}>
                      <input
                      id={`${item.id}-${todo.id}`}
                      type='checkbox'
                      checked={item.status}
                      onChange={(e)=>handelUpdateTodoItemStatus(item.id,todo.id,e)}
                      />
                      <label className='todoitemtext' htmlFor={`${item.id}-${todo.id}`}>{item.title}</label>
                    </div>
                    
                  ))
                }
                
              </div>
        
    )
}

export default TodoItems
