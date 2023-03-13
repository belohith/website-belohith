import React from "react";
import photo1 from "./images/proton.jpg";
import photo2 from "./images/ox.png";
import photo3 from "./images/migo.jpg";
import photo4 from "./images/tbhlogo.png";
import photo5 from "./images/lfl.jpg";

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
        I believe that a great logo should be more than just a pretty image - it
        should tell a story and accurately reflect the brand it represents.
        That's why I approach each logo design project with a focus on
        understanding the brand, its values, and its target audience. I explore
        various design options, test and refine until I arrive at a final design
        that not only looks great but also accurately represents the brand. <br/><br/> I
        understand that a logo is the face of a brand and plays a crucial role
        in establishing its identity and attracting its target audience. That's
        why I strive to create logos that are not only visually appealing but
        also memorable, versatile, and timeless.
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
