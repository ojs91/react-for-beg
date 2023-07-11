import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({btnTxt}) {
  return (
    <div>
      <button className={styles.btn}>{btnTxt}</button>
    </div>
  );
}

// Button.propTypes = {
//   test : PropTypes.string.isRequired,
// }
export default Button;
