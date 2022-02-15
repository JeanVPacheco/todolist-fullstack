module.exports = (err, _req, res, _next) => {
  if (err.errCode) {
    const { errCode, message } = err;
    return res.status(errCode).json({ message });
  }
  return res.status(500).json({ message: 'Internal error' });
};
