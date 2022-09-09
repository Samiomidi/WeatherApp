import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import classes from "./aboutUs.module.css";
function AboutUs() {
  return (
    <div className={classes.container}>
      <article className={classes.article}>
        <h1>What is EASY WEATHER</h1>
        <p className="card">
          This is just a demo application and has been prepared for educational
          purposes. NextJS framework and ReactJS has been used to design this
          application. The data required by the application is provided by the
          <a href="https://openweathermap.org" target="blank">
            {" "}
            Open Weather{" "}
          </a>
          free API.
        </p>
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

export default AboutUs;
