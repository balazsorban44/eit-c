import Link from "next/link"

const nav = [
  { title: "Hjem", href: "/" },
  { title: "Utekart", href: "/#aktivitetskart" },
  { title: "Utepoeng", href: "/info-om-poeng" },
  { title: "Helse", href: "/info-om-psykisk-helse" },
  { title: "Kontakt", href: "/info-kontakt" },
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
    </nav>
  )
}
