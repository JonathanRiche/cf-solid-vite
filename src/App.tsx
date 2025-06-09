import { createSignal } from 'solid-js'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <div>
      <h1>Hello from SolidJS!</h1>
      <button onClick={() => setCount(count() + 1)}>
        Count: {count()}
      </button>
    </div>
  )
}

export default App