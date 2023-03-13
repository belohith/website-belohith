import React from "react";
import photo1 from "./images/shivangi.jpg";
import photo2 from "./images/meha.jpg";
import photo3 from "./images/manasi.jpg";
import photo4 from "./images/sangeetha.jpg";
import photo5 from "./images/deepthi.jpg";

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
        I discovered my love for digital portraits in the summer of 2020 during
        the pandemic. I taught myself how to use Adobe Illustrator and have been
        honing my skills ever since. Below you can see few portraits that I have
        created using various tools in Adobe Illustrator, from basic shapes and
        lines to more advanced techniques such as shading and highlighting.
        While my portraits may not be considered unique in terms of style, I
        strive to create pieces that are well-crafted and visually appealing. My
        goal is to capture the likeness of each subject and create a polished,
        professional piece of digital art. I am always seeking to improve my
        skills and explore new techniques in the world of digital art. <br />{" "}
        <br />I am dedicated to my craft and continue to learn and grow as an
        artist. Mostly, I prefer to keep my portraits minimal with loud colors
        often in an attempt to make it visually appealing. Initially I used to
        draw using the mousepad for the outlines and detailing. But over time, I
        bought myself a tablet with a stylus that enables me to give more
        attention to each detail especially with respect to curves.
        <br />
        <br /> To view more of these portraits, you can visit this dedicated Instagram page{" "}
        <a
          href="https://www.instagram.com/belohith2/"
          target="_blank"
          rel="noopener noreferrer"
          className="ytlink"
        >
           @belohith2 
        </a>{" "}
        .You can also view my{" "}
        <a
          href="https://www.behance.net/belohith"
          target="_blank"
          rel="noopener noreferrer"
          className="ytlink"
        >
          Behance
        </a>{" "}
        page for more portraits.
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
