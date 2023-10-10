import styled from 'styled-components'
import { IoChevronUp } from 'react-icons/io5'
import { IoChevronDown } from 'react-icons/io5'

import { IAnswer } from './styles.d'

export const Container = styled.section`
	width: 100%;
   max-width: 800px;
   margin: 50px auto 0;

	@media (min-width: 1200px) {
   	margin-top: 50px;
		border-radius: 20px;
	}
`

export const Title = styled.h2`
	padding: 0 30px;
   color: var(--dark-blue);
	font-size: 42px;
	font-weight: 600;
	line-height: 110%;
	letter-spacing: 1px;
`

export const Content = styled.div`
	margin-top: 10px;
	padding: 0 20px;
`

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 10px;
	padding: 18px 10px;
	font-size: 20px;
	font-weight: 600;
	border-bottom: 1px solid #c5c8d3;
	cursor: pointer;
`

export const Question = styled.dt`
	max-width: 88%;
`

export const ArrowUpIcon = styled(IoChevronUp).attrs({
   size: 26,
})``

export const ArrowDownIcon = styled(IoChevronDown).attrs({
   size: 26,
})``

export const Answer = styled.dd<IAnswer>`
	display: ${({ id, $expandedFaqId }) => id === $expandedFaqId ? 'block' : 'none'};
	padding: 12px 10px 0;
	color: #626881;
	line-height: 150%;
`
