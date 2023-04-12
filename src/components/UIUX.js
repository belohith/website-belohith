import React, { useState } from "react";
import DevProj from "./DevProj";
import Modal from "./Modal";

import cs1 from "./images/casestudy1.jpg";
import cs2 from "./images/casestudy2.jpg";

import cs1_01 from "./images/cs1uiux/1.jpg";
import cs1_02 from "./images/cs1uiux/2.jpg";
import cs1_03 from "./images/cs1uiux/3.jpg";
import cs1_04 from "./images/cs1uiux/4.jpg";
import cs1_05 from "./images/cs1uiux/5.jpg";
import cs1_06 from "./images/cs1uiux/6.jpg";
import cs1_07 from "./images/cs1uiux/7.jpg";
import cs1_08 from "./images/cs1uiux/8.jpg";
import cs1_09 from "./images/cs1uiux/9.jpg";
import cs1_10 from "./images/cs1uiux/10.jpg";
import cs1_11 from "./images/cs1uiux/11.jpg";
import cs1_12 from "./images/cs1uiux/12.jpg";
import cs1_13 from "./images/cs1uiux/13.jpg";
import cs1_14 from "./images/cs1uiux/14.jpg";
import cs1_15 from "./images/cs1uiux/15.jpg";
import cs1_16 from "./images/cs1uiux/16.jpg";
import cs1_17 from "./images/cs1uiux/17.jpg";

import cs2_01 from "./images/cs2uiux/1.jpg";
import cs2_02 from "./images/cs2uiux/2.jpg";
import cs2_03 from "./images/cs2uiux/3.jpg";
import cs2_04 from "./images/cs2uiux/4.jpg";
import cs2_05 from "./images/cs2uiux/5.jpg";
import cs2_06 from "./images/cs2uiux/6.jpg";
import cs2_07 from "./images/cs2uiux/7.jpg";
import cs2_08 from "./images/cs2uiux/8.jpg";
import cs2_09 from "./images/cs2uiux/9.jpg";
import cs2_10 from "./images/cs2uiux/10.jpg";
import cs2_11 from "./images/cs2uiux/11.jpg";
import cs2_12 from "./images/cs2uiux/12.jpg";
import cs2_13 from "./images/cs2uiux/13.jpg";
import cs2_14 from "./images/cs2uiux/14.jpg";
import cs2_15 from "./images/cs2uiux/15.jpg";
import cs2_16 from "./images/cs2uiux/16.jpg";
import cs2_17 from "./images/cs2uiux/17.jpg";
import cs2_18 from "./images/cs2uiux/18.jpg";
import cs2_19 from "./images/cs2uiux/19.jpg";

import cs3_01 from "./images/cs3uiux/1.jpg";
import cs3_02 from "./images/cs3uiux/2.jpg";
import cs3_03 from "./images/cs3uiux/3.jpg";
import cs3_04 from "./images/cs3uiux/4.jpg";
import cs3_05 from "./images/cs3uiux/5.jpg";
import cs3_06 from "./images/cs3uiux/6.jpg";
import cs3_07 from "./images/cs3uiux/7.jpg";
import cs3_08 from "./images/cs3uiux/8.jpg";
import cs3_09 from "./images/cs3uiux/9.jpg";
import cs3_10 from "./images/cs3uiux/10.jpg";
import cs3_11 from "./images/cs3uiux/11.jpg";
import cs3_12 from "./images/cs3uiux/12.jpg";
import cs3_13 from "./images/cs3uiux/13.jpg";
import cs3_14 from "./images/cs3uiux/14.jpg";
import cs3_15 from "./images/cs3uiux/15.jpg";
import cs3_16 from "./images/cs3uiux/16.jpg";
import cs3_17 from "./images/cs3uiux/17.jpg";
import cs3_18 from "./images/cs3uiux/18.jpg";


