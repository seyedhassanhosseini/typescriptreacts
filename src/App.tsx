import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import TodoList from './components/TodoList';
import {Todo} from './models/models'
let newOne:any;  // can use also unknown
newOne = "seyed";

let name:string;
name = "seyedssss";

let age:number;
age = 24;

let student:boolean;
student = true;

let hobbies:string[]; // array of string
let hobbie:number[]; // array of number

let role: [number, string];

role = [5, "seyed"];

type Person = {
  name: string;
  age?: number;
};

let seyed: Person = {
  name: "pishssssss",
  age: 10
}

type Persons = [
  age: number,
  name: string
]

let people: Persons = [25,"hassan"] ;

let printName : (name: string) => void;   // function


interface Frist {
  name: string;
  age?: number;
};

type Second  = Frist & {
  salarry: number;
  interest: string;
}

const App: React.FC = () => {
  const[todo, setTodo] = useState<string>("");
  const[todos, setTodos] = useState<Array<Todo>>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos,{ id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className='heading'> Taskify </span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    
    </div>
  );
}

export default App;
