import classes from "./UIBasics.css";
import TheBook from "./TheBook";
import BuyTheBook from "./BuyTheBook";
import Reviews from "./Reviews";
import AboutBook from "./AboutBook";
function Book1() {
  function showTab(e) {
    if (e.target.id === "1") {
      document.getElementById("tab1").style.display = "block";
      document.getElementById("tab2").style.display = "none";
      document.getElementById("tab3").style.display = "none";
      document.getElementById("tab4").style.display = "none";
    } else if (e.target.id === "2") {
      document.getElementById("tab2").style.display = "block";
      document.getElementById("tab1").style.display = "none";
      document.getElementById("tab3").style.display = "none";
      document.getElementById("tab4").style.display = "none";
    } else if (e.target.id === "3") {
      document.getElementById("tab3").style.display = "block";
      document.getElementById("tab2").style.display = "none";
      document.getElementById("tab1").style.display = "none";
      document.getElementById("tab4").style.display = "none";
    } else if (e.target.id === "4") {
      document.getElementById("tab4").style.display = "block";
      document.getElementById("tab2").style.display = "none";
      document.getElementById("tab3").style.display = "none";
      document.getElementById("tab1").style.display = "none";
    }
  }

  return (
    <div>
      <div className="">
      <p className="book-title">
            Waiting in Bangalore <a className="book-title-part">Part 1</a>
          </p>
        <div className="flex-row align-center">
          
          <p className="book-option" onClick={showTab} id="1">
            The Book
          </p>
          <p className="book-option" onClick={showTab} id="2">
            Buy the Book
          </p>
          <p className="book-option" onClick={showTab} id="4">
            About
          </p>
        </div>
        <div className="align-center">
          <div>
            <p id="tab1" style={{ display: "block" }}>
              <TheBook />
            </p>
          </div>
          <div>
            <p id="tab2" style={{ display: "none" }}>
              <BuyTheBook />
            </p>
          </div>
          <div>
            <p id="tab3" style={{ display: "none" }}>
              <Reviews />
            </p>
          </div>
          <div>
            <p id="tab4" style={{ display: "none" }}>
              <AboutBook />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book1;
