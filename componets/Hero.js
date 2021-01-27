export default function Hero({ offset }) {
  return (
    <section className="full-bleed" id="intro">
      <div className="intro-text">
        <img
          style={{
            width: 96,
            height: 96,
            WebkitFilter: "drop-shadow(2px 2px 4px #808080)",
            filter: "drop-shadow(2px 2px 4px #808080)",
          }}
          className="intro-logo"
          src="/logo.png"
          alt="logo som viser en person går mot et tre"
        />

        <h1>Aktiv i Trondheim</h1>
      </div>
      <img
        className="intro-bg"
        style={{
          objectFit: "cover",
          width: "100%",
          transform: `translateY(${offset * 0.1}px)`,
        }}
        src="/hero.jpg"
        alt="Bildet viser gamle bybroa over Nidelva i Trondheim"
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          boxShadow: "0 0 20px 30px white",
          width: "100%",
        }}
      />
    </section>
  )
}
