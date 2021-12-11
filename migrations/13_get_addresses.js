module.exports = function (deployer) {
    deployer.then(async () => {
        const lmsrMarketMakerFactory = await artifacts
            .require("LMSRMarketMakerFactory")
            .deployed();

        const conditionalTokens = await artifacts
            .require("ConditionalTokens")
            .deployed();

        console.log(lmsrMarketMakerFactory.address)
        console.log(conditionalTokens.address)
    })

};
