import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../styles/globalstyles'

const theme: DefaultTheme = {
  colors: {
    primary: '#37324B',
    secondary: '#0070f3',
  },
  fonts: {
    primary: "Gotham",
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
