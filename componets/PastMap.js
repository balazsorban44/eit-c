export default function PastMap({ offset }) {
  return (
    <section
      className="full-bleed pastmap"
      style={{
        maxHeight: "80vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        style={{
          position: "relative",
          zIndex: -1,
       s   transform: `translateY(${350 - offset * 0.1}px)`,
        }}
        src="/pastmap.jpg"
        alt="Bildet viser en person som går tur i skogen"
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          boxShadow: "0 0 20px 30px white",
          width: "100%",
        }}
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
