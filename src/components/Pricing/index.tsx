import { useState, useCallback } from 'react'
import Balancer from 'react-wrap-balancer'
import { useSwipeable } from 'react-swipeable'
import { plans } from '../../services/mocks/plans'
import Plan from '../Plan'
import * as S from './styles'

function Pricing() {
   const [frequency, setFrequency] = useState<'monthly' | 'yearly'>('yearly')
   const [swipeId, setSwipeId] = useState<number>(0)

   const onSwipedLeft = useCallback(() => (
      setSwipeId(prev => prev < plans.length - 1 ? (prev ?? 0) + 1 : prev)
   ), [])
   const onSwipedRight = useCallback(() => (
      setSwipeId(prev => prev > 0 ? (prev ?? 0) - 1 : prev)
   ), [])

   const swipeable = useSwipeable({ onSwipedLeft, onSwipedRight })

   return (
      <S.Container id="pricing">
         <S.Title><Balancer>Plans that scale with your business.</Balancer></S.Title>
         <S.FrequencyToggler>
            <S.Option id="monthly" $frequency={frequency} onClick={() => setFrequency('monthly')}>
               Monthly
            </S.Option>
            <S.Option id="yearly" $frequency={frequency} onClick={() => setFrequency('yearly')}>
               Yearly (20% OFF)
            </S.Option>
         </S.FrequencyToggler>
         <S.Content {...swipeable}>
            {plans.map(({ id, ...rest }) => (
               <Plan
                  key={id}
                  frequency={frequency}
                  swipeId={swipeId}
                  amountOfPlans={plans.length}
                  {...rest}
               />
            ))}
         </S.Content>
      </S.Container>
   )
}

export default Pricing
