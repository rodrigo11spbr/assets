const supertest = require("supertest");
const server = require('../../src/server');

const apiServer = supertest(server);


describe('when not send a valid ticker', () => {
    test('should return bad request', async () => {
        const { response } = await apiServer.post('/api/asset/', {
            ticker: []
        });

        expect(response).toBe(400);
    });
});