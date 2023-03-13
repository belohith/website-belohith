import React from "react";
import photo1 from "./images/photo1.jpg";
import photo2 from "./images/photo2.jpg";
import photo3 from "./images/photo3.jpg";
import photo4 from "./images/photo4.jpg";
import photo5 from "./images/photo5.jpg";
import photo6 from "./images/photo6.jpg";
import photo7 from "./images/photo7.jpg";
import photo8 from "./images/photo8.jpg";
import photo9 from "./images/photo9.jpg";
import photo10 from "./images/photo10.jpg";

const PhotoGrid = () => {
  const photos = [
    { url: photo1, alt: "photo 1" },
    { url: photo2, alt: "photo 2" },
    { url: photo3, alt: "photo 3" },
    { url: photo4, alt: "photo 4" },
    { url: photo5, alt: "photo 5" },
    { url: photo6, alt: "photo 6" },
    { url: photo7, alt: "photo 7" },
    { url: photo8, alt: "photo 8" },
    { url: photo9, alt: "photo 9" },
    { url: photo10, alt: "photo 10" },
  ];

  return (
    <div>
      <p className="sp-desc">
        Ever since the smart phone era began, everyone has been trying to
        showcase their photography skills, but for me, it was more than just
        clicking pictures. It was a journey of discovering my love for
        photography and the techniques that go into creating stunning images.
        Here, you will find a few of my favorite portraits, landscapes, and
        travel photography. <br />
        <br />I have a special love for taking close-up shots of people,
        capturing their essence and individuality. When people aren't available,
        I find joy in composing and capturing the beauty of my surroundings,
        often in an aesthetic and visually appealing manner. I believe that a great photograph has the power to transform a
        mundane scene into a work of art. Through my lens, I aim to showcase the
        world in its best light and preserve memories for a lifetime.
      </p>
      <div className="photo-grid">
        <div className="top-row">
          {photos.slice(0, 5).map((photo) => (
            <img src={photo.url} alt={photo.alt} key={photo.alt} />
          ))}
        </div>
        <div className="bottom-row">
          {photos.slice(5).map((photo) => (
            <img src={photo.url} alt={photo.alt} key={photo.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;
