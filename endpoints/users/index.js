
const handlers = ({ axios }) => ({
  get: async (_req, res) => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/")
    res.status(200).send(data);
  },
  post: async (req, res) => {
    const { body } = req;
    const { data } = await axios.post("https://jsonplaceholder.typicode.com/users/", body)
    return res.status(200).send(data);
  },
  put: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    await axios.put("https://jsonplaceholder.typicode.com/users/" + id, body)
    return res.sendStatus(204)
  },
  delete: async (req, res) => {
    const { id } = req.params;
    await axios.delete("https://jsonplaceholder.typicode.com/users/" + id)
    return res.sendStatus(204)
  },
})

module.exports = handlers;
