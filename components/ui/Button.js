import Link from "next/link";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <Link href={props.link}>
      <a
        className={`${classes.btn} ${props.className}`}
        onClick={props.onClick}
      >
        {props.children}
      </a>
    </Link>
  );
};
export default Button;
