module.exports = context => {

    module.insert = async (args, dbname) => {
        const db = await context.connect();
        await db.collection(dbname).insertOne(args, (err, result) => {
            if (err) {
                throw err;
            }
            else {
                return result;
            }
        });
    }

    module.find = async (numberOfPage, totalPerPage, dbname) => {

    }

    module.find = async (dbname) => {

    }

    return module;
}