
module.exports = (httpRepository, mongoRepository) => {
    module.latestAsset = (ticker) => {
        try {
            var asset = httpRepository.GetAssetsByTicker(ticker);
        } catch (error) {
            // ERROR WAS THROW WHEN TRY TO GET ASSET
        }

        return `ok latest ${ticker}`
    }

    module.previousAsset = (numberOfPage, totalPerPage) => {
        return `ok previous ${numberOfPage} of ${totalPerPage}`
    }

    return module;
}