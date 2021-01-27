export default function Hero({ offset }) {
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
          transform: `translateY(${offset * 0.5}px)`,
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
            height: "101%",
            top: 0,
            left: 0,
          }}
        />
      </div>

      <img
        style={{
          width: 96,
          height: 96,
          WebkitFilter: "drop-shadow(2px 2px 4px #808080)",
          filter: "drop-shadow(2px 2px 4px #808080)",
        }}
        src="/logo.png"
        alt="logo som viser en person går mot et tre"
      />

      <h1
        style={{
          marginTop: 50,
          marginBottom: 400,
          fontSize: 72,
          textShadow: "2px 2px 4px #808080",
          fontWeight: "lighter",
          fontFamily: "DM Serif Display",
        }}
      >
        Aktiv i Trondheim
      </h1>
    </div>
  )
}
