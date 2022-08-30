
import classes from "./littleIconMainCondition.module.css";
const LittleIconMainCondition = (props) => {
  return (
    <div className={`${classes.spacedElements}`}>
      <span className={`${classes.lable} ${"lable_area"}`}>
        {props.icon}
        <div className={classes.value}>{`${props.value} ${props.unit}`}</div>
      </span>
      <span className={"hover_detail"}>{props.title}</span>
    </div>
  );
};
export default LittleIconMainCondition;
