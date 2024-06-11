import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-4xl font-bold bg-orange-500'>Currency Convertor App</h1>
      <Input/>
    </>
  )
}

export default App
