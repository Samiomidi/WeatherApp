import classes from "./Loading.module.css";
import Backdrop from "./Backdrop";
const Loading = () => {
  return (
    <Backdrop>
      <div className={classes.loader} />
    </Backdrop>
  );
};
export default Loading;
