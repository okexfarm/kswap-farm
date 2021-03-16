import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import {
  fetchFarmUserDataAsync,
  updateUserStakedBalance,
  updateUserBalance,
  updateUserPendingReward,
} from 'state/actions'
import { unstake, kswapUnstake, kswapEmegencyUnstake } from 'utils/callHelpers'
import { useMasterchef, useKswapChef } from './useContract'

const useUnstake = (pid: number) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, masterChefContract, pid],
  )

  return { onUnstake: handleUnstake }
}

const JUICEIDS = []

export const useMangoUnstake = (juiceId) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()
  const kswapChefContract = useKswapChef(juiceId)
  const isOldJuice = JUICEIDS.includes(juiceId)

  const handleUnstake = useCallback(
    async (amount: string) => {
      if (juiceId === 0) {
        const txHash = await unstake(masterChefContract, 0, amount, account)
        console.info(txHash)
      } else if (isOldJuice) {
        const txHash = await kswapEmegencyUnstake(kswapChefContract, amount, account)
        console.info(txHash)
      } else {
        const txHash = await kswapUnstake(kswapChefContract, amount, account)
        console.info(txHash)
      }
      dispatch(updateUserStakedBalance(juiceId, account))
      dispatch(updateUserBalance(juiceId, account))
      dispatch(updateUserPendingReward(juiceId, account))
    },
    [account, dispatch, isOldJuice, masterChefContract, kswapChefContract, juiceId],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
