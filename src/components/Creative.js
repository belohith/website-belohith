import Author from "./Author";
import Design from "./Design";
import CreativeBrief from "./CreativeBrief";
import Editing from "./Editing";
import Podcast from "./Podcast";
import Filming from "./Filming";
import Youtube from "./Youtube";
import classes from "./UIBasics.css";

function Creative() {
  return (
    <div className="width-100">
      <div>
        <div
          className="layout"
          style={{ backgroundColor: "#191919", opacity: 1, color: "#ffffff" }}
        >
          <p
            className="layout-title"
            style={{ opacity: 0.1, color: "#ffffff" }}
          >
            creative
          </p>
        </div>
        <CreativeBrief/>
        <Author/>
        <Design/>
        <Filming/>
        <Podcast />
        <Youtube />
      </div>
    </div>
  );
}

export default Creative;
