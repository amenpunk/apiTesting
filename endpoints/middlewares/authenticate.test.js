const auth = require('./authenticate');

describe("MIDDLEWARES", () => {

  describe("AUTHENTICATE", () => {
    it('Should have id = 1', () => {

      const req = {
        header: jest.fn().mockReturnValue(1)
      }
      const resp = {
        sendStatus: jest.fn()
      }

      const next = jest.fn()
      auth(req, resp, next)
      expect(req.header.mock.calls).toEqual([['user_id']])
      expect(resp.sendStatus.mock.calls).toEqual([])
      expect(next.mock.calls).toEqual([[]])

    })
    it("should fail if user_id != 1", () => {
      const req = {
        header: jest.fn().mockReturnValue(2)
      }
      const resp = {
        sendStatus: jest.fn()
      }

      const next = jest.fn()
      auth(req, resp, next)
      // expect(req.header.mock.calls).toEqual([['user_id']])
      expect(resp.sendStatus.mock.calls).toEqual([[403]])
      expect(next.mock.calls).toEqual([])
    })
  });

});
