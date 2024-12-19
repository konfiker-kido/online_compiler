import Home from './Components/Home.jsx'
import CodeState from './Context/CodeState'

function App() {
  return (
    <>
      <CodeState>
        <Home />
      </CodeState>
    </>
  )
}

export default App
