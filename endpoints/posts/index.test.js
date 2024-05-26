const postHandler = require('./index')
describe("Endpoints", () => {
  describe("POSTS", () => {
    it("should create new post", async () => {

      const mockUsers = [
        { id: 1 },
        { id: 2 }
      ]

      const post = {
        userId: 1,
        id: 1,
        title: "titulo",
        body: "cuerpo del post"
      }
      const req = { body: post }
      const resp = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      }
      const axios = {
        get: jest.fn().mockResolvedValue({ data: mockUsers }),
        post: jest.fn().mockResolvedValue({ data: { id: 1000 } })
      }

      await postHandler({ axios }).post(req, resp)
      expect(resp.status.mock.calls).toEqual([[200]])
      // expect(resp.axios.mock.calls).toEqual([['']])

    })
  });
});
