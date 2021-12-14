import { create } from 'ipfs-http-client'
const writeToConfig = require("./utils/writeToConfig");
const markets = require("../markets.config");
const CID = require('cids')
const bs58 = require('bs58')

//@ts-ignore
// const client = create("https://ipfs.daorayaki.cn")
// console.log(process.env.REACT_APP_IPFS_ENDPOINT)
// const client = create('http://cloudflare-ipfs.com')
// const client = create('http://ipfs.io')
const client = create("http://127.0.0.1:5001")

function getBytes32FromIpfsHash(ipfsListing:any) {
  return "0x"+bs58.decode(ipfsListing).slice(2).toString('hex')
}

// Return base58 encoded ipfs hash from bytes32 hex string,
// E.g. "0x017dfd85d4f6cb4dcd715a88101f7b1f06cd1e009b2327a0809d01eb9c91f231"
// --> "QmNSUYVKDSvPUnRLKmuxk9diJ6yS96r1TrAXzjTiBcCLAL"

function getIpfsHashFromBytes32(bytes32Hex:any) {
  // Add our default ipfs values for first 2 bytes:
  // function:0x12=sha2, size:0x20=256 bits
  // and cut off leading "0x"
  const hashHex = "1220" + bytes32Hex.slice(2)
  const hashBytes = Buffer.from(hashHex, 'hex');
  const hashStr = bs58.encode(hashBytes)
  return hashStr
}


async function main() {
    // const { cid } = await client.add('Hello world!')
    // const file = fs.readFileSync("../markets.config.js")
    // const { cid } = await client.add({
        // path: "../markets.config.js",
        // content: file
    // })
    var array_string = JSON.stringify(markets)
    console.log( array_string)
    // console.log( cid.toString())

    // var newMarkets:any = JSON.parse(array_string)
    const { cid } = await client.add(array_string)
    var cid_hex = getBytes32FromIpfsHash(cid.toString())

    console.log('cid: ' + cid.toString())
    console.log('cid_hex' + cid_hex)
    console.log( markets[0].title)
    console.log( markets[0].outcomes)
    var cid_str = getIpfsHashFromBytes32(cid_hex)
    console.log('cid_str: ' + cid_str)
    
    writeToConfig({
        questionId:  cid_hex,
        title: markets[0].title,
        outcomes: markets[0].outcomes
    })
    
}

main()

