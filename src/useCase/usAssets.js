class usAssets {

    constructor(mongoRepository, httpRepository) {
        this.mongoRepository = mongoRepository;
        this.httpRepository = httpRepository;
    }

}

module.exports = usAssets;