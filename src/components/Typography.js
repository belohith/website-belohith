import React from "react";
import photo1 from "./images/t1.png";
import photo2 from "./images/t2.png";
import photo3 from "./images/t3.png";
import photo4 from "./images/t4.png";
import photo5 from "./images/t5.png";

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
        Typography is an essential aspect of design, and I believe that great
        typography has the power to make a design come to life. That's why I
        approach each typography project with a focus on creating unique and
        impactful typefaces that accurately convey the intended message. <br/> <br/> I have a strong understanding of
        the importance of typography in design and know how to use typefaces to
        create visual interest and convey a message. I have a passion for
        exploring different font styles and combinations, and I am always
        experimenting with new techniques to create typography designs that are
        not only visually appealing but also memorable and impactful.
      </p>
      <div className="photo-grid">
        <div className="top-row">
          {photos.slice(0, 5).map((photo) => (
            <img src={photo.url} alt={photo.alt} key={photo.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;
