import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <div className="overlay">
      <div className={classes.loader}></div>
    </div>
  );
};
export default Loading;
