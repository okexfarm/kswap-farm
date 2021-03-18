import React from 'react'
import { Card, CardBody, Heading, Text } from '@mangofarm/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getKswapAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceKswapBusd } from '../../../state/hooks'

const StyledKswapStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const KswapStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getKswapAddress())
  const farms = useFarms()
  const kswapPrice = usePriceKswapBusd()
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0)
  const kswapSupply = getBalanceNumber(circSupply)
  const marketCap = kswapPrice.times(circSupply)

  let kswapPerBlock = 0
  if (farms && farms[0] && farms[0].kswapPerBlock) {
    kswapPerBlock = new BigNumber(farms[0].kswapPerBlock).div(new BigNumber(10).pow(18)).toNumber()
  }

  return (
    <StyledKswapStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'Kswap Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(10005, 'Market Cap')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total Minted')}</Text>
          {totalSupply && <CardValue fontSize="14px" value={getBalanceNumber(totalSupply)} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(10004, 'Circulating Supply')}</Text>
          {kswapSupply && <CardValue fontSize="14px" value={kswapSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New KSWAP/block')}</Text>
          <Text bold fontSize="14px">
            {kswapPerBlock}
          </Text>
        </Row>
      </CardBody>
    </StyledKswapStats>
  )
}

export default KswapStats
