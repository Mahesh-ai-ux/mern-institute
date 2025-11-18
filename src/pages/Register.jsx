import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
export default function Register(){
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const nav=useNavigate()
  const submit=async e=>{
    e.preventDefault()
    try{
      const {data}=await axios.post('/api/auth/register',{name,email,password})
      localStorage.setItem('token',data.token)
      localStorage.setItem('user',JSON.stringify(data.user))
      nav('/')
    }catch{alert('Register failed')}
  }
  return(<form onSubmit={submit}><h3>Register</h3>
    <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
    <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
    <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
    <button>Register</button></form>)
}
