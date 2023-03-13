import Exper from "./Exper";

function AI() {
  return (
    <div>
      <div className="layout" style={{ backgroundColor: "#191919" }}>
        <p className="layout-title" style={{ color: "#458187", opacity: 1 }}>
          Experience
        </p>
        <div>
          <Exper
            title="Languages"
            desc="loremfsdvsd"
          />
        </div>
      </div>
    </div>
  );
}

export default AI;
