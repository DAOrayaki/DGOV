/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */
const path = require('path')
require('dotenv').config()

const HDWalletProvider = require('@truffle/hdwallet-provider')
// const mnemonic = process.env.REACT_APP_OPERATOR_MNEMONIC || 'myth like bonus scare over problem client lizard pioneer submit female collect'
const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();
const API_PATH = '../apikeys.js'


const fileExists = _path =>
  fs.existsSync(_path)

const getExternalVariable = _variable =>
  fileExists(API_PATH)
    ? require(API_PATH)[_variable]
    : process.env[_variable]
    ? process.env[_variable]
    : (
      console.log(
        `Cannot migrate! Please provide '` +
        _variable +
        `' as an environment variable, or export it from '` +
        API_PATH +
        `'!`
      ),
      process.exit(1)
    )

const mnemonic = getExternalVariable('mnemonic')
// console.log('aa - process.env.MNEMONIC : '+mnemonic);

const createInfuraEntry = (networkName, networkId, gasPrice) => ({
  [networkName]: {
    provider: () =>
      new HDWalletProvider(
        mnemonic,
        `https://${networkName}.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`
      ),
    network_id: networkId,
    gasPrice,
    skipDryRun: true
  }
})

module.exports = {
  contracts_build_directory: path.join(__dirname, './src/abi'),

  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: Object.assign(
    {
      development: {
        host: '127.0.0.1',
        port: 8545,
        network_id: '*',
        gas: 6721975,
        gasPrice: 22000000000 // Specified in Wei
      },
      testnet: {
        // provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
        provider: () => new HDWalletProvider(mnemonic, "wss://speedy-nodes-nyc.moralis.io/8f971d85e65a3fc4b8b05e8f/bsc/testnet/ws"),
        networkCheckTimeout: 999999,
        network_id: 97,
        confirmations: 10,
        timeoutBlocks: 200,
        gas: 5500000,
        skipDryRun: true
      },

      // testnet: {
      //   provider: () => new HDWalletProvider(mnemonic, `wss://data-seed-prebsc-1-s1.binance.org:8545`),
      //   network_id: 97,
      //   confirmations: 10,
      //   timeoutBlocks: 200,
      //   skipDryRun: true
      // },
      bsc: {
        provider: () => new HDWalletProvider(mnemonic, `wss://speedy-nodes-nyc.moralis.io/8f971d85e65a3fc4b8b05e8f/bsc/mainnet/ws`),
        networkCheckTimeout: 999999,
        network_id: 56,
        confirmations: 10,
        // gas: 22000,
        timeoutBlocks: 200,
        skipDryRun: true
      },
    },
    // ...[
    //   ['mainnet', '1', 10000000002],
    //   ['ropsten', '3'],
    //   ['rinkeby', '4', 3e9],
    //   ['goerli', '5', 1e9],
    //   ['kovan', '42']
    // ].map(data => createInfuraEntry(...data))

    // Another network with more advanced options...
    // advanced: {
    // port: 8777,             // Custom port
    // network_id: 1342,       // Custom network
    // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    // from: <address>,        // Account to send txs from (default: accounts[0])
    // websockets: true        // Enable EventEmitter interface for web3 (default: false)
    // },

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    // ropsten: {
    // provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
    // network_id: 3,       // Ropsten's id
    // gas: 5500000,        // Ropsten has a lower block limit than mainnet
    // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    // },

    // Useful for private networks
    // private: {
    // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    // network_id: 2111,   // This network is yours, in the cloud.
    // production: true    // Treats this network as if it was a public net. (default: false)
    // }
  ),

  // Configure your compilers
  compilers: {
    solc: {
      version: '0.5.17',
      settings: {
        optimizer: {
          enabled: true,
        },
      }
    }
  }
}
