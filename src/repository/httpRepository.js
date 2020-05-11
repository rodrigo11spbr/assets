const axios = require('axios');
const settings = require('../settings.json');
const path = require('path');

module.exports = {
    GetAssetsByTicker: async (ticker) => {
        if (Array.isArray(ticker)) {
            ticker = ticker.join(',').toUpperCase();
        }
        else {
            ticker = ticker.toUpperCase();
        }

        let url = settings.assetsUrl.replace('{ticker}', ticker);
        const { data, status } = await axios.get(url);
        return status !== 200 ? {} : data;
    }
}