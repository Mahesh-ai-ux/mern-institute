import React, { useState } from 'react'
import API from '../api/axios'
import { useNavigate } from 'react-router-dom'

export default function Register(){
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const nav = useNavigate()
  const submit = async (e)=>{
    e.preventDefault()
    try{
      const { data } = await API.post('/auth/register',{ name,email,password })
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      nav('/')
    }catch(err){ alert(err?.response?.data?.message || 'Register failed') }
  }
  return (
    <form onSubmit={submit} className="card">
      <h3>Register</h3>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" />
      <button>Register</button>
    </form>
  )
}
