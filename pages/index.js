import * as React from "react"
import Head from "next/head"
import Link from "next/link"
import Hero from "../componets/HeroNew"

export default function Home() {
  return (
    <>
      <Head>
        <title>Aktiv i Trondheim</title>
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
              style={{ marginTop: "10vh", 
              font: 'DM Serif Display',
              color: "#558405",
              marginBottom: "5vh", 
              fontSize: 32 
            }}
            >
              Aktivpoeng
            </h3>
            <p style={{fontFamily: "Proxima Nova light"}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <p style={{fontFamily: "Proxima Nova light"}}>
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
                fontSize: 34,
                color: "#558405",
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
                    fontFamily: "Proxima Nova light",
                    backgroundColor: "#edf2e5",
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

        <section
      id="aktivitetskart"
      style={{ margin: "5vh 15vw" }}
    >
      <iframe
        id="map-iframe"
        frameBorder="0"
        src="https://ntnu-gis.maps.arcgis.com/apps/webappviewer/index.html?id=e202ca614a784d1284eeff840a8344fa"
        width="90%"
        height="90%"
      />
      </section>

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
            <p style={{fontFamily: "Proxima Nova light"}}>
              Å være i bevegelse jevnlig er bra for kroppen, det vet vi. Det vi
              kanskje ikke tenker ofte nok på er at aktivitet også er godt for
              den psykiske helsa. Vi føler oss både sterkere og lettere til
              sinns, etter en gå-, jogge- eller sykkeltur.
            </p>
            <p style={{fontFamily: "Proxima Nova light"}}>
              Når du er aktiv, produserer kroppen din lykkehormoner som heter
              endorfiner. Det spiller ikke så stor rolle hva slags aktivitet du
              holder på med, så lenge du blir litt varm og gjerne andpusten.
              Gjør en aktivitet du liker, enten det er dansing, svømming eller
              skigåing. Mulighetene er mange.
            </p>
            <p style={{fontFamily: "Proxima Nova light"}}>
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
            <q style={{ color: "#558405", maxWidth: "40%", fontFamily: "Proxima Nova light"}}>
              <strong>
                Helsedirektoratet anbefaler alle barn og unge å være aktive i
                minst <emph>60 minutter</emph> hver dag
              </strong>
            </q>
          </div>
        </section>
        <br></br>

        <section id="kontaktinfo">
        <h2
              style={{
                color: "#558405",
                textAlign: "center",
                fontSize: 32,
              }}
            >
              Kontaktinformasjon
            </h2>
          
          <p style={{fontFamily: "Proxima Nova light"}}>Hvis det er noe du lurer på, eller noe du ønsker å gi tilbakemelding på, kontakt oss her.</p>
          
          <form className="myform">
          
            <div className="formgroup">
              <label> <strong>Fornavn</strong> </label>
              <input color="#558405" type="text" name="firstName"></input>
            </div>

            <div className="formgroup">
              <label><strong>Etternavn</strong></label>
              <input color="#558405" type="text" name="lastName"></input>
            </div>

            <div className="formgroup">
              <label><strong>Email</strong></label>
              <input color="#558405" type="text" name="email"></input>
            </div>

            <div className="formgroup">
              <label><strong>Emne</strong></label>
              <input color="#558405" type="text" name="emne"></input>
            </div>

            <div className="formgroup">
              <label><strong>Det gjelder... </strong></label>
              <select name="topic">
                  <option value="kart">Kartløsningen</option>
                  <option value="psykisk">Info om psykisk helse</option>
                  <option value="poeng">Poengsystemet</option>
              </select>
            </div>
            <br></br>
            <div className="formgroup">
              <label><strong>Melding</strong></label>
              <textarea type="textarea" name="melding"></textarea>
            </div>

            <input className="button" type="submit" value="Send inn" name=""></input>
          </form>
        </section>
      </main>
    </>
  )
}
