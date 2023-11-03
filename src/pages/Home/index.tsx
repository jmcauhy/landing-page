import Balancer from 'react-wrap-balancer'
import Header from '../../components/Header'
import Features from '../../components/Features'
import Block from '../../components/Block'
import Faq from '../../components/Faq'
import Pricing from '../../components/Pricing'
import PageUpButton from '../../components/ui/PageUpButton'
import { blockOne, blockTwo, blockThree } from '../../services/mocks/block'
import * as S from './styles'

function Home() {
   return (
      <S.Container>
         <Header />

         <S.Content>
            <S.Video src="./assets/video.mp4" autoPlay muted loop />
            <S.HeadingWrapper>
               <h1><Balancer>Your data is secure with us</Balancer></h1>
               <p>
                  <Balancer>
                     We provide the best security systems for clients all over the world
                  </Balancer>
               </p>
            </S.HeadingWrapper>
            <S.ButtonsWrapper>
               <S.Button>Get started</S.Button>
               <S.Button secondary>Learn more</S.Button>
            </S.ButtonsWrapper>
            <S.ArrowDownIcon />
         </S.Content>

         <Block {...blockOne} />
         <Block {...blockTwo} />
         <Block {...blockThree} />

         <Features />

         <Faq />

         <Pricing />

         <PageUpButton />
      </S.Container>
   )
}

export default Home
