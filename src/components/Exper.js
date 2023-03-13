import React from 'react';

export default function Exper(props) {
  return (
    <div className="card-ex" style={{borderBottom: `2px solid ${props.borderColor}`}}>
      {/* <div className="media-f" style={{backgroundImage: `url(${props.image})`}} /> */}
        <h2 className="title-ex">{props.title}</h2>
      <div>
        <p className="desc-ex">{props.desc}</p>
        <p className="text-ex">{props.date}</p>
        <p className="text-ex">{props.tech}</p>
      </div>
    </div>
  );
}
