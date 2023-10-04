interface ITopLine {
   text: string
}

export interface IBlockProps {
   reverse: boolean
   img: string
   alt: string
   topLine: ITopLine
   headline: string
   description: string
   buttonLabel: string
}
