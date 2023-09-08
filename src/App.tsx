import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount((data) => ++data)}>sumar {count}</button>
    </>
  )
}

export default App
