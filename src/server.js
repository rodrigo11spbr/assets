const app = require('express')();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.listen(process.env.PORT || 8080, console.log("server is running"));

const controllerPath = './src/controller';


/**
 * resolving DI with IOC pattern
 */

// asset controller and your dependencies
let httpRepository = require('./repository/httpRepository');
let mongoContext = require('./repository/mongoContext');
let mongoRepository = require('./repository/mongoRepository')(mongoContext);
let usAsset = require('./useCase/usAssets')(httpRepository, mongoRepository);
require(path.resolve(controllerPath, 'assetController'))(app, usAsset);