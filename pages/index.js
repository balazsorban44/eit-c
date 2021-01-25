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
        <section id="poenginfo" style={{ minHeight: 0 }}>
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
      <section id="psykiskhelse" style={{ minHeight: 0 }}>
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
          <h2 style={{color:"#228B22",textAlign: "center" }}>Hvorfor uteaktivitet?</h2>
          <p style={{ maxWidth: "60%" }}>
          Å være i bevegelse jevnlig er bra for kroppen, det vet vi. Det vi kanskje ikke tenker ofte nok på er at aktivitet også er godt for den psykiske helsa. Vi føler oss både sterkere og lettere til sinns, etter en gå-, jogge- eller sykkeltur. 
          </p>
          <p style={{ maxWidth: "60%" }}>
          Når du er aktiv, produserer kroppen din lykkehormoner som heter endorfiner. Det spiller ikke så stor rolle hva slags aktivitet du holder på med, så lenge du blir litt varm og gjerne andpusten. Gjør en aktivitet du liker, enten det er dansing, svømming eller skigåing. Mulighetene er mange.
          </p>
          <p style={{ maxWidth: "60%" }}>
          Helsedirektoratet anbefaler alle barn og unge å være aktive minst 60 minutter hver dag. De som er aktive sammen med andre, opplever at det sosiale bidrar til økt trivsel og godt humør. Utendørsaktiviteter gir frisk luft og sollys, og det kan redusere stress, øke energinivået og gi bedre søvnkvalitet.
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
          <p style={{color:"#228B22", maxWidth: "40%" }}><strong>"Helsedirektoratet anbefaler alle barn og unge
            å være aktive i minst 60 minutter hver dag"</strong></p>
        </div>
      </div>
    </section>
    <br></br>
    <section id="kontaktinfo" >
      <h2>Kontaktinfo</h2>
      <p>Her kan det sendes inn meldinger </p>
      <form> 
  
          <div> 
          <label>Fornavn</label>
          <input type="text" name="firstName">    
          </input>      
          </div>

          <br></br>

          <div> 
          <label>Etternavn</label>
          <input type="text" name="lastName">    
          </input>      
          </div>

          <br></br>

          <div>
          <label>Email</label>
          <input type="text" name="email">   
          </input>       
          </div>

         <br></br>


         <div>
          <label>Emne</label>
          <input type="text" name="emne">   
          </input>       
         </div>

         <br></br>


         <div>
          <label>Melding</label>
          <textarea type="message" name="melding">   
          </textarea>       
         </div>


      </form>
      
    </section>
    </main>
    </>
  )
}
