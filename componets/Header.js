import styles from "../styles/Home.module.css"
import Link from "next/link"

export default function Header() {
  return (
    <nav className={styles.nav}>
      <img src="/logo.png" alt="to mennesker holder hender" />
      <h1>Aktiviteter for barn & unge</h1>
      <ul>
        <li>
          <Link href="/">
            <a>Hjem</a>
          </Link>
        </li>
        <li>
          <Link href="/aktivitetskart">
            <a>Aktivitetskart</a>
          </Link>
        </li>
        <li>
          <Link href="/teststasjoner">
            <a>Teststasjoner</a>
          </Link>
        </li>
        <li>
          <Link href="/psykologi">
            <a>Psykologi</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
