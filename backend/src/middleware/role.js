module.exports = function(allowed = []){
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ message: 'No user' });
    if (typeof allowed === 'string') allowed = [allowed];
    if (allowed.length && !allowed.includes(req.user.role))
      return res.status(403).json({ message: 'Forbidden: insufficient role' });
    next();
  }
}
