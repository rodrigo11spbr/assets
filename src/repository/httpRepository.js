const https = require('https');
const settings = require('../settings.json');
const path = require('path');

module.exports = logger => {

    module.GetAssetsByTicker = (ticker) => {
        https.get(path.join(settings.assetsUrl, ticker), (response) => {
            let data = '';
            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => JSON.parse(data).explanation);

            response.on('error', (error) => {
                logger.error('error when try to get asset', error.message);
                throw ('error when try to get asset');
            });
        });
    }

    return module;
}