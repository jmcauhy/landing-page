interface IPath {
   id: string
   path: string
   text: string
}

const nav: IPath[] = [
   {
      id: 'about',
      path: '/about',
      text: 'About us',
   },
   {
      id: 'pricing',
      path: '/pricing',
      text: 'Pricing',
   },
   {
      id: 'faq',
      path: '/faq',
      text: 'FAQ',
   },
   {
      id: 'contact',
      path: '/contact',
      text: 'Contact us',
   },
]

export default nav
