const app = require('express')();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.listen(process.env.PORT || 8080, console.log("server is running"));

const controllerPath = './src/controller';

fs.readdirSync(controllerPath).forEach(file => {
    const controller = require(path.resolve(controllerPath, file));
    new controller(app);
});