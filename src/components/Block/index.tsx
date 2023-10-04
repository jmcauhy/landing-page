import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Balancer } from 'react-wrap-balancer'
import { useAnimation } from 'framer-motion'
import * as S from './styles'

import { IBlockProps } from './index.d'

function Block({
   reverse,
   img,
   alt,
   topLine,
   headline,
   description,
   buttonLabel,
}: IBlockProps) {
   const initial = { opacity: 0, y: 30 },
         animate = useAnimation(),
         duration = 0.5,
         motionProps = { initial, animate }

   const { ref, inView } = useInView({ threshold: 0.2 })

   useEffect(() => {
      if (inView) {
         animate.start({
            opacity: 1,
            y: 0,
         })
      }
   }, [inView, animate])

   return (
      <S.Container ref={ref}>
         <S.Content $reverse={reverse}>
            <S.Wrapper transition={{ delay: 0.5, duration }} {...motionProps}>
               <S.ImgWrapper>
                  <S.Img
                     src={img}
                     alt={alt}
                     whileHover={{ rotate: 2, scale: 1.02 }}
                     transition={{ duration }}
                  />
               </S.ImgWrapper>
            </S.Wrapper>
            <S.Wrapper>
               <S.TextWrapper>
                  <S.TopLine transition={{ delay: 0.3, duration }} {...motionProps}>
                     {topLine.text}
                  </S.TopLine>
                  <S.Heading transition={{ delay: 0.5, duration }} {...motionProps}>
                     <Balancer>{headline}</Balancer>
                  </S.Heading>
                  <S.Description transition={{ delay: 0.7, duration }} {...motionProps}>
                     <Balancer>{description}</Balancer>
                  </S.Description>
                  <S.Button transition={{ delay: 1, duration }} {...motionProps}>
                     {buttonLabel}
                  </S.Button>
               </S.TextWrapper>
            </S.Wrapper>
         </S.Content>
      </S.Container>
   )
}

export default Block
