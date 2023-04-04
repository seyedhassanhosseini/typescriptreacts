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

let people: Persons = [25,"hassan"] 

function App() {
  [age, name] = people;
  return (
    <div className="App">
      {age}
      <br/>
      <br/>
      <br/>
      {name}
      <br/>
      <br/>
      <br/>

      
    </div>
  );
}

export default App;
