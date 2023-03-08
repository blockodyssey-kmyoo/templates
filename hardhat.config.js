/** @type import('hardhat/config').HardhatUserConfig */
require('@nomicfoundation/hardhat-chai-matchers')
require('@nomiclabs/hardhat-ethers')
require('solidity-coverage')
require('dotenv').config()

module.exports = {
  solidity: '0.8.17',
}
