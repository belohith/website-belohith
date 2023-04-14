import Book1 from "./Book1";
import ReadBlogs from "./ReadBlogs";
import classes from "./UIBasics.css";

function Author() {
  return (
    <div>
      <div className="layout" style={{ backgroundColor: "#191919" }}>
        <p id="author" className="layout-title" style={{ color: "#f9c593", opacity: 1 }}>
          Author
        </p>

        <Book1 />
        <ReadBlogs/>
      </div>
    </div>
  );
}

export default Author;
