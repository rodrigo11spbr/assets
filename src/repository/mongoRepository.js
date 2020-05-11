module.exports = context => {

    module.insert = async (args, dbname) => {
        let db = await context.connect();
        await db.collection(dbname).insertOne(args, (err, result) => {
            if (err) {
                throw err;
            }
            else {
                return result;
            }
        });
    }

    module.findPagined = async (numberOfPage, totalPerPage, dbname) => {
        let db = await context.connect();
        let result = await db.collection(dbname).find().toArray();
        return result.slice(numberOfPage * totalPerPage, (numberOfPage + 1) * totalPerPage);
    }

    module.find = async (dbname) => {
        let db = await context.connect();
        let result = await db.collection(dbname).find().toArray();
        return result;
    }

    return module;
}