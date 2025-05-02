import { useState } from 'react'
import './App.css'
import FlashCards from './FlashCards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <FlashCards />
    </div>
  )
}

export default App
