import { Fragment, useState, useCallback } from 'react'
import { faqs } from '../../services/mocks/faqs'
import * as S from './styles'

function Faq() {
   const [expandedFaqId, setExpandedFaqId] = useState<number | null>(null)

   const handleClick = useCallback((id: number) => {
      if (id === expandedFaqId) {
         setExpandedFaqId(null)
         return
      }

      setExpandedFaqId(id)
   }, [expandedFaqId])

   return (
      <S.Container id="faq">
         <S.Title>FAQ</S.Title>
         <S.Content>
            {faqs.map(({ id, question, answer }) => (
               <Fragment key={id}>
                  <S.Wrapper aria-expanded={id === expandedFaqId} onClick={() => handleClick(id)}>
                     <S.Question>{question}</S.Question>
                     {id === expandedFaqId ? <S.ArrowDownIcon /> : <S.ArrowUpIcon />}
                  </S.Wrapper>
                  <S.Answer id={id} $expandedFaqId={expandedFaqId}>{answer}</S.Answer>
               </Fragment>
            ))}
         </S.Content>
      </S.Container>
   )
}

export default Faq
