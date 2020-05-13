const usAssets = require('../src/useCase/usAssets');

const httpRepo = require('../src/repository/httpRepository');
jest.mock('GetAssetsByTicker');


const bunyan = require('bunyan');
const seq = require('bunyan-seq');


const log = bunyan.createLogger({
    name: 'cripto-money',
    streams: [
        {
            stream: process.stdout,
            level: 'error'
        }
    ]
});

describe('When GetAssetsByTicker on latestAsset throw error', () => {
    test('should throw exception and not continue', async () => {
        expect(await usAssets(httpRepo, null, log).latestAsset('AAPL')).toThrow();
    });
});