import classes from "./UIBasics.css";
import Developer from "./Developer";
import ARVR from "./ARVR";
import AI from "./AI";
import ML from "./ML";
import Crypto from "./Crypto";
import Games from "./Games";

function Tech() {
  return (
    <div>
      <div className="layout" style={{ backgroundColor: "#191919" }}>
        <p className="layout-title">Tech</p>
      </div>
      <Developer />
      <ARVR />
      <AI />
      <ML />
      <Crypto />
      <Games />
    </div>
  );
}

export default Tech;
