import { useState } from 'react'
import './App.css'

function App() {
  const [step, setStep] = useState(0)
  const [count, setCount] = useState(0)

  const date = new Date()
  date.setDate(date.getDate() + count)

  return (
    <>
      <div>
        <span>
          <button onClick={() => setStep(step => step - 1)}>-</button>
          Step: {step}
          <button onClick={() => setStep(step => step + 1)}>+</button>
        </span>
      </div>

      <div>
        <span>
          <button onClick={() => setCount(count => count - step)}>-</button>
          Count: {count}
          <button onClick={() => setCount(count => count + step)}>+</button>
        </span>
      </div>

      <div>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `
          }
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </>
  )
}

export default App
