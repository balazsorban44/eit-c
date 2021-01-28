import firebase from "firebase/app"
import "firebase/database"

const url =
  process.env.NODE_ENV === "production"
    ? "https://helse.vercel.app"
    : "http://localhost:3000"

export default async function contact(req, res) {
  try {
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyAFlK3m-3uxR2ogU2ZPNwvbzGDoWvwh51M",
        authDomain: "helse-eit.firebaseapp.com",
        projectId: "helse-eit",
        storageBucket: "helse-eit.appspot.com",
        databaseURL:
          "https://helse-eit-default-rtdb.europe-west1.firebasedatabase.app",
        messagingSenderId: "1019832193745",
        appId: "1:1019832193745:web:41d999921fbb9a6e226bf0",
      })
    }
    await firebase
      .database()
      .ref("contacts")
      .push({ ...req.body })

    res.end()
  } catch (error) {
    console.error(error)
    res.redirect(`${url}/?error=${error.name}`)
  }
}
