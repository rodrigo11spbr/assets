
module.exports = (httpRepository, mongoRepository) => {
    module.latestAsset = (ticker) => {

        let assets = httpRepository.GetAssetsByTicker(ticker);



        return `ok latest ${ticker}`
    }

    module.previousAsset = (numberOfPage, totalPerPage) => {
        return `ok previous ${numberOfPage} of ${totalPerPage}`
    }

    return module;
}