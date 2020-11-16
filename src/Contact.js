import React from 'react'
import './Contact.css'
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Header from './Header';

export const Contact = () => {
    return (
      <div>
        <Header />
        <Container className="contact">
          <img src="https://bit.ly/3pB43Uo" className="about__img" />
          <span className="div-title">Contact us</span>
          <div className="contact-form">
            <div className="contact__info">
              <span>
                Contact us and we will get back to you within 24 hours.
              </span>
              <span>
                <i className="fas fa-map-marker-alt"></i>
                Kampala Uganda
              </span>
              <span>
                <i className="fas fa-mobile-alt"></i>
                +256 778 800 900
              </span>
              <span>
                <i className="far fa-envelope"></i>
                company.gmail.com
              </span>
            </div>

            <div id="sect2">
              <span>Contact</span>

              <input
                type="text"
                placeholder="email address"
                className="input-field"
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="comment"
              ></textarea>
              <button className="contact-btn">Send</button>
            </div>
          </div>
        </Container>
      </div>
    );
}
