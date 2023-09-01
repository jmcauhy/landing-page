import styled, { css, keyframes } from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { CgMenuRight } from 'react-icons/cg'
import { MdClose } from 'react-icons/md'

import { IMenu } from './styles.d'

export const Container = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	width: 100%;
	height: 80px;
	top: 0;
	z-index: 2;

	> div {
		position: relative;
		width: 100%;
		height: 100%;
	}
`

export const Navbar = styled.nav`
   display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
   width: 100%;
   height: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 11px 0 18px;
`

export const Logo = styled(RouterLink)`
	display: flex;
	align-items: center;
	font-size: 28px;
	font-weight: 600;
	color: #FFF;
	text-decoration: none;
	text-transform: uppercase;
	cursor: pointer;
`

export const LogoIcon = styled.img`
	width: 42px;
	margin-right: 6px;
`

export const MenuIcon = styled(CgMenuRight)`
	width: 50px;
	height: 50px;
	padding: 5px;
	color: #FFF;
	cursor: pointer;

	@media (min-width: 720px) {
		display: none;
	}
`

export const menuIn = keyframes`
	0% {
		transform: translateY(100%);
	}
	100% {
		transform: translateY(0);
	}
`

export const menuOut = keyframes`
	0% {
		transform: translateY(0);
	}
	100% {
		transform: translateY(100%);
	}
`

export const Menu = styled.ul<IMenu>`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
	position: fixed;
	width: 100%;
	bottom: 0;
	left: 0;
	padding: 12px;
	text-align: center;
	list-style: none;
	background-color: #071C2F;
	border-radius: 20px 20px 0 0;
	transform: translateY(100%);

	${({ open }) => open !== null && css`
		animation: 500ms ${open ? menuIn : menuOut } forwards;
	`}

	@media (min-width: 720px) {
		flex-direction: row;
		justify-content: flex-end;
		position: absolute;
		width: auto;
		top: 0;
		right: 0;
		bottom: unset;
		padding: 0;
		background-color: unset;
		list-style: none;
		text-align: center;
		animation: none;
		transform: translateY(0);
	}
`

export const CloseIcon = styled(MdClose).attrs({
   size: 30,
   color: '#EEE',
})`
	align-self: flex-end;
	width: 52px;
	height: 42px;
	padding: 8px;
	background-color: rgba(0,0,0,.15);
	border-radius: 5px;
	cursor: pointer;

	@media (min-width: 720px) {
		display: none;
	}
`

export const MenuItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 80px;
	font-size: 20px;
	color: #FFF;
	text-decoration: none;
	text-align: center;
	border: 2px solid rgba(0,0,0,.15);
	border-radius: 5px;
	cursor: pointer;

	@media (min-width: 720px) {
		padding: 0 20px;
		border: none;
	}

	&:hover {
		color: #c8c9d8;
		background-color: rgba(0,0,0,.15);
		transition: all 300ms ease;

		@media (min-width: 720px) {
			background-color: unset;
		}
	}
`

export const Link = styled(RouterLink)`
	width: 100%;
	height: 100%;
	text-decoration: none;
	outline: none;
	border: none;

	@media (min-width: 720px) {
		width: auto;
		height: auto;
	}
`
