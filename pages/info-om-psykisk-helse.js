export default function MentalHealth() {
  return (
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
  )
}
