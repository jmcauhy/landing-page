import styled from 'styled-components'

import { IOption } from './styles.d'

export const Container = styled.section`
	width: 100%;
   margin: 60px auto 40px;
	overflow-x: hidden;

	@media (min-width: 1200px) {
		margin-top: 80px;
	}
`

export const Title = styled.h2`
	margin: 0 20px;
	color: var(--dark-blue);
	font-size: 42px;
	font-weight: 600;
	text-align: center;
	line-height: 110%;
	letter-spacing: 1px;
`

export const FrequencyToggler = styled.div`
	display: flex;
	justify-content: center;
	gap: 12px;
	margin: 40px auto 0;

	@media (min-width: 1200px) {
		justify-content: flex-start;
		max-width: 754px;
	}
`

export const Option = styled.div<IOption>`
	padding: 14px 24px;
	font-weight: 600;
	color: ${({ id, $frequency }) => $frequency === id ? '#FFF' : '#000'};
	background-color: ${({ id, $frequency }) => $frequency === id ? '#000' : '#F8F8FE'};
	border-radius: 5px;
	cursor: pointer;
`

export const Content = styled.div`
	display: flex;
	gap: 30px;
	width: 1350px;
	margin: 30px auto 0;
	background-color: #FFF;
	touch-action: pan-y;
	box-sizing: unset;

	@media (min-width: 1200px) {
		max-width: 1200px;
		margin-top: 40px;
	}
`
