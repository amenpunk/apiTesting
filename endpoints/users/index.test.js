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
  });
})
