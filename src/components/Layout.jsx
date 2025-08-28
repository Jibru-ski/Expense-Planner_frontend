import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import '../index.css'

const Layout = () => {
  return (
    <>
    <Sidebar />
    <main>
      <Outlet />
    </main>
    </>
  )
}

export default Layout