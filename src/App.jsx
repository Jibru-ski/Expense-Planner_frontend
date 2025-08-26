import { useState } from 'react'
import './App.css'
import { Route } from 'react-router-dom'

function App() {
  return (
    <Route>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Private Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Route>
  )
}

export default App
