import classes from "./UIBasics.css";

function Subtitle() {
  return (
    <div className='margin-bottom-5 '>
      <p className="medium font-size-1-2 color-white">
        hi, my name is lohith.
      </p>
      <p className='color-white' style={{cursor: 'pointer', opacity: 0.5}}>play intro · surprise · about me</p>
    </div>
  );
}

export default Subtitle;
