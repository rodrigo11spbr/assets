const route = require('express').Router();

module.exports = (app, usAsset) => {

    route.get('/api/asset/real-time', async (request, response) => {

        let { ticker } = request.query;

        if (!ticker) {
            return response.status(400).json({ message: 'instrument ticker are necessary' });
        }

        let result = usAsset;
        return response.json(result.latestAsset(ticker));

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