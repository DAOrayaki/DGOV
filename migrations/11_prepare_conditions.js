const deployConfig = require("./utils/deployConfig")(artifacts);
const ConditionalTokens = artifacts.require("ConditionalTokens");

module.exports = function(deployer) {
    deployer.then(async() => {
        const pmSystem = await ConditionalTokens.deployed();
        const markets = require("../markets.config");
        const newMarkets = require("../src/conf/ipfsmarkets.config.json")
            // for (const { questionId } of markets) {
        console.log(newMarkets)
        await pmSystem.prepareCondition(deployConfig.oracle, newMarkets.questionId, newMarkets.outcomes.length, newMarkets.title, newMarkets.questionType);
        // }
    });
};