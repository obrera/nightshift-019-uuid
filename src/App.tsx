import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(() => crypto.randomUUID())

  function handleGenerate() {
    setValue(crypto.randomUUID())
  }

  return (
    <main className="app">
      <h1>UUID Generator</h1>
      <p>Generate RFC 4122 UUID v4 values directly in your browser.</p>
      <div className="card">
        <code>{value}</code>
      </div>
      <div className="actions">
        <button onClick={handleGenerate} type="button">
          Generate new UUID
        </button>
      </div>
    </main>
  )
}

export default App
