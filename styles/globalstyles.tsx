import { createGlobalStyle } from 'styled-components'
import { fontFaces } from './fonts';

const GlobalStyle = createGlobalStyle`
  ${fontFaces}
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  
`

export default GlobalStyle
