import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Layout from './components/Layout'
import RequireAuth from './components/RequireAuth'
import { Provider} from './components/ui/provider'

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<RequireAuth />}>
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              {/* Add other routes here */}
            </Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
