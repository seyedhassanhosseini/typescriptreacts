import React from 'react';
import './App.css';

let name:string;
name = "seyedssss";

let age:number;
age = 24;

let student:boolean;
student = true;

let hobbies:string[]; // array of string
let hobbie:number[]; // array of number


function App() {
  return (
    <div className="App">
      {name}
      <br/>
      {age}
      <br/>
      {student}

      
    </div>
  );
}

export default App;
