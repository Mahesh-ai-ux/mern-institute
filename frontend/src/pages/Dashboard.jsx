import React from 'react'

export default function Dashboard(){
  const user = JSON.parse(localStorage.getItem('user')||'null')
  return (
    <div>
      <h2>Welcome{user? `, ${user.name}` : ''}</h2>
      <p>Role: {user?.role || 'guest'}</p>
    </div>
  )
}
