import React from 'react'
import { Text } from '@mangofarm/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useTokenBalance from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getKswapAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import CardValue from './CardValue'

const KswapWalletBalance = ({ kswapBalance }) => {
  const TranslateString = useI18n()
  const { account } = useWallet()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '36px' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return <CardValue value={kswapBalance} fontSize="24px" />
}

export default KswapWalletBalance
