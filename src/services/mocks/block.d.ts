interface ITopLine {
   text: string
}

export interface IBlock {
   reverse: boolean
   topLine: ITopLine
   headline: string
   description: string
   buttonLabel: string
   linkTo?: string
   img: string
   alt: string
}
