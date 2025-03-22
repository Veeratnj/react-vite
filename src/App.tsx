import { useState } from 'react'
import './App.css'
import HeaderComponent from './Components/HeaderComponent';
import ContentComponent from './Components/ContentComponent';
import FooterComponent from './Components/FooterComponent';

function App() {
  const [count, setCount] = useState(0);
  let temp=true;

  return (
    <>
    <h1>Hello World!</h1>
    <p>{temp ? 'true':'false' }</p>
    <label htmlFor="name">name : </label>
    <input id='name' type="text" />
    <HeaderComponent/>
    <ContentComponent/>
    <FooterComponent/>

    </>
  )
}

export default App
