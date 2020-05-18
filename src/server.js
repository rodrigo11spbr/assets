const app = require('express')();
const bodyParser = require('body-parser');
const path = require('path');
const bunyan = require('bunyan');
const seq = require('bunyan-seq');

const log = bunyan.createLogger({
    name: 'assets',
    streams: [
        { stream: process.stdout, level: 'error' }, { stream: process.stdout, level: 'info' },
        seq.createStream({ serverUrl: require('./settings.json').seqUrl, level: 'info' })
    ]
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== 'test') {
    app.listen(process.env.PORT || 8080, log.info('server was started'));
}

const controllerPath = './src/controller';

/**
 * resolving DI with IOC pattern
 */

// asset controller and your dependencies
let httpRepository = require('./repository/httpRepository');
let mongoContext = require('./repository/mongoContext');
let mongoRepository = require('./repository/mongoRepository')(mongoContext);
let usAsset = require('./useCase/usAssets')(httpRepository, mongoRepository, log);
require(path.resolve(controllerPath, 'assetController'))(app, usAsset);


module.exports = app;