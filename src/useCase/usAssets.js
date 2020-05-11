
module.exports = (httpRepository, mongoRepository) => {
    module.latestAsset = async (ticker) => {
        try {
            var asset = await httpRepository.GetAssetsByTicker(ticker);
        } catch (error) {
            // ERROR WAS THROW WHEN TRY TO GET ASSET
        }

        return asset
    }

    module.previousAsset = (numberOfPage, totalPerPage) => {
        return `ok previous ${numberOfPage} of ${totalPerPage}`
    }

    return module;
}