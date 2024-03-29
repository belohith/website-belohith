import classes from "./UIBasics.css";
import Developer from "./Developer";
import ARVR from "./ARVR";
import AI from "./AI";
import ML from "./ML";
import Crypto from "./Crypto";
import Games from "./Games";
import UIUX from "./UIUX";
import Sample from "./Sample";

function Tech() {
  return (
    <div>
      <div className="layout" style={{ backgroundColor: "#191919", opacity: 1, color: "#ffffff" }}>
        <p className="layout-title" style={{ opacity: 0.1, color: "#ffffff" }}>tech</p>
      </div>
      <Crypto />
      <Games />
      <p id='uiux-projects' className="layout-title" style={{ color: "#EE6E13", opacity: 1 }}>
          UI / UX Projects
        </p>
      <UIUX />
      <Developer />
      <ARVR />
    </div>
  );
}

export default Tech;
