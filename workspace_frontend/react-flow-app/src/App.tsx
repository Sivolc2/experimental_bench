import './App.css'
import FlowDiagram from './components/FlowDiagram'

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Task Flow Diagram</h1>
        <p>Drag nodes, connect tasks, and organize your workflow</p>
      </header>
      <main>
        <FlowDiagram />
      </main>
      <footer>
        <p>
          Built with React Flow - Interactive task management app
        </p>
      </footer>
    </div>
  )
}

export default App
