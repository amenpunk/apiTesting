
/*
 * NOTE: data format
 * {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
*/

const posts = ({ axios }) => ({
  get: async (req, res) => {
    let { data } = await axios.get("https://jsonplaceholder.typicode.com/posts/")
    res.status(200).json(data)
  },
  post: async (req, res) => {
    await axios.post("https://jsonplaceholder.typicode.com/posts/")
    return res.status(200).send({ id: 1000 })
  }
})

module.exports = posts;
