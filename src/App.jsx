import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card2'
function App() {
  const [count, setCount] = useState(0)
  let obj ={
    username: "Akansha",
    age : 20
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Mini Project</h1>
      <Card username="Hello dog" className='rounded-xl'  />
      {/* <Card username=""/> */}

      
    </>
  )
}

export default App
