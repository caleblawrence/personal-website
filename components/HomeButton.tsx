export default function HomeButton() {
  return (
    <>
      <h3 className="homeButton"
      >
        <a
          href="/"
          style={{ boxShadow: "none", textDecoration: "none", borderBottom: "3px solid rgb(249, 146, 146)" }}
        >
          Caleb Lawrence
        </a>
        <style jsx>{`
            .homeButton {
                color: black;
                margin-top: 15px;
                margin-bottom: 20px;
                font-size: 20px
            }

        `}</style>
      </h3>

    </>
  )
}
