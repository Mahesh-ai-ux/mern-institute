const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const role = require('../middleware/role');
const { body, validationResult } = require('express-validator');
const Lead = require('../models/Lead');

router.post('/', [auth, body('name').notEmpty()], async (req,res)=>{
  const errors = validationResult(req);
  if(!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try{
    const lead = new Lead({ ...req.body });
    await lead.save();
    res.json(lead);
  }catch(err){ console.error(err); res.status(500).send('Server error'); }
});

router.get('/', auth, async (req,res)=>{
  try{
    let query = {};
    if(req.user.role === 'tutor') query = { assignedTo: req.user._id };
    const leads = await Lead.find(query).populate('assignedTo','name email role');
    res.json(leads);
  }catch(err){ console.error(err); res.status(500).send('Server error'); }
});

router.put('/:id', auth, async (req,res)=>{
  try{
    const lead = await Lead.findById(req.params.id);
    if(!lead) return res.status(404).json({ message: 'Lead not found' });
    Object.assign(lead, req.body);
    await lead.save();
    res.json(lead);
  }catch(err){ console.error(err); res.status(500).send('Server error'); }
});

module.exports = router;
