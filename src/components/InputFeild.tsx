import React from 'react'
import './styles.css'


interface Props {
  todo: string,
  setTodo:React.Dispatch<React.SetStateAction<string>>
}

const InputFeild: React.FC<Props> = ({todo,setTodo} : Props) => {

  return (
    <form className='input'>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} type='input' placeholder='Enter a task' className='input__box'/>
      <button className='input_submit' type='submit'> Send</button>
    </form>
  )
}

export default InputFeild
