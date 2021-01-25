import * as React from "react"
import Head from "next/head"
import Link from "next/link"
import Hero from "../componets/HeroNew"
import Map from "./map"

export default function Home() {
  return (
    <>
      <Head>
        <title>Aktiviteter i Trondheim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <section
          id="poenginfo"
          style={{
            minHeight: 0,
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              maxWidth: "40%",
            }}
          >
            <h3
              style={{ marginTop: "10vh", marginBottom: "5vh", fontSize: 32 }}
            >
              Aktivpoeng
            </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages.
            </p>
          </div>

          <div
            style={{
              minWidth: 320,
              backgroundColor: "white",
            }}
          >
            <h3
              style={{
                marginTop: "10vh",
                marginBottom: "5vh",
                textAlign: "center",
                fontSize: 32,
              }}
            >
              Topp 10
            </h3>
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
                { name: "Per (deg)", point: 55, place: 43, active: true },
              ].map((person, i) => (
                <li
                  style={{
                    backgroundColor: "#efefef",
                    padding: 3,
                    marginBottom: 3,
                    marginTop: person.active ? 32 : undefined,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  key={person.name + person.point}
                >
                  <span>{person.place ?? i + 1}.</span>
                  {person.active ? (
                    <strong>{person.name}</strong>
                  ) : (
                    <span>{person.name}</span>
                  )}
                  <span>{person.point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Map />
        <section
          id="psykiskhelse"
          style={{ flexDirection: "row", minHeight: "80vh" }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h2
              style={{
                color: "#558405",
                textAlign: "center",
                fontSize: 32,
              }}
            >
              Hvorfor uteaktivitet?
            </h2>
            <p>
              Å være i bevegelse jevnlig er bra for kroppen, det vet vi. Det vi
              kanskje ikke tenker ofte nok på er at aktivitet også er godt for
              den psykiske helsa. Vi føler oss både sterkere og lettere til
              sinns, etter en gå-, jogge- eller sykkeltur.
            </p>
            <p>
              Når du er aktiv, produserer kroppen din lykkehormoner som heter
              endorfiner. Det spiller ikke så stor rolle hva slags aktivitet du
              holder på med, så lenge du blir litt varm og gjerne andpusten.
              Gjør en aktivitet du liker, enten det er dansing, svømming eller
              skigåing. Mulighetene er mange.
            </p>
            <p>
              Helsedirektoratet anbefaler alle barn og unge å være aktive minst
              60 minutter hver dag. De som er aktive sammen med andre, opplever
              at det sosiale bidrar til økt trivsel og godt humør.
              Utendørsaktiviteter gir frisk luft og sollys, og det kan redusere
              stress, øke energinivået og gi bedre søvnkvalitet.
            </p>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <q style={{ color: "#558405", maxWidth: "40%" }}>
              <strong>
                Helsedirektoratet anbefaler alle barn og unge å være aktive i
                minst 60 minutter hver dag
              </strong>
            </q>
          </div>
        </section>
        <br></br>
        <section id="kontaktinfo">
          <h2>Kontaktinfo</h2>
          <p>Her kan det sendes inn meldinger </p>
          <form>
            <div>
              <label>Fornavn</label>
              <input type="text" name="firstName"></input>
            </div>

            <br></br>

            <div>
              <label>Etternavn</label>
              <input type="text" name="lastName"></input>
            </div>

            <br></br>

            <div>
              <label>Email</label>
              <input type="text" name="email"></input>
            </div>

            <br></br>

            <div>
              <label>Emne</label>
              <input type="text" name="emne"></input>
            </div>

            <br></br>

            <div>
              <label>Melding</label>
              <textarea type="message" name="melding"></textarea>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}
