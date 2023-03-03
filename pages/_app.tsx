import Layouts from '@/component/Layouts'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return    <Layouts >
  <Component {...pageProps} />
  </Layouts>
}
