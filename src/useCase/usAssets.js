
module.exports = (httpRepository, mongoRepository, log) => {
    module.latestAsset = async (ticker) => {
        try {
            var data = await httpRepository.GetAssetsByTicker(ticker);
        } catch (error) {
            log.error('ERROR WAS THROW WHEN TRY TO GET ASSET', { error });
        }

        try {
            await mongoRepository.insert({ asset: data }, 'US_ASSETS');
        } catch (error) {
            log.error('ERROR WHEN TRY TO SAVE ASSETS', { error });
        }

        log.info("asset recovered", { data });
        return data;
    }

    module.previousAsset = (numberOfPage, totalPerPage) => {
        return `ok previous ${numberOfPage} of ${totalPerPage}`
    }

    return module;
}