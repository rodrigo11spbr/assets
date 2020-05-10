const route = require('express').Router();

class assetController {

    constructor(app) {
        this._init(app);
    }

    async _getTicker(request, response) {

        let { ticker } = request.query;

        if (!ticker) {
            return response.status(400).json({ message: 'ticker of instrumet are necessary' });
        }

        return response.json(ticker);
    }

    _init(app) {
        route.get('/api/asset', this._getTicker);

        app.use(route);
    }
}

module.exports = assetController;