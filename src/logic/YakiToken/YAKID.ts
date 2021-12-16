const assert = require('assert')

class YakiTokenRepo {
    yakiToken: any

    constructor(contracts: any) {
        assert(contracts, '"contracts" is required')

        this.yakiToken = contracts
    }

    symbol = async () => {
        return this.yakiToken.symbol()
    }

    decimals = async () => {
        return this.yakiToken.decimals()
    }

    name = async () => {
        return this.yakiToken.name()
    }

    getAddress = async () => {
        return this.yakiToken.address
    }

    approvePoint = async (spender: string, amount: number, from: string) => {
        return this.yakiToken.approvePoint(spender, amount, { from })
    }

    pointBanlanceOf = async (account: string) => {
        return this.yakiToken.pointBalanceOf(account)
    }

    transferPoint = async (recipient: string, amount: number, from: string) => {
        return this.yakiToken.transferPoint(recipient, amount, { from })
    }

    transferPointFrom = async (sender: string, recipient: string, amount: number, from: string) => {
        return this.yakiToken.tranferPointFrom(sender, recipient, amount, { from })
    }

}

export default YakiTokenRepo