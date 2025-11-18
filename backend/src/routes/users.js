const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const role = require('../middleware/role');
const User = require('../models/User');

router.get('/', auth, role(['admin','hr']), async (req,res)=>{
  const users = await User.find().select('-password');
  res.json(users);
});

module.exports = router;
