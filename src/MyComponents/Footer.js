import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  const style = {
    position: "relative",
    width: "100%",
    bottom: "0",
  }

  return (
    <footer style={style}
      className="text-center text-lg-start text-white bg-dark">
      {/* <!-- Grid container --> */}
      <div className="container p-4 pb-0">
        {/* <!-- Section: Links --> */}
        <section className="">
          {/* <!--Grid row--> */}
          <div className="row">
            {/* <!-- Grid column --> */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 fw-bold">
                Notes Web-App
              </h6>
              <p>
                A simple notes web-app developed by Anurag Pathak, for learning purpose.
                It is based on Reactjs.
              </p>
            </div>
            {/* <!-- Grid column --> */}

            <hr className="w-100 clearfix d-md-none" />

            {/* <!-- Grid column --> */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 fw-bold">Contact</h6>

              <p><FontAwesomeIcon icon={"envelope"} /> anuragpathak911@gmail.com</p>

              <p><FontAwesomeIcon icon="bug" />&nbsp;
                <a href="https://github.com/AnuragThePathak/notes-react-app/issues/new/choose"
                  target="_blank" rel="noreferrer" className="text-white">
                  Report an issue</a></p>

              <p><FontAwesomeIcon icon="file-code" />&nbsp;
                <a href="https://github.com/AnuragThePathak/notes-react-app"
                  target="_blank" rel="noreferrer" className="text-white">
                  Improve this site</a></p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 fw-bold">Connect with me
              </h6>

              {/* <!-- Twitter --> */}
              <a className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#55acee" }}
                href="https://twitter.com/AnuragThePathak" target="_blank"
                rel="noreferrer" role="button">
                <FontAwesomeIcon icon={["fab", "twitter"]} /></a>

              {/* <!-- Github --> */}
              <a className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#333333" }}
                href="https://github.com/AnuragThePathak" target="_blank"
                rel="noreferrer" role="button">
                <FontAwesomeIcon icon={["fab", "github"]} /></a>

              {/* <!-- Linkedin --> */}
              <a className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#0082ca" }}
                href="https://linkedin.com/in/AnuragThePathak" target="_blank"
                rel="noreferrer" role="button">
                <FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
            </div>
          </div>
          {/* <!--Grid row--> */}
        </section>
        {/* <!-- Section: Links --> */}
      </div>
      {/* <!-- Grid container --> */}

      {/* <!-- Copyright --> */}
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2021 Copyright: Anurag Pathak
        {/* <a classNameName="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a> */}
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  )
}