import React from 'react'
import { Outlet, Link } from 'react-router-dom'
export default function App(){
  return (
    <div style={{padding:20}}>
      <nav>
        <Link to="/">Dashboard</Link> | 
        <Link to="/leads">Leads</Link> | 
        <Link to="/login">Login</Link>
      </nav>
      <Outlet />
    </div>
  )
}
