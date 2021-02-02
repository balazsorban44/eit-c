export default function Contact() {
  return (
    <section id="kontaktinfo">
      <h2
        style={{
          color: "#5e5e2b",
          textAlign: "center",
          fontSize: 32,
        }}
      >
        Kontaktinformasjon
      </h2>

      <p>
        Hvis det er noe du lurer på, eller noe du ønsker å gi tilbakemelding på,
        kontakt oss her.
      </p>

      <form
        className="myform"
        action="/api/contact"
        method="post"
        onSubmit={async (e) => {
          e.preventDefault()
          try {
            await fetch("/api/contact", {
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(
                Object.fromEntries(new FormData(e.target).entries())
              ),
              method: "post",
            })
            window.location.reload()
          } catch (error) {
            window.location = `${window.location}?error`
          }
        }}
      >
        <div className="formgroup">
          <label style={{ fontFamily: "PT Sans Narrow" }}>
            <strong>Fornavn</strong>{" "}
          </label>
          <input
            color="#5e5e2b"
            placeholder="Ola"
            type="text"
            name="firstName"
          ></input>
        </div>

        <div className="formgroup">
          <label style={{ fontFamily: "PT Sans Narrow" }}>
            <strong>Etternavn</strong>
          </label>
          <input
            color="#5e5e2b"
            placeholder="Nordmann"
            type="text"
            name="lastName"
          ></input>
        </div>

        <div className="formgroup">
          <label style={{ fontFamily: "PT Sans Narrow" }}>
            <strong>Email</strong>
          </label>
          <input
            color="#5e5e2b"
            placeholder="ola@nordmann.no"
            type="text"
            name="email"
          ></input>
        </div>

        <div className="formgroup">
          <label>
            <strong>Emne</strong>
          </label>
          <input color="#5e5e2b" type="text" name="emne"></input>
        </div>

        <div className="formgroup">
          <label>
            <strong>Det gjelder... </strong>
          </label>
          <select name="topic">
            <option value="kart">Kartløsningen</option>
            <option value="psykisk">Info om psykisk helse</option>
            <option value="poeng">Poengsystemet</option>
          </select>
        </div>
        <br></br>
        <div className="formgroup">
          <label>
            <strong>Melding</strong>
          </label>
          <textarea
            type="textarea"
            rows="6"
            placeholder="Din melding..."
            name="melding"
          ></textarea>
        </div>

        <input
          className="button"
          type="submit"
          value="Send inn"
          name=""
        ></input>
      </form>
    </section>
  )
}
