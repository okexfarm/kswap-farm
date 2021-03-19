import React, { useContext } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import { usePriceKswapBusd } from 'state/hooks'
import { Menu as UikitMenu } from '@mangofarm/uikit'
import config from './config'

const Menu = (props) => {
  const { account, connect, reset } = useWallet()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const kswapPriceUsd = usePriceKswapBusd()

  return (
    <UikitMenu
      account={account}
      login={connect}
      logout={reset}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage && selectedLanguage.code}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      kswapPriceUsd={kswapPriceUsd.toNumber()}
      links={config}
      priceLink="https://pancakeswap.info/token/0xFd53F26Cb14aAa4AA90a32B7e9bd9B12D3D42Ec7"
      {...props}
    />
  )
}

export default Menu
