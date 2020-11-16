import React from 'react'
import InfoIcon from "@material-ui/icons/Info";

import './About.css' 
import Typography from "@material-ui/core/Typography";

import CardContent from "@material-ui/core/CardContent";
import { Container } from '@material-ui/core';
import Header from './Header';

const About = () => {
    return (
        <div>
        <Header/>
        <Container className="about">
         <InfoIcon className='about__img'/>
        <CardContent className='about__content'>
          {" "}
          <Typography className='about__h1'>What we Do</Typography>
          <Typography variant="body2" component="p" color="textSecondary">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Duis consequat nulla
            ac ex consequat, in efficitur arcu congue. Nam fermentum commodo
            egestas.
          </Typography>
        </CardContent>
      </Container>
      </div>
    );
}

export default About
