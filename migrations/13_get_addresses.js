module.exports = function (deployer) {
    deployer.then(async () => {
        const lmsrMarketMakerFactory = await artifacts
            .require("LMSRMarketMakerFactory")
            .deployed();

        const conditionalTokens = await artifacts
            .require("ConditionalTokens")
            .deployed();

        const YAKI = await artifacts.require("YAKIID").deployed();

        console.log('lmsr:' + lmsrMarketMakerFactory.address)
        console.log('conditon:' + conditionalTokens.address)
        console.log('yaki: ' + YAKI.address)
    })

};
