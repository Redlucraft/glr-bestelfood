import { useState } from 'react'
import { Button } from '@mui/material'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button variant="contained">Hello World</Button>
    </div>
  )
}

export default App
