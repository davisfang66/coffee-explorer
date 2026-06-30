import './App.css'
import Home from './pages/Home'
import FloatingCookies from './components/FloatingCookies'

function App() {
  return (
    <div className="app-shell">
      <FloatingCookies />
      <Home />
    </div>
  )
}

export default App