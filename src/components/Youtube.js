import YTVideo from "./YTVideo";

function Youtube() {
  return (
    <div>
      <div className="layout" style={{ backgroundColor: "#191919" }}>
        <p className="layout-title" style={{ color: "#e90606", opacity: 1 }}>
          Youtube
        </p>

        <div className="youtube-video-container">
          <YTVideo videoId={"vgrOjes-BFE"} />
          <div className="youtube-video-description-container">
            <div className="youtube-video-description">
              <p>
                {" "}
                I have a Youtube channel where I share my thoughts, talk with
                people who I find intersting because of they work they did in
                the past or about to do in the future. I also like to share my
                learnings and experstise in all the different fields that I am a
                part of. Check out the video to understand more. Currently, I am
                inactive, thanks to my hectic schedule for different reasons.
                Hopefully, I will get back to doing this soon.{" "}
              </p>
              <a
                href="https://www.youtube.com/@belohith"
                target="_blank"
                rel="noopener noreferrer"
                className="ytlink"
              >
                Watch more on YouTube!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Youtube;
