import React from 'react'
export default function Dashboard(){
  const user=JSON.parse(localStorage.getItem('user')||'null')
  return(<div><h2>Welcome {user?user.name:'Guest'}</h2></div>)
}
