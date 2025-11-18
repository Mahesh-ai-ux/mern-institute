import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function App(){
  return (
    <div className="app">
      <nav>
        <Link to="/">Dashboard</Link> |
        <Link to="/leads">Leads</Link> |
        <Link to="/login">Login</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
