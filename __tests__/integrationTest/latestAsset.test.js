const server = require('../../src/server');
const request = require("supertest")(server);

describe('when not send a valid ticker', () => {
    test('should return status code 400', () => {
        request.post('/api/asset/').send({ tickers: [] }).expect(400)
    });
});

describe('when send a valid tickers', () => {
    test('should return status code 200 with body', () => {
        request.post('/api/asset').send({ tickers: ['msft'] }).expect(200);
    });
});