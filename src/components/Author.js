import Book1 from "./Book1";
import ReadBlogs from "./ReadBlogs";
import classes from "./UIBasics.css";

function Author() {
  return (
    <div className="layout" style={{ backgroundColor: "#f2d1b3" }}>
      <p className="layout-title">Author</p>
      <div>
        <Book1 />
        <ReadBlogs/>
      </div>
    </div>
  );
}

export default Author;
