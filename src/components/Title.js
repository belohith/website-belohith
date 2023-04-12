import classes from "./UIBasics.css";

import React, { useState, useEffect } from "react";

function Title() {
  const [color, setColor] = useState("white"); // set initial color to black

  useEffect(() => {
    const letters = document.querySelectorAll(".hover-color"); // select all elements with class "hover-color"

    // loop through each letter and add an event listener for hover
    letters.forEach((letter) => {
      letter.addEventListener("mouseover", () => {
        setColor(getRandomColor()); // set color to a random hex color on hover
      });
      letter.addEventListener("mouseout", () => {
        setColor("white"); // set color back to black when hover ends
      });
    });
  }, []); // only run once on mount

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <div>
      <p className="tag-font">{"<welcome>"}</p>
      <p
        className="title-font-1"
        
      >
        {/* split text into individual letters and add "hover-color" class */}
        {"lohith bollineni".split("").map((letter, index) => (
          <span key={index} className="hover-color" style={{ color }}>
            {letter}
          </span>
        ))}
      </p>
      <p className="tag-font" style={{opacity: "0.5", cursor: "pointer"}}>developer - designer - author - visual storyteller </p>
      <p className="tag-font" style={{opacity: "1", color: "#e5e110", cursor: "pointer"}}>currently looking for jobs related to Computer Science anywhere in the US - <a style={{textDecoration: "underline"}}>hire me!</a></p>
      <p className="tag-font">{"</welcome>"}</p>
    </div>
  );
}

export default Title;
