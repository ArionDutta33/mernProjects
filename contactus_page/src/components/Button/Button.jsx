import styles from "./Button.module.css";
const Button = (props) => {
  console.log(props);
  return (
    <button
      onClick={props.onViaCall}
      className={props.isOutlined ? styles.outline_btn : styles.primary_button}
    >
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;
