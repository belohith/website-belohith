import AboutMe from "./AboutMe";
import Company from "./Company";

import newpaltz from "./images/newpaltz.jpg";
import tellerm from "./images/tellerm.jpeg";
import wfnp from "./images/wfnp.jpg";
import deli from "./images/deliciuex.jpeg";
import girlup from "./images/girlup.jpeg";
import mkr from "./images/mkr.jpeg";
import sedemac from "./images/sedemac.jpeg";
import nft from "./images/nft.jpeg";
import lfl from "./images/lfl.jpeg";
import wng from "./images/wng.jpg";
import enactus from "./images/enactus.jpg";
import renaissance from "./images/renaissance.jpg";
import commf from "./images/commfolks.jpeg";
import pebble from "./images/pebble.jpeg";
import ieevit from "./images/ieeevit.jpg";
import vitcc from "./images/vitcc.jpg";
import cry from "./images/cry.jpeg";
import itrroddd from "./images/itrroddd.jpg";
import helpage from "./images/helpage.jpeg";
import toppr from "./images/toppr.jpeg";
import modern from "./images/modern.jpeg";
import narayana from "./images/narayana.jpg";
import scnjc from "./images/scnjc.jpg";
import ws1 from "./images/ws1.jpeg";
import ws2 from "./images/ws2.jpeg";
import ws3 from "./images/ws3.jpeg";
import ws4 from "./images/ws4.jpeg";
import ws5 from "./images/ws5.png";
import ws6 from "./images/ws6.jpg";


