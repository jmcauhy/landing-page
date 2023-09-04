import { VscShield } from 'react-icons/vsc'
import { BiSupport, BiDollar } from 'react-icons/bi'

import { IFeaturesInfo } from './features.d'

export const featuresInfo: IFeaturesInfo[] = [
   {
      name: 'Top-notch Security',
      description: 'We hire the best professionals to offer you the best data security',
      Icon: VscShield,
      imgClass: 'one',
   },
   {
      name: '24/7 Support',
      description: 'Our team is available at all times in case you need us',
      Icon: BiSupport,
      imgClass: 'two',
   },
   {
      name: 'Best value',
      description: 'The highest value/cost ratio on the market',
      Icon: BiDollar,
      imgClass: 'three',
   },
]
