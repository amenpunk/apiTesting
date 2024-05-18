const handler = require('./index');

describe("Endpoints", () => {
  describe("Users", () => {
    describe("GET", () => {
      it("should return a list of users", async () => {

        const axios = {
          get: jest.fn().mockResolvedValue({ data: 2 })
        }

        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn()
        }

        await handler({ axios }).get({}, res)

        expect(res.status.mock.calls).toEqual([[200]])
        expect(res.send.mock.calls).toEqual([[2]])

      });
    });

    describe("POST", () => {
      it("should create a new user", async () => {
        const axios = {
          post: jest.fn().mockResolvedValue({ data: 2 })
        }
        const req = {
          body: 'body'
        }
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn()
        }
        await handler({ axios }).post(req, res)
        expect(axios.post.mock.calls).toEqual([['https://jsonplaceholder.typicode.com/users/', 'body']])
        expect(res.status.mock.calls).toEqual([[200]])
        expect(res.send.mock.calls).toEqual([[2]])
      });
    })

    describe("PUT", () => {
      it("should update a user", async () => {
        const axios = {
          put: jest.fn()
        }
        const req = {
          params: { id: 1 },
          body: 'body'
        }
        const res = {
          sendStatus: jest.fn()
        }
        await handler({ axios }).put(req, res)
        expect(axios.put.mock.calls).toEqual([['https://jsonplaceholder.typicode.com/users/1', 'body']])
        expect(res.sendStatus.mock.calls).toEqual([[204]])
      });
    })

    describe("DELETE", () => {

      it("should delete an user", async () => {
        const req = {
          params: { id: 1 }
        }
        const axios = {
          delete: jest.fn()
        }
        const resp = {
          sendStatus: jest.fn()
        }
        await handler({ axios }).delete(req, resp)
        expect(axios.delete.mock.calls).toEqual([['https://jsonplaceholder.typicode.com/users/1']])
        expect(resp.sendStatus.mock.calls).toEqual([[204]])

      })

    });

  });
})
