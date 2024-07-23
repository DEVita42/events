import { useState } from 'react'
import './App.css'
import { AlertClock } from './Components/AlertClock'

function App() {
  const [count, setCount] = useState(0)

  return (
      <AlertClock />
  )
}

export default App
