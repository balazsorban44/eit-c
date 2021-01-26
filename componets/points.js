export default function Points() {
  return (
    <section
      id="poenginfo"
      style={{
        minHeight: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        background: "white",
        boxShadow: "0 0 30px 30px white",
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
          style={{
            marginTop: "10vh",
            color: "#5e5e2b",
            marginBottom: "5vh",
            fontSize: 34,
          }}
        >
          Aktivpoeng
        </h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
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
              <span style={{ color: "#5e5e2b" }}>{person.place ?? i + 1}.</span>
              <span>{person.name}</span>
              <strong style={{ color: "#5e5e2b" }}>{person.point}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
