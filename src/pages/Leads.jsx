import React,{useState,useEffect} from 'react'
import axios from 'axios'
export default function Leads(){
  const [leads,setLeads]=useState([])
  const [name,setName]=useState('')
  const fetchLeads=async()=>{const {data}=await axios.get('/api/leads');setLeads(data)}
  const add=async e=>{e.preventDefault();await axios.post('/api/leads',{name});setName('');fetchLeads()}
  useEffect(()=>{fetchLeads()},[])
  return(<div><h3>Leads</h3>
    <form onSubmit={add}><input value={name} onChange={e=>setName(e.target.value)} /><button>Add</button></form>
    <ul>{leads.map(l=>(<li key={l._id}>{l.name}</li>))}</ul></div>)
}
