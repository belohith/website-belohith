import React from "react";
import photo1 from "./images/oxweb.JPG";
import photo2 from "./images/sedemac.jpg";
import photo3 from "./images/lflw.jpg";
import photo4 from "./images/sedemac.jpg";
import photo5 from "./images/lflw.jpg";

const PhotoGrid = () => {
  const photos = [
    { url: photo1, alt: "photo 1" },
    { url: photo2, alt: "photo 2" },
    { url: photo3, alt: "photo 3" },
    { url: photo4, alt: "photo 4" },
    { url: photo5, alt: "photo 5" },
  ];

  return (
    <div>
      <p className="sp-desc">
        I have a passion for creating user-friendly and visually appealing
        digital products, from websites to mobile apps. I approach each design
        project with a focus on the user experience, always putting the end-user
        at the center of my design decisions. In my portfolio, you will find a
        range of UI/UX design projects that showcase my skills and
        problem-solving abilities. <br/><br/>From conducting user research to prototyping
        and testing, I strive to create digital products that are not only
        aesthetically pleasing but also easy to use and provide a seamless
        experience for the user. I believe that great design should not only
        look good, but it should also solve problems and improve the user's
        experience. My goal is to create digital products that are not only
        functional but also visually appealing and user-friendly.
      </p>
      <div className="photo-grid">
        <div className="top-row">
          {photos.slice(0, 5).map((photo) => (
            <img src={photo.url} alt={photo.alt} key={photo.alt}  />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;
