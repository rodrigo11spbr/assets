const axios = require('axios');
const settings = require('../settings.json');

module.exports = {
    getAssetsByTicker: async (ticker) => {
        let url = settings.assetsUrl.replace('{ticker}', ticker);
        const { data, status } = await axios.get(url);
        return status !== 200 ? {} : data;
    }
}