import styled from 'styled-components'

import { IContainer } from './styles.d'

export const Container = styled.button<IContainer>`
   position: relative;
   white-space: nowrap;
   padding: 14px 24px;
   font-size: 16px;
   color: #FFF;
   border: 2px solid ${({ $secondary }) => !$secondary ? '#FFF' : 'transparent'};
   background: none;
   overflow: hidden;
   border-radius: 4px;
   transition: 500ms;
   cursor: pointer;

	@media (min-width: 720px) {
      padding: 15px 25px;
      font-size: 18px;
	}

   &:hover {
      color: #000;
      background-color: #FFF;
   }
`
