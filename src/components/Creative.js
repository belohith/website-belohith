import Author from "./Author";
import Design from "./Design";
import Editing from "./Editing";
import Podcast from "./Podcast";
import Filming from "./Filming";
import Youtube from "./Youtube";
import classes from "./UIBasics.css";

function Creative() {
  return (
    <div className="width-100">
      <div className="layout" style={{ backgroundColor: "#191919" }}>
        <p className="layout-title">Creative</p>
        
      </div>
      <Author />
      <Design />
      <Podcast />
      <Filming />
      <Youtube />
    </div>
  );
}

export default Creative;
