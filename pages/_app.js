import Header from "../componets/Header"
import "../styles/globals.sass"
import "../styles/layout.sass"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Header />
      {/* <footer>
        <strong>© Eksperter i Team</strong>&nbsp;—&nbsp;
        {new Date().getFullYear()}
      </footer> */}
    </>
  )
}

export default MyApp
