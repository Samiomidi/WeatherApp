import React from "react";
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import classes from "./contact.module.css";
function Contact() {
  return (
    <div className={classes.container}>
      <article className={classes.article}>
        <h1>Who made this</h1>
        <p className="card">
          Designed by Sami Omidi
          <span className={classes.social}>
            <a href="https://wa.me/+989101449330" target="blank">
              <AiOutlineWhatsApp className={classes.whatsapp} />
            </a>
            <a href="https://linkedin.com/in/samiomidi" target="blank">
              <AiFillLinkedin className={classes.linkedin} />
            </a>
            <a href="mailto:samiomidi@hotmail.com" target="blank">
              <AiOutlineMail className={classes.email} />
            </a>
            <a href="https://github.com/samiomidi" target="blank">
              <AiOutlineGithub className={classes.github} />
            </a>
          </span>
        </p>
      </article>
    </div>
  );
}

export default Contact;
