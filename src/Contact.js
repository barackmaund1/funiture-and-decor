import React from 'react'
import './Contact.css'
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Header from './Header';
import Footer from './Footer';

export const Contact = () => {
    return (
      <div>
        <Header />
        <Container className="contact">
          <div className='contact__position'>
            <div>
              {" "}
              <img src="https://bit.ly/3pB43Uo" className="contact__img" />
            </div>
            <div className='contact__us'>
              <span className="div-title">Contact us</span>
              <div className="contact-form">
                <div className="contact__form">
                  <span>
                    Contact us and we will get back to you within 24 hours.
                  </span>
                  <span>
                    <i className="fas fa-map-marker-alt"></i>
                    Nairobi kenya
                  </span>
                  <span>
                    <i className="fas fa-mobile-alt"></i>
                    +254 778 800 900
                  </span>
                  <span>
                    <i className="far fa-envelope"></i>
                    company.gmail.com
                  </span>
                </div>

                <div className="contact__form2">
                  <span className='contact__h2'>Contact</span>

                  <input
                    type="text"
                    placeholder="email address"
                    className="input-field"
                  />
                  <textarea
                    name=""
                    id=""
                    cols="20"
                    rows="10"
                    placeholder="comment"
                  ></textarea>
                  <button className="contact-btn">Send</button>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    );
}
export default Contact;
