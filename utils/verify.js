const { run } = require("hardhat")


async function verify(address, args){
    console.log("verify address")
    try{
      await run("verify:verify", {
        address,
        constructorArguments: args
      })
    } catch(e){
      if(e.message.toLowerCase().includes("already verified")){
        console.log("already verified!")
      } else {
        console.log(e)
      }
    }
  }

  module.exports = {
    verify
  }