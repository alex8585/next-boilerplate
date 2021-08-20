import { wrapper } from "../store"
import "../styles/global.css"

const App = function ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)
