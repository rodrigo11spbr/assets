const https = require('https');
const settings = require('../settings.json');
const path = require('path');

module.exports = {
    GetAssetsByTicker: (ticker) => {
        https.get(settings.assetsUrl.replace("{ticker}", ticker), (response) => {
            let data = '';
            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                return JSON.parse(data).explanation
            });

            response.on('error', (error) => {
                throw (error.message);
            });
        });
    }
}