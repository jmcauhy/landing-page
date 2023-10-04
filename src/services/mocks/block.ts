import { IBlock } from './block.d'

export const blockOne: IBlock = {
   reverse: false,
   topLine: { text: 'Founded in 2012' },
   headline: 'In business for 9 years and counting',
   description: 'We have designed and implemented the best cloud security solutions',
   buttonLabel: 'Find More',
   img: '/assets/Deal.svg',
   alt: '',
}

export const blockTwo: IBlock = {
   reverse: true,
   topLine: { text: 'Designed & Developed' },
   headline: 'Adherents of the best practices',
   description: 'Our clients have had the best experience working with us',
   buttonLabel: 'View Project',
   linkTo: '/more',
   img: '/assets/Connection.svg',
   alt: '',
}

export const blockThree: IBlock = {
   reverse: false,
   topLine: { text: 'Highly reputed brand' },
   headline: 'Why us?',
   description:
		'Our 9 year experience have allowed us to use the most innovative technologies and methodologies',
   buttonLabel: 'View Project',
   linkTo: '/download',
   img: '/assets/ChartUp.svg',
   alt: '',
}
