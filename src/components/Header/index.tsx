import { useState, useCallback } from 'react'
import nav from '../../services/mocks/nav'
import * as S from './styles'

function Header() {
   const [open, setOpen] = useState<boolean | null>(null)

   const handleToggleMenu = useCallback(() => setOpen(prev => !prev), [])

   return (
      <S.Container>
         <div>
            <S.Navbar>
               <S.Logo to="/">
                  <S.LogoIcon src="./assets/logo.png" alt="logo" />
                  Delta
               </S.Logo>
               <S.MenuIcon onClick={handleToggleMenu} />
               <S.Menu open={open}>
                  <S.CloseIcon onClick={handleToggleMenu} />
                  {nav.map(({ id, path, text }) => (
                     <S.Link key={id} to={path}>
                        <S.MenuItem onClick={handleToggleMenu}>{text}</S.MenuItem>
                     </S.Link>
                  ))}
               </S.Menu>
            </S.Navbar>
         </div>
      </S.Container>
   )
}

export default Header
