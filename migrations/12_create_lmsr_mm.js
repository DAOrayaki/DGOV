const Decimal = require("decimal.js-light");
Decimal.config({ precision: 30 });

const deployConfig = require("./utils/deployConfig")(artifacts);
const writeToConfig = require("./utils/writeToConfig");

module.exports = function(deployer) {
  deployer.then(async () => {
    const markets = require("../markets.config");
    const newMarkets = require("../src/conf/ipfsmarkets.config.json")
    const questionId = newMarkets.questionId
    // const conditionIds = markets.map(({ questionId }) =>
    //   web3.utils.soliditySha3(
    //     { t: "address", v: deployConfig.oracle },
    //     { t: "bytes32", v: questionId },
    //     { t: "uint", v: 2 }
    //   )
    // );
    const conditionIds = [
      web3.utils.soliditySha3(
        { t: "address", v: deployConfig.oracle },
        { t: "bytes32", v: newMarkets.questionId },
        { t: "uint", v: newMarkets.outcomes.length })
    ]

    // const WETH9 = artifacts.require("WETH9");
    const YAKI = artifacts.require("YAKI");
    // const collateralToken = await WETH9.deployed();
    const collateralToken = await YAKI.deployed();


    const lmsrMarketMakerFactory = await artifacts
      .require("LMSRMarketMakerFactory")
      .deployed();

    lmsrMarketMakerFactory.autoGas = true;
    lmsrMarketMakerFactory.gasMultiplier = 0.1;

    const { ammFunding } = deployConfig;
    // await collateralToken.deposit({ value: ammFunding });
    await collateralToken.approve(lmsrMarketMakerFactory.address, ammFunding);

    // Get conditional tokens
    const conditionalTokens = await artifacts
      .require("ConditionalTokens")
      .deployed();

    const lmsrFactoryTx = await lmsrMarketMakerFactory.createLMSRMarketMaker(
      conditionalTokens.address,
      collateralToken.address,
      conditionIds,
      0,
      '0x0000000000000000000000000000000000000000',
      ammFunding
    );

    const creationLogEntry = lmsrFactoryTx.logs.find(
      ({ event }) => event === "LMSRMarketMakerCreation"
    );

    if (!creationLogEntry) {
      // eslint-disable-next-line
      console.error(JSON.stringify(lmsrFactoryTx, null, 2));
      throw new Error(
        "No LMSRMarketMakerCreation Event fired. Please check the TX above.\nPossible causes for failure:\n- ABIs outdated. Delete the build/ folder\n- Transaction failure\n- Unfunded LMSR"
      );
    }

    const lmsrAddress = creationLogEntry.args.lmsrMarketMaker;
    writeToConfig({
      network: process.env.REACT_APP_NETWORK || "local",
      networkId: await web3.eth.net.getId(),
      lmsrAddress,
      markets
    });
  });
};
