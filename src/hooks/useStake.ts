import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync, updateUserStakedBalance, updateUserBalance } from 'state/actions'
import { stake, kswapStake, kswapStakeBnb } from 'utils/callHelpers'
import { useMasterchef, useMangoChef } from './useContract'

const useStake = (pid: number) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(masterChefContract, pid, amount, account)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, masterChefContract, pid],
  )

  return { onStake: handleStake }
}

export const useMangoStake = (juiceId, isUsingBnb = false) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()
  const kswapChefContract = useKswapChef(juiceId)

  const handleStake = useCallback(
    async (amount: string) => {
      if (juiceId === 0) {
        await stake(masterChefContract, 0, amount, account)
      } else if (isUsingBnb) {
        await kswapStakeBnb(mangoChefContract, amount, account)
      } else {
        await kswapStake(kswapChefContract, amount, account)
      }
      dispatch(updateUserStakedBalance(juiceId, account))
      dispatch(updateUserBalance(juiceId, account))
    },
    [account, dispatch, isUsingBnb, masterChefContract, kswapChefContract, juiceId],
  )

  return { onStake: handleStake }
}

export default useStake
