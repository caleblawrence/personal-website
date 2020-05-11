export default function HomeButton() {
  return (
    <>
      <h3 className="homeButton"
      >
        <a
          href="/"
          style={{ boxShadow: "none", textDecoration: "none" }}
        >
          Caleb Lawrence
        </a>
        <style jsx>{`
            .homeButton {
                color: #f99292;
                margin-top: 15px;
                margin-bottom: 20px;
                font-weight: 800;
                font-size: 20px
            }

        `}</style>
      </h3>

    </>
  )
}
