import { create } from 'ipfs-http-client'
const writeToConfig = require("./utils/writeToConfig");
const markets = require("../markets.config");
const newMarkets = require("../src/conf/ipfsmarkets.config.json")
const bs58 = require('bs58')

//@ts-ignore
const client = create("https://ipfs.daorayaki.cn")
// const client = create("http://127.0.0.1:5001")

function getIpfsHashFromBytes32(bytes32Hex: any) {
  // Add our default ipfs values for first 2 bytes:
  // function:0x12=sha2, size:0x20=256 bits
  // and cut off leading "0x"
  const hashHex = "1220" + bytes32Hex.slice(2)
  const hashBytes = Buffer.from(hashHex, 'hex');
  const hashStr = bs58.encode(hashBytes)
  return hashStr
}

async function main() {
      var cid = newMarkets.questionId 
      cid = getIpfsHashFromBytes32(cid)
      const stream = client.cat(cid)
      let data = ''

      for await ( const chunk of stream) {
          data += chunk.toString()
      }

      var markets = JSON.parse(data)

      console.log(markets[0].questionId)
      console.log(markets[0].title)
      console.log(markets[0].outcomes)
}

main()

