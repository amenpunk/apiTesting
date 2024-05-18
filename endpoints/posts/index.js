const posts = ({ axios }) => ({
  post: async (req, res) => {
    let { date } = req.body;
    return res.status(200).json({ ok: true, date })
  }
})

module.exports = posts;
