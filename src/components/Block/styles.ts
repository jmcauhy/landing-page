import styled from 'styled-components'
import { motion } from 'framer-motion'

import { IContentStyle } from './styles.d'

export const Container = styled.section`
   max-width: 1200px;
   margin: 80px auto 0;
`

export const Content = styled.div<IContentStyle>`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media (min-width: 720px) {
		padding: ${({ $reverse }) => $reverse ? '90px 20px' : '30px 20px'};;
		background-color: ${({ $reverse }) => $reverse ? '#F8F8FE' : 'unset'};
	}

	@media (min-width: 980px) {
		flex-direction: ${({ $reverse }) => $reverse ? 'row-reverse' : 'row'};
	}

	@media (min-width: 1200px) {
		border-radius: 20px;
	}
`

export const Wrapper = styled(motion.div)`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	padding: 0 20px;
`

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;

	@media (max-width: 768px) {
		> h1,
		p {
			text-align: center;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	> img {
		width: 300px;
	}
`

export const ImgWrapper = styled(motion.div)`
	display: flex;
	justify-content: flex-end;
`

export const TopLine = styled(motion.div)`
	margin-top: 20px;
	font-size: 15px;
	line-height: 16px;
	font-weight: 600;
	letter-spacing: 1.4px;
	margin-bottom: 1.3rem;
	color: #979797;
`

export const Img = styled(motion.img)`
	height: 200px;

	@media (min-width: 720px) {
		height: 325px;
	}
`

export const Heading = styled(motion.h2)`
	font-size: 42px;
	line-height: 110%;
	font-weight: 600;
   color: var(--dark-blue);
	text-align: center;

	@media (min-width: 720px) {
		font-size: 48px;
		text-align: unset;
	}
`

export const Description = styled(motion.p)`
	margin-top: 20px;
	max-width: 440px;
	line-height: 24px;
	color: #6a6a6a;
`

export const Button = styled(motion.button)`
	position: relative;
	width: 240px;
	height: 55px;
	margin-top: 20px;
	padding-top: 2px;
	font-weight: 700;
	line-height: 18px;
	letter-spacing: 1.54px;
	text-transform: uppercase;
   color: var(--dark-blue);
	background-color: transparent;
	font-size: 18px;
	white-space: nowrap;
	outline: none;
	overflow: hidden;
	border: 2px solid var(--dark-blue);
	border-radius: 5px;
	cursor: pointer;

	@media (min-width: 720px) {
		width: 260px;
		height: 60px;
	}

	&:before {
      content: '';
		background-color: var(--dark-blue);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}

	&:hover:before {
		height: 500%;
	}

	&:hover {
		color: white;
	}
`
