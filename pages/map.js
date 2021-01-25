import React from "react"
import styles from "../styles/map.module.sass"
export default function Map() {
  return (
    <section
      className={styles.map}
      id="aktivitetskart"
      style={{ maxWidth: "none", margin: "5vh 0" }}
    >
      <div className={styles.mapOverlay} />
      <iframe
        id="map-iframe"
        frameBorder="0"
        src="https://ntnu-gis.maps.arcgis.com/apps/webappviewer/index.html?id=e202ca614a784d1284eeff840a8344fa"
        width="100%"
        height="100%"
      />
    </section>
  )
}
