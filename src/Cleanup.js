import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Hello(){
  function byFn(){
    console.log("by");
  }
  function hiFn(){
    console.log("hi");
    return byFn;
  }
  useEffect(hiFn, [])
  return <h1>Hello</h1>
}

function Cleanup() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

// Button.propTypes = {
//   test : PropTypes.string.isRequired,
// }
export default Cleanup;
