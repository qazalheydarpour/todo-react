// ****************************************in this solution we use state **************************************************************************
import { useState } from "react";
import data, { RandomId } from "./../data";
import  Header from './header/Header'
import TodoCard from './TodoCard/TodoCard'
import './../App.css'

function Todo() {
  const [todo, setTodo] = useState(data);
  //.............................................................
  const handelAddTodoList = () => {
    const name = prompt("enter name");
    const description = prompt("enter desc");
    const title = prompt("enter title");
    setTodo([...todo, { id: RandomId(), name, description, items: [] }]);
  };
  //.............................................................
  const handelDeleteTodoList = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };
  //.............................................................
  const handelAddTodoItem = (id) => {
    const title = prompt("enter your new item");
    setTodo(
      todo.map((todo) =>
        todo.id == id
          ? {
              ...todo,
              items: [...todo.items, { id: RandomId(), title, status: false }],
            }
          : todo
      )
    );
  };
  //.............................................................
  const handelUpdateTodoItemStatus = (itemId, todoId, e) => {
    setTodo(
      todo.map((todo) =>
        todo.id == todoId
          ? {
              ...todo,
              items: todo.items.map((item) =>
                item.id == itemId
                  ? {
                      ...item,
                      status: e.target.checked,
                    }
                  : item
              ),
            }  
          : todo
      )
    );
  };
  //.............................................................

  return (
    <div className="appBody">
      <Header />
      <div className="add-item-container container" onClick={handelAddTodoList}>
        <div>
          <img
            src={require("./../img/icons8-add-50.png")}
            
          />
        </div>
        <div>
          <p>ADD NEW TASK</p>
        </div>
      </div> 
          <div className="App">
            {/* <div className='card-container'> */}
            {todo.map((todo) => (
              <TodoCard
                todo={todo}
                key={todo.id}
                handelDeleteTodoList={handelDeleteTodoList}
                handelUpdateTodoItemStatus={handelUpdateTodoItemStatus}
                handelAddTodoItem={handelAddTodoItem}
              />
            ))}
            {/* </div> */}
            
          </div>
          <br/>
    </div>
  );
}

export default Todo;
