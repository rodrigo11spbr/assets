
module.exports = (httpRepository, mongoRepository) => {
    module.latestAsset = async (ticker) => {
        try {
            var data = await httpRepository.GetAssetsByTicker(ticker);
        } catch (error) {
            // ERROR WAS THROW WHEN TRY TO GET ASSET
        }

        try {
            await mongoRepository.insert({ asset: data }, 'US_ASSETS');
        } catch (error) {
            // ERROR WHEN TRY TO SAVE ASSETS
        }

        return data;
    }

    module.previousAsset = (numberOfPage, totalPerPage) => {
        return `ok previous ${numberOfPage} of ${totalPerPage}`
    }

    return module;
}