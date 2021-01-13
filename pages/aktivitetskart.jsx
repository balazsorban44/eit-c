import * as React from "react"
import Head from "next/head"
import styles from "../styles/Home.module.css"

const pois = [
  {
    name: "Grøntområder",
    subItems: [
      { name: "Park", id: "park" },
      { name: "Skog og mark", id: "woods" },
      { name: "Gjemte perler", id: "hidden" },
    ],
  },
  {
    name: "Møteplasser",
    subItems: [{ name: "Sitteplasser (med og uten ly)", id: "bench" }],
  },
  {
    name: "Aktiviteter",
    subItems: [
      { name: "Turer", id: "tours" },
      { name: "Treningsmuligheter", id: "training" },
      { name: "Sykkel/Pumptrack", id: "bike" },
      { name: "Skatepark", id: "skate" },
      { name: "Ski", id: "ski" },
      { name: "Skøyting", id: "iceskate" },
      { name: "Volleyball-, fotball-, tennisbaner", id: "volley" },
      { name: "Lekeplass", id: "play" },
    ],
  },
]

const listOfPois = {
  park: { lat: 220, lng: 128 },
  woods: { lat: 240, lng: 128 },
  hidden: { lat: 280, lng: 218 },
  bench: { lat: 680, lng: 640 },
  skate: { lat: 300, lng: 200 },
  tours: { lat: 500, lng: 250 },
  training: { lat: 400, lng: 250 },
  bike: { lat: 200, lng: 200 },
  ski: { lat: 434, lng: 676 },
  iceskate: { lat: 397, lng: 444 },
  volley: { lat: 444, lng: 444 },
  play: { lat: 222, lng: 444 },
  default: { lat: 0, lng: 0 },
}

export default function ActivityMap() {
  const [selectedItem, setSelectedItem] = React.useState("default")

  /**
   *
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
   */
  const handleClick = (id) => () => {
    setSelectedItem(id)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ul className={styles.pois}>
          {pois.map((poi) => {
            return (
              <li key={poi.name}>
                <Poi
                  name={poi.name}
                  subItems={poi.subItems}
                  handleClick={handleClick}
                />
              </li>
            )
          })}
        </ul>
        <div className={styles.map}>
          <Map coords={listOfPois[selectedItem]} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
function Map({ coords }) {
  return (
    <>
      <img
        src={`https://www.fillmurray.com/${coords.lat}/${coords.lng}`}
        alt={`Kart for ${coords.lat} ${coords.lng}`}
      />
      <pre>{JSON.stringify(coords, null, 2)}</pre>
    </>
  )
}
function Poi({ name, subItems, handleClick }) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen((prevOpen) => !prevOpen)
  return (
    <>
      <button onClick={handleOpen}>{name}</button>
      <ul>
        {open
          ? subItems.map((subItem) => {
              return (
                <li key={subItem.id}>
                  <button onClick={handleClick(subItem.id)}>
                    {subItem.name}
                  </button>
                </li>
              )
            })
          : null}
      </ul>
    </>
  )
}
