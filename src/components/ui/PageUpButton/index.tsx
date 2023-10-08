import { useState, useEffect, useMemo, useCallback } from 'react'
import * as S from './styles'

function PageUpButton() {
   const [visible, setVisible] = useState<boolean>(false)

   const calcViewportThreshold = useMemo(() => {
      const viewportHeight = window.innerHeight
      const threshold = viewportHeight
      return threshold
   }, [])

   const handleScroll = useCallback(() => {
      if (window.scrollY > calcViewportThreshold) {
         setVisible(true)
      } else {
         setVisible(false)
      }
   }, [calcViewportThreshold])

   const handleClick = useCallback(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
   }, [])

   useEffect(() => {
      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [handleScroll])

   return (
      <S.Container onClick={handleClick} $isVisible={visible}>
         <S.ArrowUpIcon />
      </S.Container>
   )
}

export default PageUpButton
