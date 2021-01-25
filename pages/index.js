import * as React from "react"
import Head from "next/head"
import Link from "next/link"
import Hero from "../componets/HeroNew"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <section>
          <div
            style={{
              minWidth: 320,
              backgroundColor: "white",
              boxShadow: "0 0 20px black",
              marginTop: -64,
              alignSelf: "flex-start",
            }}
          >
            <h3 style={{ textAlign: "center" }}>Topp 10</h3>
            <ul>
              {[
                { name: "Jakob", point: 175 },
                { name: "Ann Elise", point: 170 },
                { name: "Inger", point: 157 },
              ].map((person, i) => (
                <li
                  style={{
                    padding: 16,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  key={person.name + person.point}
                >
                  <span>{i + 1}.</span>
                  <span>{person.name}</span>
                  <span>{person.point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section id="aktivitetskart">
          <h2>Aktivitetskart</h2>
          <iframe
            id="map-iframe"
            frameBorder="0"
            src="https://ntnu-gis.maps.arcgis.com/apps/webappviewer/index.html?id=e202ca614a784d1284eeff840a8344fa"
            width="100%"
            height="100%"
          />
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
