import React, { useState, useEffect } from "react";
import TodoService from "../services/todoService";
import { useDispatch } from "react-redux";
import { addDailyTodo, removeDailyTodo } from "../store/actions/todoActions";

export default function TodoList() {
  const dispatch = useDispatch();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let todoService = new TodoService();
    todoService.getTodos().then((result) => setTodos(result.data));
  }, []);

  const handleTodoChange = (data) => {

    let todo = todos.find(t=>t.id===data.id)
    let todoCopy = {...todo}
    todoCopy.completed = !todoCopy.completed;

    let newTodos = todos.filter(t=>t.id!==data.id)
    newTodos.push(todoCopy)

    setTodos(newTodos)

    if(data.completed===false){
        dispatch(addDailyTodo(data))
    }else{
        dispatch(removeDailyTodo(data))
    }

    
    //console.log(todosCopy)
   
  };

  return (
    <div>
      <table>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.title}</td>
            <td>
              <button onClick={()=>handleTodoChange(todo)}>{todo.completed.toString()}</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
