import React from 'react';

export default function AboutText(props) {
  return (
    <div className="card-at" style={{borderBottom: `2px solid ${props.borderColor}`}}>
      {/* <div className="media-f" style={{backgroundImage: `url(${props.image})`}} /> */}
        <h2 className="title-at">{props.title}</h2>
      <div>
        <p className="desc-at">{props.text1}</p>
        <p className="desc-at">{props.text2}</p>
        <p className="desc-at">{props.text3}</p>
        <p className="desc-at">{props.text4}</p>
      </div>
    </div>
  );
}
