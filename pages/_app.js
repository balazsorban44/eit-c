import Header from "../componets/Header"
import "../styles/globals.sass"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main>
        <Component {...pageProps} />
      </main>
      <Header />
      <footer>
        <strong>© Eksperter i Team</strong>&nbsp;—&nbsp;
        {new Date().getFullYear()}
      </footer>
    </>
  )
}

export default MyApp
