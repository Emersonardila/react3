import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterApp from './components/CounterApp'
import DataDisplay from './components/DataDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterApp/>
      <DataDisplay/>
       
    </>
  )
}

export default App
