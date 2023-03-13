import DigitalPortraits from "./DigitalPortaits";
import Logos from "./Logos";
import Posters from "./Posters";
import Typography from "./Typography";
import UIUX from "./UIUX";

function Design() {
  return (
    <div>
      <div className="layout" style={{ backgroundColor: "#191919" }}>
        <p className="layout-title" style={{ color: "#ee6e13", opacity: 1 }}>
          Design
        </p>
        <div style={{ alignItems: "center", display: "flex", marginBottom: '50px', marginTop: '50px',justifyContent: 'center'}}>
        <p className="box-white">Adobe Illustrator</p>
        <p className="box-white">Adobe Photoshop</p>
        <p className="box-white">Adobe InDesign</p>
        <p className="box-white">Adobe XD</p>
        <p className="box-white">Figma</p>
        <p className="box-white">Canva</p>
        </div>
        <h2 style={{color: "white"}}>Digital Portraits</h2>
        <DigitalPortraits/>
        <h2 style={{color: "white"}}>UI & UX</h2>
        <UIUX/>
        <h2 style={{color: "white"}}>Logos</h2>
        <Logos/>
        <h2 style={{color: "white"}}>Posters</h2>
        <Posters/>
        <h2 style={{color: "white"}}>Typography</h2>
        <Typography/>
      </div>
    </div>
  );
}

export default Design;

