import GlobalComponent from '../components/GlobalComponent'

export default function MyApp({ Component, pageProps }) {
  return (
    <GlobalComponent>
      <Component {...pageProps} />
    </GlobalComponent>
  )
}
