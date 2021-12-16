import YakiTokenRepo from "./YAKID";
import YAKI from '../../abi/YAKIID.json'

const TruffleContract = require('@truffle/contract')

let yakiTokenRepo: YakiTokenRepo | undefined
let yakiAddressCache: string
let providerAccountCache: string
let contract: object | undefined

const resetYakiTokenRepo = () => {
    yakiTokenRepo = undefined
}

const loadYakiContract = async (web3: any) => {
    let yakiContract
    if (!contract) {
        // weth9Contract = TruffleContract(WETH9)
        yakiContract = TruffleContract(YAKI)
        yakiContract.setProvider(web3.currentProvider)
    }
    return yakiContract
}


const loadYakiTokenRepo = async (web3: any, yakiAddress: string, account: string) => {
    try {
        if (
            (account && account !== providerAccountCache) ||
            (yakiAddress && yakiAddress !== yakiAddressCache)
        ) {
            resetYakiTokenRepo()
        }
        if (!yakiTokenRepo) {
            yakiAddressCache = yakiAddress
            providerAccountCache = account

            const contracts = await loadYakiContract(web3)
            const yakiContract = await contracts.at(yakiAddress)
            yakiTokenRepo = new YakiTokenRepo(yakiContract)
        }
        return yakiTokenRepo
    } catch (err) {
        console.error(err)
        return null
    }
}

export default loadYakiTokenRepo
