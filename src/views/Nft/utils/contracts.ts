import { AbiItem } from 'web3-utils'
import { getContract } from 'utils/web3'
import { ContractOptions } from 'web3-eth-contract'
import rabbitmintingfarm from 'config/abi/rabbitmintingfarm.json'
import kswapRabbits from 'config/abi/kswapRabbits.json'
import { RABBIT_MINTING_FARM_ADDRESS, PANKSWAP_RABBITS_ADDRESS } from 'config/constants/nfts'

// TODO: Figure out how to add current account to contracts to write methods can be used

export const getRabbitMintingContract = (contractOptions?: ContractOptions) => {
  const rabbitMintingFarmAbi = (rabbitmintingfarm as unknown) as AbiItem
  return getContract(rabbitMintingFarmAbi, RABBIT_MINTING_FARM_ADDRESS, contractOptions)
}

export const getPanmangoRabbitContract = (contractOptions?: ContractOptions) => {
  const kswapRabbitsAbi = (kswapRabbits as unknown) as AbiItem
  return getContract(kswapRabbitsAbi, PANKSWAP_RABBITS_ADDRESS, contractOptions)
}

export default getRabbitMintingContract
