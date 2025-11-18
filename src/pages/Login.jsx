import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
export default function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const nav=useNavigate()
  const submit=async e=>{
    e.preventDefault()
    try{
      const {data}=await axios.post('/api/auth/login',{email,password})
      localStorage.setItem('token',data.token)
      localStorage.setItem('user',JSON.stringify(data.user))
      nav('/')
    }catch{
      alert('Login failed')
    }
  }
  return(<form onSubmit={submit}><h3>Login</h3>
    <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
    <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
    <button>Login</button></form>)
}
