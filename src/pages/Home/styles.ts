import styled from 'styled-components'
import { BsChevronCompactDown } from 'react-icons/bs'
import ButtonComponent from '../../components/ui/Button'

export const Container = styled.div`
   min-width: 300px;
`

export const Content = styled.main`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   position: relative;
   height: 100vh;
   width: 100%;
`

export const Video = styled.video`
   position: absolute;
   width: 100%;
   height: 100%;
   top: 0;
   object-fit: cover;
   background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
   z-index: -1;
`

export const HeadingWrapper = styled.div`
   cursor: default;

   > h1 {
      font-size: 42px;
      color: #FFF;
      width: 100%;
      line-height: 110%;
      text-align: center;
   }

   > p {
      margin-top: 10px;
      font-size: 15px;
      line-height: 24px;
      text-align: center;
      letter-spacing: 1px;
      color: #FFF;
   }

   @media (min-width: 720px) {
      > h1 {
         font-size: 62px;
      }

      > p {
         font-size: 18px;
      }
   }
`

export const ButtonsWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 10px;
   margin-top: 35px;
`

export const Button = styled(ButtonComponent)``

export const ArrowDownIcon = styled(BsChevronCompactDown).attrs({
   size: 42,
   color: '#FFF',
})`
   position: absolute;
   bottom: 20px;
`
