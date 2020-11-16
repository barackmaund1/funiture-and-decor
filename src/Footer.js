import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css'

const Footer = () => {
    return (
      <div className="footer">
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6">
                <h5 className="title">Star furniture</h5>
                <p>
                  Here you can use rows and columns here to organize your footer
                  content.
                </p>
              </MDBCol>
              <MDBCol md="6">
                <h5 className="title">Talk To Us</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Instagram</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Twitter</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Whatsapp</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Facebook</a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.github.com/barackmaund1">Barack </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    );
}

export default Footer
