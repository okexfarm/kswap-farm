import { usePriceKswapBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalKswap = getBalanceNumber(totalRewards)
  const kswapPriceBusd = usePriceKswapBusd()

  return totalKswap * kswapPriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
