export default function Health() {
  return (
    <section id="psykiskhelse">
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
          psykiske helsa. Vi føler oss både sterkere og lettere til sinns, etter
          en gå-, jogge- eller sykkeltur.
        </p>
        <p>
          Når du er aktiv, produserer kroppen din lykkehormoner som heter
          endorfiner. Det spiller ikke så stor rolle hva slags aktivitet du
          holder på med, så lenge du blir litt varm og gjerne andpusten. Gjør en
          aktivitet du liker, enten det er dansing, svømming eller skigåing.
          Mulighetene er mange.
        </p>
        <p>
          Helsedirektoratet anbefaler alle barn og unge å være aktive minst 60
          minutter hver dag. De som er aktive sammen med andre, opplever at det
          sosiale bidrar til økt trivsel og godt humør. Utendørsaktiviteter gir
          frisk luft og sollys, og det kan redusere stress, øke energinivået og
          gi bedre søvnkvalitet.
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
            Helsedirektoratet anbefaler alle barn og unge å være aktive i minst
            60 minutter hver dag.
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
  )
}
