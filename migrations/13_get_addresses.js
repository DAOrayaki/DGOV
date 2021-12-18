module.exports = function(deployer) {
    deployer.then(async() => {
        const lmsrMarketMakerFactory = await artifacts
            .require("LMSRMarketMakerFactory")
            .deployed();

        const conditionalTokens = await artifacts
            .require("ConditionalTokens")
            .deployed();

        const YAKI = await artifacts.require("YAKIID").deployed();

        const tx = await YAKI.approvePoint("0x9561C133DD8580860B6b7E504bC5Aa500f0f06a7", "1000")

        console.log(tx)
        console.log('lmsr:' + lmsrMarketMakerFactory.address)
        console.log('conditon:' + conditionalTokens.address)
        console.log('yaki: ' + YAKI.address)
    })

};