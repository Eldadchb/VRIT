import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import "./About.css";

import profile from "../../assets/profile-picture/profile.png";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const aboutmeTitle = "About";
  const aboutme = `Dr. Dov Kischinovsky is the founder of VRIT. 
  He is a Maxillo-Facial Surgeon with 35 years of experience in Implantology.
  Has been performing Zygomatic implants for 25 years.
  Is giving worldwide lectures and workshops in Zygomatic Implants and Guided Implant Surgery.`;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div
            className="_img"
            style={{
              background: "url(" + profile + ")",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="_content_wrapper">
            <Typography component="h2" variant="h5">
              <TextDecrypt text={`${aboutmeTitle}`} />
            </Typography>
            <p className="aboutme">{aboutme}</p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component="span"> Send us a message.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
