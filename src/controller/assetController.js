const route = require('express').Router();

module.exports = (app, usAsset) => {

    route.get('/api/asset/real-time', async (request, response) => {

        let { ticker } = request.query;

        if (!ticker) {
            return response.status(400).json({ message: 'asset ticker are necessary' });
        }

        let result = await usAsset.latestAsset(ticker.toUpperCase());
        return response.json(result);
    });

    route.get('/api/asset/previous', async (request, response) => {
        let { numberOfPage, totalPerPage } = request.query;

        if (!numberOfPage || !totalPerPage) {
            return response.json({ assets: [] });
        }

        return response.json({ assets: [] });
    });

    app.use(route);
}