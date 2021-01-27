import * as React from "react"

import Head from "next/head"
import Hero from "../componets/HeroNew"
import Points from "../componets/points"
import Map from "../componets/Map"

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
    <>
      <Head>
        <title>Aktiv i Trondheim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero offset={offset} />
      <Points />
      <Map />

      <section
        style={{
          padding: 0,
          maxHeight: "80vh",
          overflow: "hidden",
          minHeight: "auto",
        }}
      >
        <img
          style={{
            width: "100vw",
            transform: `translateY(${-850 + offset * 0.2}px)`,
          }}
          src="/pastmap.jpg"
          alt="Bildet viser en person som går tur i skogen"
        />
      </section>

      <section
        id="psykiskhelse"
        style={{
          flexDirection: "row",
          minHeight: "80vh",
          alignItems: "flex-end",
          boxShadow: "0 0 40px 40px white",
          position: "relative",
          zIndex: 1,
        }}
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
              color: "#5e5e2b",
              textAlign: "center",
              fontSize: 32,
              marginTop: 120,
            }}
          >
            Hvorfor uteaktivitet?
          </h2>
          <p>
            Å være i bevegelse jevnlig er bra for kroppen, det vet vi. Det vi
            kanskje ikke tenker ofte nok på er at aktivitet også er godt for den
            psykiske helsa. Vi føler oss både sterkere og lettere til sinns,
            etter en gå-, jogge- eller sykkeltur.
          </p>
          <p>
            Når du er aktiv, produserer kroppen din lykkehormoner som heter
            endorfiner. Det spiller ikke så stor rolle hva slags aktivitet du
            holder på med, så lenge du blir litt varm og gjerne andpusten. Gjør
            en aktivitet du liker, enten det er dansing, svømming eller
            skigåing. Mulighetene er mange.
          </p>
          <p>
            Helsedirektoratet anbefaler alle barn og unge å være aktive minst 60
            minutter hver dag. De som er aktive sammen med andre, opplever at
            det sosiale bidrar til økt trivsel og godt humør.
            Utendørsaktiviteter gir frisk luft og sollys, og det kan redusere
            stress, øke energinivået og gi bedre søvnkvalitet.
          </p>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <q style={{ color: "#5e5e2b", maxWidth: "50%", textAlign: "center" }}>
            <strong style={{ fontSize: 22 }}>
              Helsedirektoratet anbefaler alle barn og unge å være aktive i
              minst 60 minutter hver dag.
            </strong>
          </q>

          <img
            style={{
              objectFit: "cover",
              width: "70%",
              height: "70%",
              marginTop: 100,
            }}
            src="/aktivitetbarn.jpg"
            alt="Bildet viser barn som leker med en ball"
          />
        </div>
      </section>
      <br></br>

      <section id="kontaktinfo">
        <h2
          style={{
            color: "#5e5e2b",
            textAlign: "center",
            fontSize: 32,
          }}
        >
          Kontaktinformasjon
        </h2>

        <p>
          Hvis det er noe du lurer på, eller noe du ønsker å gi tilbakemelding
          på, kontakt oss her.
        </p>

        <form className="myform">
          <div className="formgroup">
            <label style={{ fontFamily: "PT Sans Narrow" }}>
              {" "}
              <strong>Fornavn</strong>{" "}
            </label>
            <input
              color="#5e5e2b"
              placeholder="Ola"
              type="text"
              name="firstName"
            ></input>
          </div>

          <div className="formgroup">
            <label style={{ fontFamily: "PT Sans Narrow" }}>
              <strong>Etternavn</strong>
            </label>
            <input
              color="#5e5e2b"
              placeholder="Nordmann"
              type="text"
              name="lastName"
            ></input>
          </div>

          <div className="formgroup">
            <label style={{ fontFamily: "PT Sans Narrow" }}>
              <strong>Email</strong>
            </label>
            <input
              color="#5e5e2b"
              placeholder="ola@nordmann.no"
              type="text"
              name="email"
            ></input>
          </div>

          <div className="formgroup">
            <label>
              <strong>Emne</strong>
            </label>
            <input color="#5e5e2b" type="text" name="emne"></input>
          </div>

          <div className="formgroup">
            <label>
              <strong>Det gjelder... </strong>
            </label>
            <select name="topic">
              <option value="kart">Kartløsningen</option>
              <option value="psykisk">Info om psykisk helse</option>
              <option value="poeng">Poengsystemet</option>
            </select>
          </div>
          <br></br>
          <div className="formgroup">
            <label>
              <strong>Melding</strong>
            </label>
            <textarea
              type="textarea"
              rows="6"
              placeholder="Din melding..."
              name="melding"
            ></textarea>
          </div>

          <input
            className="button"
            type="submit"
            value="Send inn"
            name=""
            onClick={(e) => {
              e.preventDefault()
              window.location = "#kontaktinfo"
            }}
          ></input>
        </form>
      </section>
    </>
  )
}
