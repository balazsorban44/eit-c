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
        <section style={{ minHeight: 0 }}>
        <div style={{ display: "flex" }}>
        <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          > 
          
          <h2 style={{ textAlign: "center" }}>Informasjon om poengsystemet</h2>
            <p style={{ maxWidth: "60%" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
            <p style={{ maxWidth: "60%" }}>
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          
          <div
            style={{
              minWidth: 320,
              backgroundColor: "white",
            }}
          >
            <h3 style={{ textAlign: "center" }}>Topp 10</h3>
            <ul>
              {[
                { name: "Jakob", point: 175 },
                { name: "Ann Elise", point: 170 },
                { name: "Inger", point: 157 },
                { name: "Hans", point: 147 },
                { name: "Solveig", point: 139 },
                { name: "Christian", point: 133 },
                { name: "Mette", point: 130 },
                { name: "Johann", point: 124 },
                { name: "Marit", point: 122 },
                { name: "Benjamin", point: 113 },
              ].map((person, i) => (
                <li
                  style={{
                    padding: 0,                    marginBottom: 30,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  key={person.name + person.point}
                >
                  <span>{i + 1}.</span>
                  <span>{person.name}</span>
                  <span>{person.point}</span>
                </li>
              ))
              }
            </ul>
            <p style={{
                    padding: 10,
                    display: "flex",
                    justifyContent: "space-between",
                  }}>
            <span>43.</span>
            <span><strong>Per (deg)</strong></span>
            <span>55</span>
            </p>
          </div>
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
          <Link href="/info-om-psykisk-helse">
            <a className="link"><strong>Mer info</strong></a>
          </Link>
        </section>
      </main>
    </>
  )
}
