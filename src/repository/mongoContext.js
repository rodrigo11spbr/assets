const mongo = require('mongodb').MongoClient;
const mongoConfig = require('../settings.json').mongoConfig
module.exports = {
    connect: async () => {
        let client = await mongo.connect(mongoConfig.connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        return client.db(mongoConfig.databaseName);
    }

}