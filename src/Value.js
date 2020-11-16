
import React from 'react'
import Header from "./Header";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import './Value.css'
import Footer from './Footer';

const Value = () => {
    return (
      <div>
        <Header />
        <Container className="about">
          <img src="https://bit.ly/35zNiRr" className="about__img" />
          <CardContent className="about__content">
            {" "}
            <Typography className="about__h1">Our value</Typography>
            <Typography variant="body2" component="p" color="textSecondary">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Duis
              consequat nulla ac ex consequat, in efficitur arcu congue. Nam
              fermentum commodo egestas.
            </Typography>
          </CardContent>
        </Container>
        <Footer/>
      </div>
    );
}

export default Value



