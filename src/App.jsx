import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/Register'
import Calculators from './pages/Calculators'
import Dashboard from './pages/Dashboard'
import Accounts from './pages/Accounts'
import Transactions from './pages/Transactions'
import Layout from './components/Layout'
import RequireAuth from './components/RequireAuth'
import { Provider} from './components/ui/provider'
import CreateTransaction from './pages/CreateTransaction'

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
              <Route path='/calculators' element={<Calculators />}/>
              <Route path='/transactions' element={<Transactions />}/>
              <Route path='/createTransaction' element={<CreateTransaction />}/>
              <Route path='/accounts' element={<Accounts />}/>
            </Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
