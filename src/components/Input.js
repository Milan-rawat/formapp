import classes from "./Input.module.css";

function Input(props) {
  return (
    <div className={classes["form-group"]}>
      <label className={classes["form-label"]} htmlFor="input">
        {props.label}
      </label>
      <input
        className={classes["form-control"]}
        type={props.type}
        id="input"
        placeholder={props.placeholder}
        required={props.required}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      />
    </div>
  );
}

export default Input;