const PhotoGrid = () => {
  const mc1 = (
    <>
      <h2>
        Arnold Snack Shop: A mobile app UI UX case study for a beack side snack
        shop
      </h2>
      <h4>Tools used: Figma, Adobe Illustrator, Miro</h4>
      <div className="centerimages">
      <p className="width50">
        I built this case study while doing the "Google UX Design Professional
        Certification". The duration of the case study is around 8 weeks from
        Feb 2023 to Mar 2023.{" "}
      </p>
      <p className="width50">
        You can scroll down to read the complete case study here. You can also
        view the project on other platforms: <a className="link-dp" href="https://www.behance.net/gallery/167753483/Arnold-Snack-Shop-UI-UX-Case-Study-of-Mobile-App" target="_blank">Behance</a>,{" "}
        <a className="link-dp" href="" target="_blank">Figma: Case Study Files</a>, <a className="link-dp" href="" target="_blank">Figma: Lo-Fi Prototype</a>,{" "}
        <a className="link-dp" href="" target="_blank">Figma: Hi-Fi Prototype</a>, <a className="link-dp" href="https://github.com/belohith/ui-ux-projects/tree/main/1%20Arnold%20Snack%20Shop" target="_blank">GitHub</a>
      </p>
      </div>
      <div className="centerimages">
        <img src={cs1_01} alt="Image" width="700" className="zerogap" />
        <img src={cs1_02} alt="Image" width="700" className="zerogap" />
        <img src={cs1_03} alt="Image" width="700" className="zerogap" />
        <img src={cs1_04} alt="Image" width="700" className="zerogap" />
        <img src={cs1_05} alt="Image" width="700" className="zerogap" />
        <img src={cs1_06} alt="Image" width="700" className="zerogap" />
        <img src={cs1_07} alt="Image" width="700" className="zerogap" />
        <img src={cs1_08} alt="Image" width="700" className="zerogap" />
        <img src={cs1_09} alt="Image" width="700" className="zerogap" />
        <img src={cs1_10} alt="Image" width="700" className="zerogap" />
        <img src={cs1_11} alt="Image" width="700" className="zerogap" />
        <img src={cs1_12} alt="Image" width="700" className="zerogap" />
        <img src={cs1_13} alt="Image" width="700" className="zerogap" />
        <img src={cs1_14} alt="Image" width="700" className="zerogap" />
        <img src={cs1_15} alt="Image" width="700" className="zerogap" />
        <img src={cs1_16} alt="Image" width="700" className="zerogap" />
        <img src={cs1_17} alt="Image" width="700" className="zerogap" />
      </div>
    </>
  );

  const mc2 = (
    <>
      <h2>
      Blue Canvas Class: A responsive website of a ticket purchase flow for art classes
      </h2>
      <h4>Tools used: Figma, Adobe Illustrator, Miro, Adobe XD</h4>
      <div className="centerimages">
      <p className="width50">
        I built this case study while doing the "Google UX Design Professional
        Certification". The duration of the case study is around 8 weeks from
        Feb 2023 to Apr 2023.{" "}
      </p>
      <p className="width50">
        You can scroll down to read the complete case study here. You can also
        view the project on other platforms: <a className="link-dp" href="https://www.behance.net/gallery/167942779/Art-Class-Tickets-Responsive-Website-UI-UX-Case-Study" target="_blank">Behance</a>,{" "}
        <a className="link-dp" href="" target="_blank">Figma: Case Study Files</a>, <a className="link-dp" href="" target="_blank">Figma: Lo-Fi Prototype</a>,{" "}
        <a className="link-dp" href="" target="_blank">Figma: Hi-Fi Prototype</a>, <a className="link-dp" href="https://github.com/belohith/ui-ux-projects/tree/main/2%20Blue%20Canvas%20Class" target="_blank">GitHub</a>
      </p>
      </div>
      <div className="centerimages">
        <img src={cs2_01} alt="Image" width="700" className="zerogap" />
        <img src={cs2_02} alt="Image" width="700" className="zerogap" />
        <img src={cs2_03} alt="Image" width="700" className="zerogap" />
        <img src={cs2_04} alt="Image" width="700" className="zerogap" />
        <img src={cs2_05} alt="Image" width="700" className="zerogap" />
        <img src={cs2_06} alt="Image" width="700" className="zerogap" />
        <img src={cs2_07} alt="Image" width="700" className="zerogap" />
        <img src={cs2_08} alt="Image" width="700" className="zerogap" />
        <img src={cs2_09} alt="Image" width="700" className="zerogap" />
        <img src={cs2_10} alt="Image" width="700" className="zerogap" />
        <img src={cs2_11} alt="Image" width="700" className="zerogap" />
        <img src={cs2_12} alt="Image" width="700" className="zerogap" />
        <img src={cs2_13} alt="Image" width="700" className="zerogap" />
        <img src={cs2_14} alt="Image" width="700" className="zerogap" />
        <img src={cs2_15} alt="Image" width="700" className="zerogap" />
        <img src={cs2_16} alt="Image" width="700" className="zerogap" />
        <img src={cs2_17} alt="Image" width="700" className="zerogap" />
        <img src={cs2_18} alt="Image" width="700" className="zerogap" />
        <img src={cs2_19} alt="Image" width="700" className="zerogap" />
      </div>
    </>
  );

  const mc3 = (
    <>
      <h2>
        Community Cooks Connect: A mobile responsive website for locating soup kitchens (free meal providers) and make donations
      </h2>
      <h4>Tools used: Figma, Adobe Illustrator, Miro</h4>
      <div className="centerimages">
      <p className="width50">
        I built this case study while doing the "Google UX Design Professional
        Certification". The duration of the case study is around 8 weeks from
        Feb 2023 to Apr 2023.{" "}
      </p>
      <p className="width50">
        You can scroll down to read the complete case study here. You can also
        view the project on other platforms: <a className="link-dp" href="https://www.behance.net/gallery/167975041/Soup-Kitchen-Location-Planner-Website-UI-UX-Case-Study" target="_blank">Behance</a>,{" "}
        <a className="link-dp" href="https://www.figma.com/file/8p1jchrqzQP3B0hrH85sg3/Untitled?node-id=5%253A849&t=xSedTqBfBfjS2PNl-1" target="_blank">Figma: Case Study Files</a>, <a className="link-dp" href="https://www.figma.com/file/8p1jchrqzQP3B0hrH85sg3/Untitled?node-id=5%253A849&t=xSedTqBfBfjS2PNl-1" target="_blank">Figma: Lo-Fi Prototype</a>,{" "}
        <a className="link-dp" href="https://www.figma.com/file/8p1jchrqzQP3B0hrH85sg3/Untitled?node-id=5%253A849&t=xSedTqBfBfjS2PNl-1" target="_blank">Figma: Hi-Fi Prototype</a>, <a className="link-dp" href="https://github.com/belohith/ui-ux-projects/tree/main/3%20Community%20Cooks%20Connect" target="_blank">GitHub</a>
      </p>
      </div>
      <div className="centerimages">
        <img src={cs3_01} alt="Image" width="700" className="zerogap" />
<img src={cs3_02} alt="Image" width="700" className="zerogap" />
<img src={cs3_03} alt="Image" width="700" className="zerogap" />
<img src={cs3_04} alt="Image" width="700" className="zerogap" />
<img src={cs3_05} alt="Image" width="700" className="zerogap" />
<img src={cs3_06} alt="Image" width="700" className="zerogap" />
<img src={cs3_07} alt="Image" width="700" className="zerogap" />
<img src={cs3_08} alt="Image" width="700" className="zerogap" />
<img src={cs3_09} alt="Image" width="700" className="zerogap" />
<img src={cs3_10} alt="Image" width="700" className="zerogap" />
<img src={cs3_11} alt="Image" width="700" className="zerogap" />
<img src={cs3_12} alt="Image" width="700" className="zerogap" />
<img src={cs3_13} alt="Image" width="700" className="zerogap" />
<img src={cs3_14} alt="Image" width="700" className="zerogap" />
<img src={cs3_15} alt="Image" width="700" className="zerogap" />
<img src={cs3_16} alt="Image" width="700" className="zerogap" />
<img src={cs3_17} alt="Image" width="700" className="zerogap" />
<img src={cs3_18} alt="Image" width="700" className="zerogap" />

      </div>
    </>
  );

  return (
    <div>
      <p className="sp-desc">
        I have a passion for creating user-friendly and visually appealing
        digital products, from websites to mobile apps. I approach each design
        project with a focus on the user experience, always putting the end-user
        at the center of my design decisions. Here, you will find a range of
        UI/UX design projects that showcase my skills and problem-solving
        abilities. <br />
        <br />
        From conducting user research to prototyping and testing, I strive to
        create digital products that are not only aesthetically pleasing but
        also easy to use and provide a seamless experience for the user. I
        believe that great design should not only look good, but it should also
        solve problems and improve the user's experience. My goal is to create
        digital products that are not only functional but also visually
        appealing and user-friendly.
      </p>
      
      <DevProj
        image={cs3_01}
        title="Community Cooks Connect"
        titlecolor="#ee6e13"
        borderBottom="1px solid #ee6e13"
        date="28 Feb 2023"
        tech="Figma · Adobe Illustrator · Adobe XD · Miro"
        modalcontent= {mc3}
        github="Behance"
        modal="Open Project"
        description="A UI UX Case Study of a responsive website that allows users to locate soup kitchens, volunteer and make donations."
        
        githubLink="https://www.behance.net/gallery/167975041/Soup-Kitchen-Location-Planner-Website-UI-UX-Case-Study"
      />
      <DevProj
        image={cs2_01}
        title="Blue Canvas Class"
        titlecolor="#ee6e13"
        borderBottom="1px solid #ee6e13"
        date="21 Feb 2023"
        tech="Figma · Adobe Illustrator · Adobe XD · Miro"
        modalcontent= {mc2}
        github="Behance"
        modal="Open Project"
        description="A UI UX Case Study of a responsive website that allows users to buy tickets for art classes and attend them."
        
        githubLink="https://www.behance.net/gallery/167942779/Art-Class-Tickets-Responsive-Website-UI-UX-Case-Study"
      />
      <DevProj
        image={cs1_01}
        title="Arnold Snack Shop"
        titlecolor="#ee6e13"
        borderBottom="1px solid #ee6e13"
        date="14 Feb 2023"
        tech="Figma · Adobe Illustrator · Miro"
        modalcontent={mc1}
        github="Behance"
        modal="Open Project"
        description="A UI UX Case Study of a mobile app that allows users to put an order for food at a snack shop, pay for it and pick them up."

        githubLink="https://www.behance.net/gallery/167753483/Arnold-Snack-Shop-UI-UX-Case-Study-of-Mobile-App"
      />
    </div>
  );
};

export default PhotoGrid;
