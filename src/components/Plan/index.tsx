import { useMemo } from 'react'
import * as S from './styles'

import { IPlanProps } from './index.d'

function Plan({ frequency, swipeId, amountOfPlans, title, price, features }: IPlanProps) {
   const calculatedPrice = useMemo(() => {
      if (frequency === 'yearly') {
         return Math.floor(price * 0.8)
      }
      return price
   }, [frequency, price])

   return (
      <S.Container $swipeId={swipeId} $length={amountOfPlans}>
         <S.Title>{title}</S.Title>
         <S.Price>${calculatedPrice}</S.Price>
         <S.Features>
            {features.map(feature => <li key={feature}><S.CheckIcon />{feature}</li>)}
         </S.Features>
         <S.Button>Start now</S.Button>
      </S.Container>
   )
}

export default Plan
