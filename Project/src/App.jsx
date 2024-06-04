import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);


  const add = () => {
    //console.log("clicked", counter);
    //counter = counter+1;
    setCounter(counter+1);
  }

  const remove = () => {
    //console.log("clicked", counter);
    //counter = counter-1;
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h1>Counter value :{counter}</h1>

      <button onClick={add}>add value</button>
      <button onClick={remove}>remove value</button>
    </>
  )
}

export default App
