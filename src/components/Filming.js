import Photography from "./Photography";

function Filming() {
  return (
    <div>
      <div className="layout" style={{ backgroundColor: "#191919" }}>
        <p className="layout-title" style={{ color: "#ee139a", opacity: 1 }}>
          Filming
        </p>
        <div style={{ alignItems: "center", display: "flex", marginBottom: '50px', marginTop: '50px',justifyContent: 'center'}}>
        <p className="box-white">Adobe Premiere Pro</p>
        <p className="box-white">Adobe After Effects</p>
        <p className="box-white">Adobe Animate</p>
        <p className="box-white">Cinema 4D</p>
        <p className="box-white">Blender</p>
        <p className="box-white">Final Cut Pro</p>
        </div>
        <Photography />
      </div>
    </div>
  );
}

export default Filming;
