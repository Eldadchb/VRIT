/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { Typography } from "@material-ui/core";

import "./Works.css";

const useStyles = makeStyles(() => ({
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
      title: `The future teaching tool is already here`,
      description: `A new fascinating teaching tool, 
                    a first-of-its-kind Virtual Reality Implant 
                    Training for zygomatic and standard implants 
                    surgical procedures`,
      alter: "Startup Project",
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <>
            <div className="project">
              <Typography variant="h5" component="h2">
                {project.description}
              </Typography>
            </div>
            <div className="project" key={project.id}>
              <div className="__img_wrapper">
                <div style={{ padding: "75% 0 0 0", position: "relative" }}>
                  <iframe
                    src="https://player.vimeo.com/video/818347617?h=edbb106db9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    title="Dental Virtual Reality - Zygomatic Implants Training 2022 - Copy"
                  ></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
              </div>

              <div className="project">
                <Typography variant="h5" component="h2">
                  <h3 className="title">{project.title}</h3>
                  <p className="description">
                    <ul>
                      <h3>
                        <li>Effective learning process</li>
                      </h3>
                      <h3>
                        <li>Shorter required training time</li>
                      </h3>
                      <h3>
                        <li>Hands on training experience with no risk</li>
                      </h3>
                      <h3>
                        <li>Realistic surgical setting</li>
                      </h3>
                    </ul>
                  </p>
                </Typography>
              </div>
            </div>
          </>
        ))}
      </Container>
    </section>
  );
};
