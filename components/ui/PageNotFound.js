import image from "../../assets/404.gif";
import Button from "./Button";
import classes from "./PageNotFound.module.css";

const NOT_FOUND_PAGE = () => {
  return (
    <div className={classes.container}>
      <img src={image.src} alt="some 404 image" className={classes.image}></img>
      <div className={classes.text}>
        <p>
          Sorry <br />
          we didn't find what you are looking for!!!
        </p>
      </div>
      <Button link="/" className={classes.btn}>
        Back To Home
      </Button>
    </div>
  );
};

export default NOT_FOUND_PAGE;