function About() {
  return (
    <div>
      <AboutMe title="Glad you are here!" text="I am Lohith Bollineni." />
      <div className="layout" style={{ backgroundColor: "#191919" }}>
        <p className="layout-title" style={{ color: "#de9b00", opacity: 1, marginBottom: "5rem" }}>
          Experience
        </p>
        <div >
        <Company
          image={newpaltz}
          company="State University of New York at New Paltz"
          desc="The International Relations Department of SUNY New Paltz works with international students to help them with things like VISA Immigration etc."
          role1="Graduate Assistant :"
          date1="Jan 2021 - present"
          type="Full Time"
          place="New Paltz, NY, USA"
          where="Hybrid"
          desc1="• Worked with students from different countries where I was part of the IT Dept of International Relations"
          desc2="• Directed to help 15 students per month regarding VISA-related documents and registration of courses &
            trained 2 other Graduate Assistants"
        />
        <Company
          image={tellerm}
          company="The Teller Magazine"
          type="Volunteer"
          desc="A Student-Run Art and Lifestyle Magazine at SUNY New Paltz"
          role1="Contributing Author :"
          date1="Feb 2021 - Dec 2022"
          place="New Paltz, NY, USA"
          where="Hybrid"
          desc1="• Contributed 5 articles ( Read them under 'Submissions for Teller Magazine' in Author Section )"
          role2="Copy Editor :"
          date2="Feb 2021 - Dec 2022"
          desc3="• Collaborated with other editors and authors to work on editing the submissions"
          role3="Designer :"
          date3="Sep 2021 - Dec 2022"
          desc5="• Designed a few pages in every edition of the magazine"
        />
        <Company
          image={wfnp}
          company="WFNP 88.7 The Edge"
          desc="A Student-Run Radio at SUNY New Paltz"
          role1="Radio News Presenter :"
          date1="Feb 2021 - Jun 2021"
          type="Volunteer"
          place="New Paltz, NY, USA"
          where="Hybrid"
          desc1="• Read news weekly on a live broadcasting radio to which thousands of people across upstate New York tune in"
        />
        <Company
          image={deli}
          company="Delicieux Food Box"
          desc="A cloud-kitchen food delivery startup started by 2 siblings and their mom"
          role1="Frontend Developer :"
          date1="Sep 2020 - Nov 2020"
          type="Internship"
          place="Hyderabad, TL, India"
          where="Remote from Chennai"
          desc1="• Developed the food start-up website in HTML, CSS, and JS & deployed the website using AWS"
          role2="Graphic Designer :"
          date2="Sep 2020 - Nov 2020"
          desc3="• Trained a team of 5 for design and marketing"
          desc4="• Delivered and designed content for the social media posts for brand engagement"
        />
        <Company
          image={girlup}
          company="Girl Up She-United"
          desc="An initiative that helps girls access their inner power to advance their skills, rights and opportunities of girls everywhere"
          role1="Video Editor :"
          date1="Sep 2020 - Nov 2020"
          type="Volunteer"
          place="New Delhi, New Delhi, India"
          where="Remote from Chennai"
          desc1="• Made a video for an awareness campaign run to empower women"
        />
        <Company
          image={mkr}
          company="Mitti Ke Rang"
          type="Volunteer"
          desc="A Venture working towards generating livelihood for women"
          role1="Podcaster :"
          date1="Jun 2020 - Nov 2020"
          place="Pune, MH, India"
          where="Remote from Chennai"
          desc1="• Interviewed guests as a host and prepared content for the interview when somebody else is host for the podcast"
          role2="Video Editor :"
          date2="Jun 2020 - Nov 2020"
          desc3="• Edited videos for various events including podcasts, rewinds, promos etc."
          role3="Designer :"
          date3="Jun 2020 - Nov 2020"
          desc5="• Delivered and designed content for the social media posts, event posters and thumbnails"
        />
        <Company
          image={sedemac}
          company="Sedemac"
          desc="A company that specializes in Appliances, Electrical, and Electronics Manufacturing"
          role1="User Interface Engineer :"
          date1="Sep 2020 - Oct 2020"
          type="Internship"
          place="Pune, MH, India"
          where="Remote from Chennai"
          desc1="• Improved the UI UX and interface of a webapp used by 10+ employees & clients to view 3D Models of the machines built in the lab"
        />
        <Company
          image={nft}
          company="Nerd For Tech"
          desc="An Educational Media House that focuses on bringing people together to the world of Tech"
          role1="Video Editor :"
          date1="Aug 2020 - Sep 2020"
          type="Internship"
          place="Bengaluru, KA, India"
          where="Remote from Chennai"
          desc1="• Worked and edited podcast videos where experts from the world of tech across the globe are guests"
        />

        <Company
          image={lfl}
          company="Learn for Less"
          type="Internship"
          desc="A not-for-profit initiative disrupting the ed-tech space"
          role1="Designer :"
          date1="Aug 2020 - Sep 2020"
          place="New Delhi, New Delhi, India"
          where="Remote from Chennai"
          desc1="• Designed the start-up’s logo and a few social media posts"
          role2="Frontend Engineer :"
          date2="Aug 2020 - Sep 2020"
          desc3="• Developed and designed the website and integrated payment gateway using Razorpay. The ed-tech start-up platform
          is used by 3000+ students so far. Registered students count increased by almost 3 times within 2 months"
        />
        <Company
          image={toppr}
          company="Toppr"
          desc="An Educational Learning app for students from classes 5th to 12th"
          role1="
          Business Dev Manager :"
          date1="Jul 2019 - Aug 2019"
          type="Internship"
          place="Chennai, TN, India"
          where="In Person"
          desc1="• Talked to hundreds of customer leads to make them buy the product and follow-ups included reaching out to them in person"
        />
        <Company
          image={wng}
          company="White and Grey Media"
          desc="An advertising agency providing Video Content, Creative, Branding and Digital Services"
          role1="
          Designer :"
          date1="Apr 2019 - Jun 2019"
          type="Internship"
          place="Bengaluru, KA, India"
          where="In Person"
          desc1="• Worked on various projects for brand packaging, posters, UI/UX of apps etc."
          role2="Video Editor :"
          date2="Apr 2019 - Jun 2019"
          desc3="• Worked on various video projects for brand promos, Youtube videos etc."
        />
        <Company
          image={enactus}
          company="Enactus VIT Chennai"
          type="Volunteer"
          desc="A student chapter in VIT Chennai for Enactus, an international non-profit organisation that empowers the underpriviliged through entrepreneurship"
          role3="Advisory Board :"
          date3="Dec 2018 - Apr 2019"
          place="Chennai, TN, India"
          where="In Person"
          desc5="• Adviced the team by giving them my expertise during my final days"
          role2="Creative Head :"
          date2="Apr 2018 - Dec 2018"
          desc3="• Managed a team of around 20+ members in various sub-groups to take care of the creative aspects like Design, Photography, Writing etc."
          role1="Member :"
          date1="Dec 2017 - Apr 2018"
          desc1="• Worked on various design and video projects as a part of the Creative Team"
          desc2="• Took part in Traffic Awareness Drive (TRAD) to spread awareness at a traffic signal junction in Chennai"
        />
        <Company
          image={renaissance}
          company="Renaissance VITC"
          type="Volunteer"
          desc="Annual entrepreneurship fest of VIT Chennai (also one of the founding members)"
          role2="Advisory Board :"
          date2="Mar 2018 - Apr 2019"
          place="Chennai, TN, India"
          where="In Person"
          desc3="• Adviced the team by giving them my expertise during my final days"
          role1="Member :"
          date1="Aug 2017 - Feb 2018"
          desc1="• Worked on various design and video projects as a part of the Creative Team"
        />
        <Company
          image={commf}
          company="Community Folks"
          desc="India’s first Community Management & Engagement Firm"
          role1="
          Cinematographer :"
          date1="Nov 2018 - Dec 2018"
          type="Part Time"
          place="Bengaluru, KA, India"
          where="In Person"
          desc1="• Worked for various events that the company had been a part of, like Hackeference 2018, Pet Search Brand Video, FB Community Bengaluru Launch 2018"
          desc2="• Work included shooting, editing videos and photos by including the brand image"
        />
        <Company
          image={pebble}
          company="Pebble Sierra"
          desc="Operations Management Executive Certification Training Organisation"
          role1="
          Social Media Manager :"
          date1="Mar 2018 - Jul 2018"
          type="Part Time"
          place="Indore, MP, India"
          where="Remote from Chennai"
          desc1="• Designed posts for the Social Media and was responsible to take care of their Social Media presence"
        />
        <Company
          image={ieevit}
          company="IEEE VIT Chennai"
          desc="A student chapter at VIT Chennai for IEEE Organization that works as a hub for tech enthusiasts"
          role1="
          Graphic Designer :"
          date1="Nov 2017 - Apr 2018"
          type="Volunteer"
          place="Chennai, TN, India"
          where="In Person"
          desc1="• Designed posters for events and catured photos, videos"
        />
        <Company
          image={vitcc}
          company="Vellore Institute of Technology Chennai Campus"
          desc="SENSE, VIT Chennai is the school for Electronics and Communication students"
          role1="
          Editor :"
          date1="Sep 2017 - Nov 2017"
          type="Volunteer"
          place="Chennai, TN, India"
          where="In Person"
          desc1="• Designed the layout for the first edition of SENSE Magazine and was responsible for the check of the content going into the magazine"
        />

        <Company
          image={cry}
          company="CRY - Child Rights and You"
          desc="CRY works to ensure happier childhoods for India's children and has impacted 3M+ children in the last 4 decades."
          role1="
          Fundraiser :"
          date1="Sep 2017 - Oct 2017"
          type="Volunteer"
          place="Mumbai, MH, India"
          where="Remote from Chennai"
          desc1="• Rasied funds for Children though online campaigns and also made a video to spread the message reach out to more people"
        />
        <Company
          image={itrroddd}
          company="ITRRODDD"
          desc="ITRRODDD - The Institute for Training, Relief, Rehabilitation of Disabled, Distressed & Disinherited Children"
          role1="
          Fundraiser :"
          date1="Jul 2008 - Aug 2008"
          type="Volunteer"
          place="Nellore, AP, India"
          where="Remote from Nellore"
          desc1="• Rasied funds for Children though offline campaigns by reaching out to as many people as possible"
        />
        <Company
          image={helpage}
          company="Help Age India"
          desc="HelpAge India is secular, not-for-profit organization raising resources to protect the rights of India's elderly"
          role1="
          Fundraiser :"
          date1="Feb 2007 - Mar 2007"
          type="Volunteer"
          place="Nellore, AP, India"
          where="Remote from Nellore"
          desc1="• Rasied funds for the elderly though offline campaigns by reaching out to as many people as possible"
        />
        </div>
        <p className="layout-title" style={{ color: "#de9b00", opacity: 1, marginTop: "5rem" }}>
          Education
        </p>
        <div>
        <Company
          image={newpaltz}
          company="State University of New York at New Paltz"
          desc="Masters Degree"
          role1="
          M.S. in Computer Science :"
          date1="Jan 2021 - present"
          type="Full Time"
          place="New Paltz, NY, USA"
          where="Hybrid"
        //   desc1="Coursework: Data Structures & Algorithms • Computer Systems • Database Management System • Cybersecurity • Fundamentals of Computer Science • Data Science • Artificial Intelligence • Advance Web Development Programming • Machine Learning • Recent Advances in Computer Science • Advance Data Structures and Algorithms • Global Development Leadership (BUS)"
        />
        <Company
          image={vitcc}
          company="Vellore Institute of Technology Chennai Campus"
          desc="Bachelors Degree"
          role1="
          B.Tech. in Elec. and Comm. :"
          date1="Jul 2015 - May 2020"
          type="Full Time"
          place="Chennai, TN, India"
          where="In Person"
        //   desc1="Coursework: Data Structures & Algorithms • Computer Systems • Database Management System • Cybersecurity • Fundamentals of Computer Science • Data Science • Artificial Intelligence • Advance Web Development Programming • Machine Learning • Recent Advances in Computer Science • Advance Data Structures and Algorithms • Global Development Leadership (BUS)"
        />
        <Company
          image={scnjc}
          company="Sri Chaitanya Narayana Junior College"
          desc="Intermediate"
          role1="
          11th - 12th Class :"
          date1="Jun 2013 - May 2015"
          type="Full Time"
          place="Nellore, AP, India"
          where="In Person"
        //   desc1="Coursework: Data Structures & Algorithms • Computer Systems • Database Management System • Cybersecurity • Fundamentals of Computer Science • Data Science • Artificial Intelligence • Advance Web Development Programming • Machine Learning • Recent Advances in Computer Science • Advance Data Structures and Algorithms • Global Development Leadership (BUS)"
        />
        <Company
          image={narayana}
          company="Narayana Olympiad School"
          desc="Secondary School"
          role1="
          8th - 10th Class :"
          date1="Jun 2010 - May 2013"
          type="Full Time"
          place="Nellore, AP, India"
          where="In Person"
        //   desc1="Coursework: Data Structures & Algorithms • Computer Systems • Database Management System • Cybersecurity • Fundamentals of Computer Science • Data Science • Artificial Intelligence • Advance Web Development Programming • Machine Learning • Recent Advances in Computer Science • Advance Data Structures and Algorithms • Global Development Leadership (BUS)"
        />
        <Company
          image={modern}
          company="Modern School"
          desc="Primary School"
          role1="
          Kindergarten - 7th Class :"
          date1="Jun 2000 - May 2010"
          type="Full Time"
          place="Nellore, AP, India"
          where="In Person"
        //   desc1="Coursework: Data Structures & Algorithms • Computer Systems • Database Management System • Cybersecurity • Fundamentals of Computer Science • Data Science • Artificial Intelligence • Advance Web Development Programming • Machine Learning • Recent Advances in Computer Science • Advance Data Structures and Algorithms • Global Development Leadership (BUS)"
        />
        </div>
        <p className="layout-title" style={{ color: "#de9b00", opacity: 1, marginTop: "5rem" }}>
          Commendations
        </p>
        <div>
        <Company
          image={ws6}
          company="Project Presentation at Symposium"
          desc="Project (App) Presentation at Symposium"
          role1="
          Attendance :"
          date1="1000+"
          type="26 Apr 2022"
          place="SUNY New Paltz"
          where="In Person"
          desc1="• I had an opportunity to present my project 'Caramel: A Social App' to the attendees at the SUNY New Paltz annual Student Research Symposium where students from different departments come together to showcase their wonderful research or project works."
        />
        <Company
          image={ws4}
          company="Designing for Different Media"
          desc="Webinar on Designing"
          role1="
          Attendance :"
          date1="65+"
          type="11 Jan 2021"
          place="FIFO Talks"
          where="Online"
          desc1="• On this webinar hosted by Srishti Maggo as a part of FIFO Talks India, I spoke about designing, related job aspects and how it can be impactful in different industries."
        />
        <Company
          image={ws3}
          company="Learn Video Editing & Professional Designing"
          desc="Webinar on Video Editing & Designing"
          role1="
          Attendance :"
          date1="30+"
          type="31 Oct 2020"
          place="FIFO Talks"
          where="Online"
          desc1="• On this webinar hosted by Harshita Garg as a part of FIFO Talks India, I spoke about video editing & designing, related job aspects and how to learn them for those interested."
        />
        <Company
          image={ws5}
          company="Special Session: Video Editing"
          desc="Online Workshop on Video Editing"
          role1="
          Attendance :"
          date1="30+"
          type="17 Oct 2020"
          place="Community  Folks"
          where="Online"
          desc1="• During this online corporate workshop hosted by Paras Pundir and Himanshu as a part of the Community Folks (Bangalore), I trained attendees with a brief outline on Video Editing and how to get started with the same for beginners. It was a closed corporate event focused on training their employees with some basic video editing skills."
        />
        <Company
          image={ws2}
          company="Video Editing Workshop"
          desc="Online Workshop on Video Editing"
          role1="
          Attendance :"
          date1="30+"
          type="18 Oct 2020"
          place="Enactus VIT Chennai"
          where="Online"
          desc1="• During this online workshop hosted by Ishita Jain as a part of the Naari Project which is an initiative by Enactus VIT Chennai, I trained attendees with a brief outline on Video Editing and how to get started with the same for beginners. The raised funds were donated to their menstruation awareness campaign."
        />
        <Company
          image={ws1}
          company="Masterclass on Basic Video Editing"
          desc="Online Workshop on Video Editing"
          role1="
          Attendance :"
          date1="300+"
          type="2 Aug 2020"
          place="Mitti ke Rang"
          where="Online"
          desc1="• During this online workshop hosted by Amit Jain as a part of Mitti ke Rang Academy which is an initiative by Mitti ke Rang, I trained attendees with a brief outline on Video Editing and how to get started with the same for beginners. It was my first workshop (and also their first) to which 500+ registered out of which 300+ showed up to learn Video Editing."
        />
        </div>
      </div>
    </div>
  );
}

export default About;
