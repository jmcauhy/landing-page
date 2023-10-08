import styled from 'styled-components'
import { IoChevronUp } from 'react-icons/io5'

import { IContainer } from './styles.d'

export const Container = styled.div<IContainer>`
   display: ${({ $isVisible }) => $isVisible ? 'block' : 'none'};
   position: fixed;
   right: 20px;
   bottom: 20px;
   padding: 8px 8px 3px;
   color: #FFF;
   background-color: rgba(0,0,0,0.3);
   border-radius: 50px;
   cursor: pointer;
   z-index: 2;
`

export const ArrowUpIcon = styled(IoChevronUp).attrs({
   size: 24,
})``
