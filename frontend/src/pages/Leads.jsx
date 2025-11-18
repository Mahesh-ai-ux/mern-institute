import React, { useEffect, useState } from 'react'
import API from '../api/axios'

export default function Leads(){
  const [leads, setLeads] = useState([])
  const [name, setName] = useState('')
  useEffect(()=>{ fetchLeads() },[])
  const fetchLeads = async ()=>{
    try{ const { data } = await API.get('/leads'); setLeads(data) }
    catch(err){ console.error(err); alert('Could not fetch leads') }
  }
  const add = async (e)=>{
    e.preventDefault()
    try{ await API.post('/leads',{ name }); setName(''); fetchLeads() }
    catch(err){ alert('Could not add lead') }
  }
  return (
    <div>
      <h3>Leads</h3>
      <form onSubmit={add}>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Lead name" />
        <button>Add</button>
      </form>
      <ul>
        {leads.map(l=> (<li key={l._id}>{l.name} — {l.status} — {l.assignedTo?.name||'unassigned'}</li>))}
      </ul>
    </div>
  )
}
