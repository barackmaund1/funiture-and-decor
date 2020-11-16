import React from "react";
import InfoIcon from "@material-ui/icons/Info";

import "../About.css";
import Typography from "@material-ui/core/Typography";

import CardContent from "@material-ui/core/CardContent";
import { Container } from "@material-ui/core";


const About1 = () => {
  return (
    <div>
      <Container className="about" id='about'>
        <div className="about__position">
          <div>
            <InfoIcon className="about__img" />
          </div>
          <div>
            <CardContent className="about__content">
              {" "}
              <Typography className="about__h1">What we Do</Typography>
              <Typography variant="body3" component="p" color="textSecondary">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia curae; Duis
                consequat nulla ac ex consequat, in efficitur arcu congue. Nam
                fermentum commodo egestas.
              </Typography>
            </CardContent>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About1;
