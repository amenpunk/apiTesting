const authenticate = (req, resp, next) => {
  const user_id = req.header('user_id')
  if (user_id != 1) return resp.sendStatus(403)
  return next();
}

module.exports = authenticate;
