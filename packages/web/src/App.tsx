import { useState } from 'react'
import { SharedButton } from "@rawaf/shared";


import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <SharedButton text="Increment Count" onClick={() => setCount(prev => prev + 1)}  />
        <SharedButton text="Decrement Count" onClick={() => setCount(prev => prev - 1)} />

      </div>

    </>
  )
}

export default App
