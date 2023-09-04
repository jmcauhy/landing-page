import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.section`
	width: 100%;
   margin: 60px auto 0;
	padding: 50px 0;
	background-color: #F8F8FE;

	@media (min-width: 1200px) {
		padding: 60px 20px 60px 0;
	}
`

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 50px;
	margin-top: 50px;

	@media (min-width: 720px) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 30px;
		padding: 0 20px;
	}
`

export const FramerColumn = styled(motion.div)`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	padding: 0 10px;
`

export const Title = styled.h2`
	color: #000;
	font-size: 42px;
	font-weight: 600;
	text-align: center;
	line-height: 110%;
	letter-spacing: 1px;
`

export const IconWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 120px;
	height: 120px;
	border: 2px solid var(--dark-blue);
	border-radius: 5px;

	> svg {
   	color: var(--dark-blue);
	}
`

export const Name = styled.h3`
	margin-top: 14px;
	color: #000;
	font-size: 20px;
	font-weight: 600;
`

export const Text = styled.p`
	margin-top: 8px;
	font-size: 15px;
	color: #626881;
	text-align: center;
	line-height: 150%;
	letter-spacing: 0.5px;
`
