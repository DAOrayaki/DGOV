"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var ipfs_http_client_1 = require("ipfs-http-client");
var writeToConfig = require("./utils/writeToConfig");
var markets = require("../markets.config");
var CID = require('cids');
var bs58 = require('bs58');
//@ts-ignore
// const client = create("https://ipfs.daorayaki.cn")
// console.log(process.env.REACT_APP_IPFS_ENDPOINT)
// const client = create('http://cloudflare-ipfs.com')
// const client = create('http://ipfs.io')
var client = (0, ipfs_http_client_1.create)("http://127.0.0.1:5001");
function getBytes32FromIpfsHash(ipfsListing) {
    return "0x" + bs58.decode(ipfsListing).slice(2).toString('hex');
}
// Return base58 encoded ipfs hash from bytes32 hex string,
// E.g. "0x017dfd85d4f6cb4dcd715a88101f7b1f06cd1e009b2327a0809d01eb9c91f231"
// --> "QmNSUYVKDSvPUnRLKmuxk9diJ6yS96r1TrAXzjTiBcCLAL"
function getIpfsHashFromBytes32(bytes32Hex) {
    // Add our default ipfs values for first 2 bytes:
    // function:0x12=sha2, size:0x20=256 bits
    // and cut off leading "0x"
    var hashHex = "1220" + bytes32Hex.slice(2);
    var hashBytes = Buffer.from(hashHex, 'hex');
    var hashStr = bs58.encode(hashBytes);
    return hashStr;
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var array_string, cid, cid_hex, cid_str;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    array_string = JSON.stringify(markets);
                    console.log(array_string);
                    return [4 /*yield*/, client.add(array_string)];
                case 1:
                    cid = (_a.sent()).cid;
                    cid_hex = getBytes32FromIpfsHash(cid.toString());
                    console.log('cid: ' + cid.toString());
                    console.log('cid_hex' + cid_hex);
                    console.log(markets[0].title);
                    console.log(markets[0].outcomes);
                    cid_str = getIpfsHashFromBytes32(cid_hex);
                    console.log('cid_str: ' + cid_str);
                    writeToConfig({
                        questionId: cid_hex,
                        title: markets[0].title,
                        outcomes: markets[0].outcomes
                    });
                    return [2 /*return*/];
            }
        });
    });
}
main();
