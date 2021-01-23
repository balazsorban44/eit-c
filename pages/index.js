import * as React from "react"
import Head from "next/head"
import Link from "next/link"
import Hero from "../componets/Hero"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <section id="aktivitetskart">
          <h2>Aktivitetskart</h2>
          {/* <iframe
            id="map-iframe"
            frameBorder="0"
            src="https://ntnu-gis.maps.arcgis.com/apps/webappviewer/index.html?id=e202ca614a784d1284eeff840a8344fa"
            width="100%"
            height="100%"
          /> */}
        </section>
        <section>
          <h2>Psykisk helse</h2>
          <p style={{ maxWidth: 640, textAlign: "center" }}>
            Dette er en sammenfatning av tips og råd om tiltak som du selv kan
            gjøre med tanke på dagens situasjon med korona-pandemi og
            restriksjoner fra myndighetene.
          </p>
          <Link href="/psykisk-helse">
            <a>Info, helse vetje</a>
          </Link>
        </section>
      </main>
    </>
  )
}
