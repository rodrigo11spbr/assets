module.exports = (httpRepository, mongoRepository, log) => {

    module.latestAsset = async (ticker) => {

        ticker = Array.isArray(ticker) ? ticker.join(',').toUpperCase() : ticker.toUpperCase();

        try {
            var data = await httpRepository.GetAssetsByTicker(ticker);
        } catch (error) {
            log.error('ERROR WAS THROW WHEN TRY TO GET ASSET', { error });
            throw error;
        }

        try {
            await mongoRepository.insert({ asset: data }, 'US_ASSETS');
        } catch (error) {
            log.error('ERROR WHEN TRY TO SAVE ASSETS', { error });
        }
        return data;
    }

    module.previousAsset = async (numberOfPage, totalPerPage) => {
        let result = [];

        if (numberOfPage && totalPerPage) {
            result = await mongoRepository.findPagined(parseInt(numberOfPage), parseInt(totalPerPage), 'US_ASSETS');
            return { pageNumber: numberOfPage, totalInPage: result.length, data: result }
        }
        else {
            result = await mongoRepository.find('US_ASSETS');
            return { totalInPage: result.length, data: result };
        }
    }

    return module;
}