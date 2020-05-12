const usAssets = require('../src/useCase/usAssets');

const httpRepo = require('../src/repository/httpRepository');

const bunyan = require('bunyan');
const seq = require('bunyan-seq');

const log = bunyan.createLogger({
    name: 'cripto-money',
    streams: [
        {
            stream: process.stdout,
            level: 'error'
        },
        seq.createStream({
            serverUrl: 'fakeMock',
            level: 'info'
        })
    ]
})

jest.mock('../src/repository/httpRepository');


describe('When GetAssetsByTicker on latestAsset throw error', () => {

    it('should throw exception and not continue', async () => {

        httpRepo.GetAssetsByTicker.mockImplementation(() => {  });

        expect(await usAssets(httpRepo, null, log).latestAsset('AAPL')).toThrow();
    });
});