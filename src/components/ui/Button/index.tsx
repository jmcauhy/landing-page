import * as S from './styles'

import { IProps } from './index.d'

function Button({ children, secondary = false }: IProps) {
   return (
      <S.Container $secondary={secondary}>
         {children}
      </S.Container>
   )
}

export default Button
