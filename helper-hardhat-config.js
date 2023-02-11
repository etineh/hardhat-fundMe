const networkConfig = {
    5: {
        name: "goerli",
        ethUsdPriceFeed: "0x44390589104C9164407A0E0562a9DBe6C24A0E05",
    },

    137: {
        name: "polygon",
        ethUsdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
    },
}

const developChains = ["hardhat", "localhost"]
DECIMALS = 8 
INITIAL_ANSWER = 200000000000

module.exports = {
    networkConfig,
    developChains,
    DECIMALS,
    INITIAL_ANSWER,
}