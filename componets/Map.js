export default function Map() {
  return (
    <section id="aktivitetskart" style={{ marginTop: 0 }}>
      <h3 style={{ fontSize: "34px", color: "#5e5e2b", marginTop: 100 }}>
        Utekart
      </h3>
      <iframe
        id="map-iframe"
        frameBorder="0"
        src="https://ntnu-gis.maps.arcgis.com/apps/webappviewer/index.html?id=e202ca614a784d1284eeff840a8344fa"
      />
    </section>
  )
}
