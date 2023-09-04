import Balancer from 'react-wrap-balancer'
import { featuresInfo } from '../../services/mocks/features'
import * as S from './styles'

const MOTION_START = { y: 40, opacity: 0 }
const MOTION_END = { y: 0, opacity: 1 }

function Features() {
   return (
      <S.Container id="about">
         <S.Title>What We Offer</S.Title>
         <S.Wrapper>
            {featuresInfo.map(({ Icon, name, description, imgClass }, index) => (
               <S.FramerColumn
                  key={imgClass}
                  initial={MOTION_START}
                  animate={MOTION_END}
                  transition={{ duration: 0.5 + index * 0.1 }}
               >
                  <S.IconWrapper className={imgClass}><Icon size={36} /></S.IconWrapper>
                  <S.Name>{name}</S.Name>
                  <S.Text><Balancer>{description}</Balancer></S.Text>
               </S.FramerColumn>
            ))}
         </S.Wrapper>
      </S.Container>
   )
}

export default Features
