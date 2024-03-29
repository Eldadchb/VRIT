/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import "./Product.css";

const useStyles = makeStyles(() => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const Product = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: ``,
      description: `A new captivating educational technology:
      zygoma and standard implants training procedure in a virtual realistic 3D environment
      `,
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
                    src="https://player.vimeo.com/video/864406822?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    title="VIRT - VIRTUAL REALITY IMPLANT TRAINING"
                  ></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
              </div>

              <div className="project">
                <Typography variant="h5" component="h2">
                  <h2 className="title">{project.title}</h2>
                  <div className="description">
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
                      <h3>
                        <li>...</li>
                      </h3>
                    </ul>
                  </div>
                </Typography>
              </div>
            </div>
          </>
        ))}
      </Container>
    </section>
  );
};
