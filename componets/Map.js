export default function Map() {
  return (
    <section
      id="aktivitetskart"
      style={{
        boxShadow: "0 0 30px 30px white",
        position: "relative",
        zIndex: 1,
      }}
    >
      <iframe
        id="map-iframe"
        frameBorder="0"
        src="https://ntnu-gis.maps.arcgis.com/apps/webappviewer/index.html?id=e202ca614a784d1284eeff840a8344fa"
        width="120%"
        height="100%"
        style={{
          minHeight: "85vh",
          boxShadow:
            "5px 10px 20px 0 rgba(0, 0, 0, 0.5), 4px 6px 20px 0 rgba(0, 0, 0, 0.5)",
        }}
      />
    </section>
  )
}
