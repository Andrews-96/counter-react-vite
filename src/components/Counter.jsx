import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Counter({ initialValue = 0, step = 1 }) {
  const [count, setCount] = useState(Number(initialValue) || 0)

  const increment = () => setCount(c => c + step)
  const decrement = () => setCount(c => c - step)
  const reset = () => setCount(Number(initialValue) || 0)

  return (
    <div className="counter" role="region" aria-label="Contador">
      <div className="display" aria-live="polite" aria-atomic="true">
        <span className="value">{count}</span>
      </div>
      <div className="actions">
        <button onClick={decrement}>–</button>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

Counter.propTypes = {
  initialValue: PropTypes.number,
  step: PropTypes.number
}
