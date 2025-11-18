import React, { useState } from 'react'
import API from '../api/axios'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const nav = useNavigate()
  const submit = async (e)=>{
    e.preventDefault()
    try{
      const { data } = await API.post('/auth/login',{ email, password })
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      nav('/')
    }catch(err){ alert(err?.response?.data?.message || 'Login failed') }
  }
  return (
    <form onSubmit={submit} className="card">
      <h3>Login</h3>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" />
      <button>Login</button>
    </form>
  )
}
