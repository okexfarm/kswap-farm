import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [

    {
    pid: 0,
    risk: 2,
    lpSymbol: 'KSWAP-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x623f10546a0286f3888363Dac33451C8832ef838',
    },
    tokenSymbol: 'KSWAP',
    tokenAddresses: {
      97: '',
      56: '0xFd53F26Cb14aAa4AA90a32B7e9bd9B12D3D42Ec7',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

   {
    pid: 1,
    risk: 2,
    lpSymbol: 'MANGO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x269Eb6fa30745f78c3a6ace8f03803387594f194',
    },
    tokenSymbol: 'MANGO',
    tokenAddresses: {
      97: '',
      56: '0xFd53F26Cb14aAa4AA90a32B7e9bd9B12D3D42Ec7',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  
    {
     pid: 10,
     risk: 2,
     lpSymbol: 'KSWAP-USDT LP',
     lpAddresses: {
       97: '',
       56: '0x4aB5135A7f7A814a67a3F0638e42F55C7caE2F69',
     },
     tokenSymbol: 'KSWAP',
     tokenAddresses: {
       97: '',
       56: '0x3D29cdB00CB183a0aEcEEa4fB73F55E1450af3d4',
     },
     quoteTokenSymbol: QuoteToken.USDT,
     quoteTokenAdresses: contracts.usdt,
   },
/* / p
  {
   pid: 11,
   risk: 5,
   lpSymbol: 'MANGO SOLO',
   lpAddresses: {
     97: '',
     56: '0x3D29cdB00CB183a0aEcEEa4fB73F55E1450af3d4',
   },
   tokenSymbol: 'MANGO',
   tokenAddresses: {
     97: '',
     56: '0x3D29cdB00CB183a0aEcEEa4fB73F55E1450af3d4',
   },
   quoteTokenSymbol: QuoteToken.MANGO,
   quoteTokenAdresses: contracts.mango,
  },
// */
{
  pid: 11,
  risk: 5,
  isTokenOnly: true,
  lpSymbol: 'MANGO',
  lpAddresses: {
    97: '',
    56: '0xE5fE53149A278aF40ACb04334c4140eE7444BE4B', // EGG-BUSD LP
  },
  tokenSymbol: 'MANGO',
  tokenAddresses: {
    97: '',
    56: '0x3D29cdB00CB183a0aEcEEa4fB73F55E1450af3d4',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},
   

]

export default farms
