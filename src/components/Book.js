import React from "react";

const Book = (props) => {
  return (
    <div className="book-container">
      <div className="book-info-container">
        <h2 style={{ color: "white" }}>{props.title}</h2>
        <p style={{ color: "white" }}>{props.description}</p>
        <div className="book-links-container">
          <a className="ytlink m-5" href={props.link1} target="_blank">
            {props.linkn1}
          </a>
          <a className="ytlink m-5" href={props.link2} target="_blank">
          {props.linkn2}
          </a>
          <a className="ytlink m-5" href={props.link3} target="_blank">
          {props.linkn3}
          </a>
          <a className="ytlink m-5" href={props.link4} target="_blank">
          {props.linkn4}
          </a>
          <a className="ytlink m-5" href={props.link5} target="_blank">
          {props.linkn5}
          </a>
          <a className="ytlink m-5" href={props.link6} target="_blank">
          {props.linkn6}
          </a>
        </div>
      </div>
      <div className="book-image-container">
      <iframe src='https://my.spline.design/lowpolybookcopy-864a15c8adf0f38e5a04ac3c61d9d0de/' frameborder='0' width='900px' height='800px'></iframe>
      </div>
    </div>
  );
};

export default Book;
