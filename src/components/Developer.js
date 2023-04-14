import DevProj from "./DevProj";
import Krakkar from "./images/krakkar.JPG";
import Stip from "./images/stip.JPG";
import Cyber from "./images/cyber.JPG";
import ML from "./images/ml.JPG";
import SpamC from "./images/spamc.JPG";
import TBH from "./images/tbh.jpeg";
import AmS from "./images/amazonsc.JPG";
import Boogle from "./images/boogle.jpeg";
import Radish from "./images/radish.jpeg";
import Bytes from "./images/bytes.JPG";
import Ox from "./images/ox.JPG";
import Caramel from "./images/caramel.JPG";
import toi from "./images/toi.JPG";
import stiw1 from "./images/stiw1.JPG";
import arrow from "./images/arrowfitness.JPG";
import tweb from "./images/terminal-web.PNG";

function Developer() {
  return (
    <div>
      <div className="layout" style={{ backgroundColor: "#191919" }}>
        <p id="tech-projects" className="layout-title" style={{ color: "#2ade8a", opacity: 1 }}>
          Projects
        </p>
        <div>
          
        <DevProj
            image={tweb}
            title="Terminal Style Website/Portfolio"
            date="28 Mar 2023"
            tech="HTML · CSS · Javascript"
            proj="View Live"
            github="GitHub"
            description="Built using Vanilla JavaScript, this is a mini version of my website to give the user a command line experience."
            websiteLink="https://terminal-belohith.netlify.app/"
            githubLink="https://github.com/belohith/website-terminal-belohith"
          />
          <DevProj
            image={stiw1}
            title="Shark Tank India React"
            date="9 Mar 2023"
            tech="React · HTML · CSS · Javascript"
            proj="View Live"
            github="GitHub"
            description="Built using React, this is a website displaying stats from the show Shark Tank India such as shark details, pitch details etc."
            websiteLink="https://sharktank-india.web.app/"
            githubLink="https://github.com/belohith/sharktank-india"
          />
          <DevProj
            image={arrow}
            title="Arrow Mark Tracker App"
            date="13 Feb 2023"
            tech="VueJS · HTML · CSS · Javascript · MongoDB · npm · Bulma"
            proj="View Live"
            github="GitHub"
            description="A full stack fitness tracker web app that lets you track your daily fitness level details and updates the details with a Login/Signup feature."
            websiteLink="https://midterm-example.onrender.com/"
            githubLink="https://github.com/belohith/awsp-home"
          />
          <DevProj
            image={toi}
            title="Text on Image"
            date="24 Jan 2023"
            tech="Python · HTML · PIL"
            proj="View Demo"
            github="GitHub"
            description="A simple app, that allows you to add text on to your image and lets you download the image too. (Yet to host publicly)"
            websiteLink="https://www.linkedin.com/posts/belohith_python-github-activity-7023663787098415104-Qz0p?utm_source=share&utm_medium=member_desktop"
            githubLink="https://github.com/belohith/toiapp"
          />
          <DevProj
            image={Stip}
            title="Shark Tank India Data"
            date="08 Jan 2023"
            tech="Python · Excel · StreamLit"
            proj="View Website"
            github="GitHub"
            description="This web app uses Python, Streamlit to create a beautiful and quick website that takes the data (about the show) from an excel sheet."
            websiteLink="https://sharktankindia.streamlit.app/"
            githubLink="https://github.com/belohith/sharktankindia"
          />
          <DevProj
            image={Krakkar}
            title="Krakkar CSS Framework"
            date="31 Dec 2022"
            tech="Sass · CSS"
            proj="View Documentation"
            description="A CSS framework built to make websites with the following principles in mind: flexible, utility-first, concise and keen-design. (currently beta)"
            websiteLink="https://krakkar.netlify.app/"
          />
          <DevProj
            image={TBH}
            title="The Best Heads Twitter Bot"
            date="06 Dec 2022"
            tech="Python · API · Beautiful Soup"
            proj="Open Twitter"
            description="A Twitter Bot that scrapes news from various sources and tweets 6 of them in a single image, once in every 8 hours."
            websiteLink="https://twitter.com/thebestheads"
          />
          <DevProj
            image={ML}
            title="Implementation of ML Algorithms"
            date="13 Nov 2022"
            tech="Jupyter Notebook · Python · Machine Learning"
            github="GitHub"
            description="Different machine learning algorithms implemented with Python and demonstrated with the given input dataset."
            githubLink="https://github.com/belohith/ml-algorithms"
          />
          <DevProj
            image={Cyber}
            title="Cybersecurity Methods"
            date="10 Nov 2022"
            tech="Jupyter Notebook · Python · Cybersecurity"
            github="GitHub"
            description="Different cyber security methods demonstrated with the same (almost) input text to show the difference in output."
            githubLink="https://github.com/belohith/cybersec-methods"
          />
          <DevProj
            image={SpamC}
            title="Spam Classifier"
            date="02 May 2022"
            tech="Python · Jupyter Notebook · Excel · StreamLit"
            github="GitHub"
            description="A website that filters spam using an input text from user (generally mail or SMS) using Naive Bayes Classification."
            githubLink="https://github.com/belohith/spam-classifier"
          />
          <DevProj
            image={Boogle}
            title="Boogle: Google Clone"
            date="26 Apr 2022"
            tech="React · NodeJS · API · MaterialUI"
            proj="View Website"
            github="GitHub"
            description="A Google clone built using the Google API to show newsfeed and search results when you search something."
            websiteLink="https://boogle-ox.netlify.app/search"
            githubLink="https://github.com/belohith/boogle-google-clone"
          />
          <DevProj
            image={AmS}
            title="Amazon Scraper API"
            date="21 Apr 2022"
            tech="API · HTTP · JSON · NodeJS"
            proj="Visit RapidAPI Store"
            github="GitHub"
            description="An API to get reviews of products and other details on Amazon Store. The API is published and available on RapidAPI."
            websiteLink="https://rapidapi.com/bollinenilohith9/api/amazon-scraper-ox"
            githubLink="https://github.com/belohith/amazon-data-scrapper"
          />
          <DevProj
            image={Radish}
            title="Radish: Travel Maps App"
            date="20 Mar 2022"
            tech="React · NodeJS · API · MaterialUI"
            proj="View Website"
            github="GitHub"
            description="A web app for travel purposes built on an API to view nearby restaurants, hotels and tourist attractions."
            websiteLink="https://radish-ox.netlify.app/"
            githubLink="https://github.com/belohith/radish-travel-web"
          />
          <DevProj
            image={Ox}
            title="Ox App Portal"
            date="07 Jan 2022"
            tech="React · NodeJS"
            proj="View Website"
            description="A portal for applications on different platforms and devices. (Apps for Web, Mobile, TV, SmartWatch all at one place)"
            websiteLink="https://oxappportal.firebaseapp.com/"
          />
          <DevProj
            image={Caramel}
            title="Caramel"
            date="02 May 2020"
            tech="React · NodeJS"
            proj="View Website"
            description="A social app that lets you connect with people based on thoughts, ideas primarily rather than looks. (Currently beta)"
            websiteLink="https://caramel-ox.netlify.app/"
          />
          <DevProj
            image={Bytes}
            title="Bytes"
            date="20 Apr 2019"
            tech="Android · Java · XML · Mobile"
            proj="Open Play Store"
            description="An Android app which is an adaption of the popular Whack-a-Mole game which is a 3x3 grid button game."
            websiteLink="https://play.google.com/store/apps/details?id=com.oxapps.lohithb.bytes"
            githubLink="https://github.com/example"
          />
        </div>
      </div>
    </div>
  );
}

export default Developer;
