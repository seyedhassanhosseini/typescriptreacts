import React from 'react';
import './styles.css';
import { Todo } from '../models/models';
import SingleTodo from './SingleTodo';

interface props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;

}

const TodoList: React.FC<props> = ({todos, setTodos}) => {
  return (
    <div className='todos'>
      {
        todos.map( (todo, index) => (
          <li><SingleTodo key={todo.id} index={index} todo={todo} todos={todos} setTodos={setTodos}/></li>
        ))
      }
    </div>
  )
}

export default TodoList;
