import classes from "./UIBasics.css";
import Developer from "./Developer";
import ARVR from "./ARVR";
import AI from "./AI";
import ML from "./ML";
import Crypto from "./Crypto";
import Games from "./Games";
import UIUX from "./UIUX";

function Tech() {
  return (
    <div>
      <div className="layout" style={{ backgroundColor: "#191919", opacity: 1, color: "#ffffff" }}>
        <p className="layout-title" style={{ opacity: 0.1, color: "#ffffff" }}>tech</p>
      </div>
      <Crypto />
      <Games />
      <Developer />
      <UIUX />
      <ARVR />
    </div>
  );
}

export default Tech;
