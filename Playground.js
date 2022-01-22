import React, { useState } from 'react'
import randomColor from 'randomcolor'

export default function Playground() {
  const [count, setCount] = useState(0)

  const [color, setColor] = useState(null)
  useEffect(() => {
    setColor(randomColor())
  }, [count])

  return (
    <div style={{ borderTop: `10px solid ${color}`}}>
      {count}
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
