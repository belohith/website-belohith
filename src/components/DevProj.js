import React from "react";

export default function MediaCard(props) {
  return (
    <div className="card-dp">
      <div
        className="media-dp"
        style={{ backgroundImage: `url(${props.image})` }}
      />
      <div>
        <h2 className="title-dp">{props.title}</h2>
        <p className="desc-dp">{props.description}</p>
        <a className="link-dp" href={props.websiteLink} target="_blank">
          {props.proj}
        </a>
        <a className="link-dp" href={props.githubLink} target="_blank">
          {props.github}
        </a>
        <p className="text-dp">Started on: {props.date}</p>
        <p
          className="text-dp"
          style={{
            backgroundColor: "#212121",
            padding: "5px",
            borderRadius: "10px",
            color: "#ffffff",
            cursor: "pointer",
            width: "fit-content",
            margin: "10px",
          }}
        >
          {props.tech}
        </p>
      </div>
    </div>
  );
}
