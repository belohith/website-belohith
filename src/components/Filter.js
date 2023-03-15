import React from 'react';

export default function Filter(props) {
  return (
    <div className="card-f" style={{borderBottom: `2px solid ${props.borderColor}`}}>
      <div className="media-f" style={{backgroundImage: `url(${props.image})`}} />
      <div>
        <h2 className="title-f">{props.title}</h2>
        <p className="desc-f">{props.description}</p>
        <a className="link-f" href={props.websiteLink} target="_blank">{props.proj}</a>
        <a className="link-f" href={props.websiteLink1} target="_blank">{props.proj1}</a>
        <p className="text-f">Published on: {props.date}</p>
        <p className="text-f" style={{
            backgroundColor: "#212121",
            padding: "5px",
            borderRadius: "10px",
            color: "#ffffff",
            cursor: "pointer",
            width: "fit-content",
            margin: "10px",
          }}>{props.plat}</p>
      </div>
    </div>
  );
}
