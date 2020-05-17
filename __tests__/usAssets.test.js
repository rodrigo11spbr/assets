const usAssets = require('../src/useCase/usAssets');

const httpRepo = require('../src/repository/httpRepository');
jest.mock('../src/repository/httpRepository');

const mongoRepo = require('../src/repository/mongoRepository');
jest.mock('../src/repository/mongoRepository');

const bunyan = require('bunyan');

const log = bunyan.createLogger({
    name: 'cripto-money-unit-test',
    streams: [{ stream: process.stdout, level: 'error' }]
});

describe('when getAssetsByTicker on latestAsset throw error when try to get assets', () => {
    test('should throw exception and not continue', async () => {
        httpRepo.getAssetsByTicker.mockRejectedValueOnce(new Error('mock http test error'));
        await expect(usAssets(httpRepo, null, log).latestAsset('AAPL')).rejects.toMatchObject({ message: 'mock http test error' });
    });
});

describe('when getAssetsByTicker on latestAsset throw error when try to save on database', () => {
    test('should throw exception and continue', async () => {
        beforeAll(() => {
            httpRepo.getAssetsByTicker.mockResolvedValue(() => { [{ test: 'sample test' }] });
            mongoRepo.insert.mockRejectedValueOnce(new Error('mock mongo test error'));
        });

        let asset = usAssets(httpRepo, mongoRepo, log);
        asset.latestAsset('AAPL').then(result => {
            expect(result).toBe([{ test: 'sample test' }]);
        });
    });
});

describe('when previousAsset pagined throw error', () => {
    test('should throw exception and not continue', async () => {
        beforeAll(() => {
            mongoRepo.findPagined.mockResolvedValue(() => { [{ test: 'test' }, { test: 'test1' }, { test: 'test2' }] });
        });
        usAssets(null, mongoRepo, log).previousAsset(parseInt(0), parseInt(10), 'SomeTable').then(result => {
            expect(result).toBe({ pageNumber: 0, totalInPage: 2, data: [{ test: 'test' }, { test: 'test1' }, { test: 'test2' }] })
        });
    });
});