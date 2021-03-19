import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [

    {
    pid: 0,
    risk: 2,
    lpSymbol: 'MANGO-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xE5fE53149A278aF40ACb04334c4140eE7444BE4B',
    },
    tokenSymbol: 'MANGO',
    tokenAddresses: {
      97: '',
      56: '0x3D29cdB00CB183a0aEcEEa4fB73F55E1450af3d4',
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
      56: '0xB0361a92E2646F9F11f1670484f09D585fe4a419',
    },
    tokenSymbol: 'MANGO',
    tokenAddresses: {
      97: '',
      56: '0x3D29cdB00CB183a0aEcEEa4fB73F55E1450af3d4',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

    {
     pid: 10,
     risk: 2,
     lpSymbol: 'MANGO-USDT LP',
     lpAddresses: {
       97: '',
       56: '0x4aB5135A7f7A814a67a3F0638e42F55C7caE2F69',
     },
     tokenSymbol: 'MANGO',
     tokenAddresses: {
       97: '',
       56: '0x3D29cdB00CB183a0aEcEEa4fB73F55E1450af3d4',
     },
     quoteTokenSymbol: QuoteToken.USDT,
     quoteTokenAdresses: contracts.usdt,
   },
    {
   pid: 4,
   risk: 3,
   lpSymbol: 'MANGO-CHS LP',
   lpAddresses: {
     97: '',
     56: '0xF63c29444fdE98d8227088Cd4AEb48E33B6b0000',
   },
   tokenSymbol: 'MANGO',
   tokenAddresses: {
     97: '',
     56: '0x3D29cdB00CB183a0aEcEEa4fB73F55E1450af3d4',
   },
   quoteTokenSymbol: QuoteToken.CHS,
   quoteTokenAdresses: contracts.chs,
 },
 {
  pid: 5,
  risk: 3,
  lpSymbol: 'MANGO-PIZZA LP',
  lpAddresses: {
    97: '',
    56: '0x80bEC1095372cE1A01e3ACd2A5B5eC3140DdFA20',
  },
  tokenSymbol: 'MANGO',
  tokenAddresses: {
    97: '',
    56: '0x3D29cdB00CB183a0aEcEEa4fB73F55E1450af3d4',
  },
  quoteTokenSymbol: QuoteToken.PIZZA,
  quoteTokenAdresses: contracts.pizza,
 },
  {
  pid: 12,
  risk: 3,
//  isTokenOnly: false,
  lpSymbol: 'KP3RB-BNB LP',
  lpAddresses: {
    97: '',
    56: '0x2113bA4000d8a0B201C3e916E63Fe0DCDfBe476a',
  },
  tokenSymbol: 'KP3RB',
  tokenAddresses: {
    97: '',
    56: '0x5EA29eEe799aA7cC379FdE5cf370BC24f2Ea7c81',
  },
  quoteTokenSymbol: QuoteToken.BNB,
  quoteTokenAdresses: contracts.wbnb,
 },
 {
  pid: 13,
  risk: 3,
  lpSymbol: 'KIWI-BNB LP',
  lpAddresses: {
    97: '',
    56: '0xDf8481f4ffb688d940f59F839c2613cc6C40a79E',
  },
  tokenSymbol: 'KIWI',
  tokenAddresses: {
    97: '',
    56: '0xCfDf8A80fECAeeCC144fa74c0Df8691BFd0e26e3',
  },
  quoteTokenSymbol: QuoteToken.BNB,
  quoteTokenAdresses: contracts.wbnb,
},
{
   pid: 14,
   risk: 3,
   lpSymbol: '1INCH-BUSD LP',
   lpAddresses: {
      97: '',
      56: '0x5a1253807e43948b5cD2382673703c917BbC7B60',
       },
   tokenSymbol: '1INCH',
   tokenAddresses: {
      97: '',
      56: '0x111111111117dC0aa78b770fA6A738034120C302',
      },
   quoteTokenSymbol: QuoteToken.BUSD,
   quoteTokenAdresses: contracts.busd,
},
 {
 pid: 2,
 risk: 1,
 lpSymbol: 'BNB-BUSD LP',
 lpAddresses: {
   97: '',
   56: '0xF455f6f7988B752F75488E2CCcC030346d0Cac72',
 },
 tokenSymbol: 'BNB',
 tokenAddresses: {
   97: '',
   56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
 },
 quoteTokenSymbol: QuoteToken.BUSD,
 quoteTokenAdresses: contracts.busd,
},
{
 pid: 6,
 risk: 3,
 lpSymbol: 'ETH-BUSD LP',
 lpAddresses: {
   97: '',
   56: '0x7d1a03b432c5f04A426F4Eaf41037fe8Dd695b89',
 },
 tokenSymbol: 'ETH',
 tokenAddresses: {
   97: '',
   56: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
 },
 quoteTokenSymbol: QuoteToken.BUSD,
 quoteTokenAdresses: contracts.busd,
},
{
 pid: 7,
 risk: 3,
 lpSymbol: 'USDT-BNB LP',
 lpAddresses: {
   97: '',
   56: '0xcfD63197d764cd70d07bB607e6367Ae0E869BaDD',
 },
 tokenSymbol: 'USDT',
 tokenAddresses: {
   97: '',
   56: '0x55d398326f99059ff775485246999027b3197955',
 },
 quoteTokenSymbol: QuoteToken.BNB,
 quoteTokenAdresses: contracts.wbnb,
},
{
 pid: 8,
 risk: 3,
 lpSymbol: 'PIZZA-BNB LP',
 lpAddresses: {
   97: '',
   56: '0x8405be915af56589756a275d4894fa9f0ff6ca0f',
 },
 tokenSymbol: 'PIZZA',
 tokenAddresses: {
   97: '',
   56: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
 },
 quoteTokenSymbol: QuoteToken.BNB,
 quoteTokenAdresses: contracts.wbnb,
},
{
 pid: 9,
 risk: 3,
 lpSymbol: 'CHS-BNB LP',
 lpAddresses: {
   97: '',
   56: '0x51A162dd678d75C269Ef6680193C019e0B4Bda7E',
 },
 tokenSymbol: 'CHS',
 tokenAddresses: {
   97: '',
   56: '0xaDD8A06fd58761A5047426e160B2B88AD3B9D464',
 },
 quoteTokenSymbol: QuoteToken.BNB,
 quoteTokenAdresses: contracts.wbnb,
},
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
