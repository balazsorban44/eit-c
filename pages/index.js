import * as React from "react"

import Head from "next/head"
import Hero from "../componets/Hero"
import Points from "../componets/Points"
import Map from "../componets/Map"
import PastMap from "../componets/PastMap"
import Health from "../componets/Health"
import Contact from "../componets/Contact"

export default function Home() {
  const [offset, setOffset] = React.useState(0)

  React.useEffect(() => {
    const handler = (e) => {
      setOffset(() => window.pageYOffset)
    }
    window.addEventListener("scroll", handler)
    return () => {
      window.removeEventListener("scroll", handler)
    }
  }, [])

  return (
    <main className="wrapper">
      <Head>
        <title>Aktiv i Trondheim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero offset={offset} />
      <Points />
      <Map />
      <PastMap offset={offset} />
      <Health />
      <Contact />
    </main>
  )
}
