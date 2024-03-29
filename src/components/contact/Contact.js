import React from "react";
import { useRef } from "react";
import { Container, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

import "./Contact.css";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "3em",
  },
  form: {
    width: "100%",
  },
  formfield: {
    width: "100%",
    marginBottom: "2rem",
  },
}));

export const Contact = () => {
  const classes = useStyles();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_PRIVATE_KEY,
        "template_9jt9709",
        form.current,
        "tts0YbED_RxzVkXhT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    Swal.fire({
      position: "center",
      icon: "success",
      title: "You have sent an email!",
      showConfirmButton: false,
      timer: 1500,
    });
    e.target.reset();
  };

  return (
    <section id="contact">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="contact">
          <div className="_form_wrapper">
            <form ref={form} onSubmit={sendEmail} className={classes.form}>
              <TextField
                id="outlined-name-input"
                label="Name"
                type="text"
                size="small"
                variant="filled"
                name="name"
                className={classes.formfield}
                required
              />
              <TextField
                id="outlined-password-input"
                label="Email"
                type="email"
                size="small"
                variant="filled"
                name="email"
                className={classes.formfield}
                required
              />
              <TextField
                id="outlined-password-input"
                label="Message"
                type="textarea"
                size="small"
                multiline
                minRows={5}
                variant="filled"
                name="message"
                className={classes.formfield}
                required
              />
              <button type="submit" value="Send" className="submit-btn">
                <i className="fas fa-terminal"></i>
                <Typography component="span"> Send Message</Typography>
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
