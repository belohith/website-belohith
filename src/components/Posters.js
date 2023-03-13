import React from "react";
import photo1 from "./images/khaleja.jpg";
import photo2 from "./images/breakingbad.jpg";
import photo3 from "./images/ff.jpg";
import photo4 from "./images/geetanjali.jpg";
import photo5 from "./images/rockstar.jpg";

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
        My journey in poster design began during my college days, where I was
        tasked with creating posters for various college events. Since then, I
        have been exploring different ways to bring my designs to life, from
        movie posters to TV show posters and more. Here you will
        find a few of my poster designs, showcasing my skills and
        creativity. <br/> <br/>I have a passion for minimal designs, where less is often
        more, and believe that a great poster should be able to tell a story and
        make a statement, even with limited elements. I have a strong
        understanding of design tools such as Photoshop, Canva, and Illustrator,
        and use these tools to create posters that are not only visually
        appealing but also memorable and impactful.
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
