const route = require('express').Router();

module.exports = (app, usAsset) => {

    route.post('/api/asset/', async (request, response) => {

        let { ticker } = request.body;

        if (!ticker) {
            return response.status(400).json({ message: 'asset ticker are necessary' });
        }

        let result = await usAsset.latestAsset(ticker);

        return result.length !== 0 ? response.json(result) : response.status(404).json(result);
    });

    route.get('/api/asset/', async (request, response) => {
        let { numberOfPage, totalPerPage } = request.query;

        let result = await usAsset.previousAsset(numberOfPage, totalPerPage);

        return response.json(result);
    });

    app.use(route);
}