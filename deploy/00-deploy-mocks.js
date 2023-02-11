const { Log } = require("ethers")
const { network } = require("hardhat")
const { developChains, DECIMALS, INITIAL_ANSWER } = require("../helper-hardhat-config")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    if(developChains.includes(network.name)){
        log("Local Network Running")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            args: [DECIMALS, INITIAL_ANSWER],
            log: true,
        })
        log("Mock deployed")
        log("----------------------------------------------")
    }
}
module.exports.tags = ["all", "mocks"]