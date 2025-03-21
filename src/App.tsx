import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  let temp=true;

  return (
    <>
    <h1>Hello World!</h1>
    <p>{temp ? 'true':'false' }</p>
    <label htmlFor="name">name : </label>
    <input id='name' type="text" />
    </>
  )
}

export default App
