export default function Hero() {
  return (
    <div
      style={{
        minHeight: "90vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
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
          alt="En gruppe barn ser smilende inn i kamera"
        />
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "10%",
            top: 0,
            left: 0,
            background: "linear-gradient(white 40%, transparent)",
          }}
        />
      </div>

      <h1>Aktivitet i Trondheim</h1>
    </div>
  )
}
