import React from 'react'
import Counter from './components/Counter.jsx'

export default function App() {
  return (
    <main className="container">
      <header>
        <h1>Contador React</h1>
        <p>Proyecto base con Vite + React. No conoces el poder del lado oscuro.</p>
      </header>

      <section>
        <Counter initialValue={0} step={1} />
      </section>
    </main>
  )
}


