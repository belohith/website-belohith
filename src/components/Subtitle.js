import classes from "./UIBasics.css";

function Subtitle() {
  return (
    <div className="margin-bottom-5 ">
      <p
        className="tag-font"
        style={{ opacity: "0.75", cursor: "pointer", margin: "70px 0" }}
      >
        scroll down to see the featured highlights - few projects, articles and other stuff <br /> <br />
        to see more details and other projects, navigate through the tabs on the
        top <br/> <br/> <a style={{opacity: "0.3"}}> {"< Tech - software dev/web & mobile dev/data science/front-end, Creative - design/author/filming/podcast/youtube > "} </a>
      </p>
      {/* <p className='color-white' style={{cursor: 'pointer', opacity: 0.5}}>play intro · surprise · about me</p> */}
    </div>
  );
}

export default Subtitle;
