/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import "./Works.css";

import CTrip from "../../assets/projects/ctrip.png";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "CTrip",
      description: `CTrip is an app that helps users plan 
                    a short trip to a chosen destination 
                    based on their preferences. 
                    The app allows users to select the 
                    types of restaurants and attractions 
                    they would like to visit, and then 
                    generates a customized route for 
                    them to follow.`,
      alter: "Startup Project",
      image: `${CTrip}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="__img_wrapper">
              <img src={project.image} alt={project.alter} />
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={project.title} />
              </h3>
              <p className="description">{project.description}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
