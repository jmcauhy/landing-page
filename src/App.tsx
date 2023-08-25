import { createGlobalStyle } from 'styled-components'

function App() {
   return (
      <>
         <GlobalStyle />
      </>
   )
}

const GlobalStyle = createGlobalStyle`
   :root {
      --dark-blue: #0c4577;
      --blue: #105ea2;
   }

   * {
      margin: 0;
      padding: 0;
      outline: none;
      box-sizing: border-box;
   }

   body {
      font-family: 'Montserrat', sans-serif;
      -webkit-font-smoothing: antialiased;
   }

   button {
      font-family: 'Open Sans', sans-serif;
   }
`

export default App
