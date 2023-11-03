import { useMemo } from 'react'
import styled, { css } from 'styled-components'
import { FaCheck } from 'react-icons/fa'

import { IContainer } from './styles.d'

export const Container = styled.div<IContainer>`
   position: relative;
   width: 300px;
   height: 480px;
   padding: 22px;
   background-color: #F8F8FE;
   border: 2px solid #d1e7fa;
   border-radius: 10px;
   transition: transform 300ms;

   ${({ $swipeId, $length }) => {
      const spacing = useMemo(() => $swipeId === $length - 1 ? -18 : -30, [$swipeId, $length])
      return css`
         transform: translateX(${`calc(${$swipeId * -100}% + ${$swipeId * spacing}px)`});
      `
   }}

   &:first-of-type {
      margin-left: 30px;
   }

   @media (min-width: 1200px) {
      transform: none;

      &:first-of-type {
         margin-left: 0;
      }
   }
`

export const Title = styled.h1`
   color: var(--dark-blue);
   font-size: 18px;
   text-transform: uppercase;
   font-weight: 700;
`

export const Price = styled.h1`
   margin: -6px 0 0 -2px;
   color: #000;
   font-size: 36px;
   font-weight: 600;
   font-family: 'Segoe UI', 'Open Sans', sans-serif;
   letter-spacing: -2px;
`

export const CheckIcon = styled(FaCheck).attrs({
   size: 18,
   color: '#0C0',
})``

export const Features = styled.ul`
   display: flex;
   flex-direction: column;
   gap: 12px;
   margin-top: 22px;
   font-size: 16px;
   font-weight: 600;
   list-style: none;

   > li {
      display: flex;
      align-items: center;
      gap: 10px;
   }
`

export const Button = styled.button`
   position: absolute;
   width: 252px;
   height: 60px;
   bottom: 22px;
   color: #FFF;
   font-size: 16px;
   font-weight: 600;
   letter-spacing: 1px;
   background-color: var(--dark-blue);
   outline: none;
   border: none;
   border-radius: 50px;
   box-sizing: border-box;
   transition: 300ms;
   cursor: pointer;

   &:hover {
      background-color: var(--blue);
   }

   @media (min-width: 1200px) {
      width: 230px;
   }
`
