import Link from "next/link"

const nav = [
  { title: "Hjem", href: "#top" },
  { title: "Utepoeng", href: "#poenginfo" },
  { title: "Utekart", href: "#aktivitetskart" },
  { title: "Helse", href: "#psykiskhelse" },
  { title: "Kontakt", href: "#kontaktinfo" },
]

export default function Header() {
  return (
    <nav>
      <ul>
        {nav.map((item) => (
          <li key={item.href}>
            <a href={item.href}> {item.title} </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
