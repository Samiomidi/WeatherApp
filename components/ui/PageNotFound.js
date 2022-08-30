import image from "../../assets/404.gif";
import Button from "./Button";
import classes from "./PageNotFound.module.css";
import Image from "next/Image";
const NOT_FOUND_PAGE = (props) => {
  return (
    <div className={classes.container}>
      <Image
        src={image.src}
        alt="some 404 image"
        className={classes.image}
        width={100}
        height={100}
      ></Image>
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
