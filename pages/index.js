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
              color: "#5e5e2b",
              marginBottom: "5vh", 
              fontSize: 34 
            }}
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

          <img
          style={{
            objectFit: "cover",
            width: "18%",
            height: "10%",
            marginTop: "20vh", 
          }}
          src="/togapatur.png"
          alt="Bildet viser to personer som går tur"
        />

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
                color: "#5e5e2b",
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
                    backgroundColor: "#edf2e5",
                    padding: "3px 16px",
                    marginBottom: 3,
                    marginTop: person.active ? 32 : undefined,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  key={person.name + person.point}
                >
                  <span style={{color: "#5e5e2b"}}>{person.place ?? i + 1}.</span>                  
                  <span>{person.name}</span>
                  <strong style={{color: "#5e5e2b"}}>{person.point}</strong>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
      id="aktivitetskart"
      style={{ 
        margin: "5vh 15vw" ,
      }}
    >
      <iframe
        id="map-iframe"
        frameBorder="0"
        src="https://ntnu-gis.maps.arcgis.com/apps/webappviewer/index.html?id=e202ca614a784d1284eeff840a8344fa"
        width="120%"
        height="100%"
        style={{minHeight: "85vh" , boxShadow:"5px 10px 20px 0 rgba(0, 0, 0, 0.5), 4px 6px 20px 0 rgba(0, 0, 0, 0.5)"}}
      />
      </section>

      <section
      id="imagePastMap"
      style={{ 

        }}>

      <img
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            boxShadow:"5px 10px 20px 0 rgba(0, 0, 0, 0.5), 4px 6px 20px 0 rgba(0, 0, 0, 0.5)",
          }}
          src="/pastmap.jpg"
          alt="Bildet viser en person som går tur i skogen"
        />
      </section>


        <section
          id="psykiskhelse"
          style={{ flexDirection: "row", minHeight: "80vh",}}
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
            <q style={{ color: "#5e5e2b", maxWidth: "40%",}}>
              <strong>
                Helsedirektoratet anbefaler alle barn og unge å være aktive i
                minst <emph>60 minutter</emph> hver dag
              </strong>
            </q>
          </div>
        </section>
        <br></br>

        <section id="kontaktinfo"
        style={{}}>
        <h2
              style={{
                color: "#5e5e2b",
                textAlign: "center",
                fontSize: 32,
              }}
            >
              Kontaktinformasjon
            </h2>
          
          <p>Hvis det er noe du lurer på, eller noe du ønsker å gi tilbakemelding på, kontakt oss her.</p>
          
          <form className="myform">
          
            <div className="formgroup">
              <label style={{fontFamily: "PT Sans Narrow"}}> <strong>Fornavn</strong> </label>
              <input color="#5e5e2b" placeholder="Ola" type="text" name="firstName"></input>
            </div>

            <div className="formgroup">
              <label style={{fontFamily: "PT Sans Narrow"}}><strong>Etternavn</strong></label>
              <input color="#5e5e2b" placeholder="Nordmann" type="text" name="lastName"></input>
            </div>

            <div className="formgroup">
              <label style={{fontFamily: "PT Sans Narrow"}}><strong>Email</strong></label>
              <input color="#5e5e2b" placeholder="ola@nordmann.no" type="text" name="email"></input>
            </div>

            <div className="formgroup">
              <label><strong>Emne</strong></label>
              <input color="#5e5e2b" type="text" name="emne"></input>
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
              <textarea type="textarea" rows="6" placeholder="Din melding..." name="melding"></textarea>
            </div>

            <input className="button" type="submit" value="Send inn" name="" onclick="location.href: '#kontaktinfo'"></input>
          </form>
        </section>
      </main>
    </>
  )
}
