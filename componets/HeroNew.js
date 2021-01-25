export default function Hero() {
  return (
    <div
      style={{
        minHeight: "90vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <img
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          src="/hero.jpg"
          alt="Bildet viser gamle bybroa over Nidelva i Trondheim"
        />
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            background:
              "linear-gradient(white, transparent 30%, transparent 95%, white)",
          }}
        />
      </div>

      <img
        style={{
          width: 96,
          height: 96,
        }}
        src="/logo.png"
        alt="logo som viser en person går mot et tre"
      />

      <h1
        style={{
          marginTop: 260,
          marginBottom: 250,
          fontSize: 72,
          fontWeight: "lighter",
        }}
      >
        Aktiviteter i Trondheim
      </h1>
    </div>
  )
}
