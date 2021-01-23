import Link from "next/link"

const nav = [
  { title: "Hjem", href: "/" },
  { title: "Aktivitetskart", href: "#aktivitetskart" },
  { title: "Info om poeng", href: "/info-om-poeng" },
  { title: "Info om psykisk helse", href: "/info-om-psykisk-helse" },
]

export default function Header() {
  return (
    <nav>
      <ul>
        {nav.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <img src="/logo.png" alt="to mennesker holder hender" />
      <h1>Aktiviteter for barn & unge</h1>
    </nav>
  )
}
