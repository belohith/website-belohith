import React from "react";
import DevProj from "./DevProj";
import photo1 from "./images/oxweb.JPG";
import photo2 from "./images/sedemac.jpg";
import photo3 from "./images/lflw.jpg";
import photo4 from "./images/sedemac.jpg";
import photo5 from "./images/lflw.jpg";

import cs1 from "./images/casestudy1.jpg";
import cs2 from "./images/casestudy2.jpg";

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
        at the center of my design decisions. Here, you will find a
        range of UI/UX design projects that showcase my skills and
        problem-solving abilities. <br/><br/>From conducting user research to prototyping
        and testing, I strive to create digital products that are not only
        aesthetically pleasing but also easy to use and provide a seamless
        experience for the user. I believe that great design should not only
        look good, but it should also solve problems and improve the user's
        experience. My goal is to create digital products that are not only
        functional but also visually appealing and user-friendly.
      </p>
      <DevProj
            image={cs2}
            title="Blue Canvas Class"
            titlecolor = "#ee6e13"
            borderBottom = "1px solid #ee6e13"
            date="21 Feb 2023"
            tech="Figma · Adobe Illustrator · Adobe XD · Miro"
            proj="Open Project"
            github="Behance"
            description="A UI UX Case Study of a responsive website that allows users to buy tickets for art classes and attend them."
            websiteLink="https://terminal-belohith.netlify.app/"
            githubLink="https://www.behance.net/gallery/167942779/Art-Class-Tickets-Responsive-Website-UI-UX-Case-Study/modules/947172847"
          />
      <DevProj
            image={cs1}
            title="Arnold Snack Shop"
            titlecolor = "#ee6e13"
            borderBottom = "1px solid #ee6e13"
            date="14 Feb 2023"
            tech="Figma · Adobe Illustrator · Miro"
            proj="Open Project"
            github="Behance"
            description="A UI UX Case Study of a mobile app that allows users to put an order for food at a snack shop, pay for it and pick them up."
            websiteLink="https://terminal-belohith.netlify.app/"
            githubLink="https://www.behance.net/gallery/167753483/Arnold-Snack-Shop-UI-UX-Case-Study-of-Mobile-App/modules/946091979"
          />
    </div>
  );
};

export default PhotoGrid;
