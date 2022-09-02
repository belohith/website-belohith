function YTVideos() {
  return (
    <div className="margin-2">
      <div>
        <p className="items-title width-100">
          Watch videos from my Youtube channel here
        </p>
        <div className="items-bg flex-container ">
          <iframe
            className="flex-wh-yt"
            src="https://www.youtube.com/embed/vgrOjes-BFE"
            title="YouTube video player"
            frameBorder="0"
            style={{ margin: '0.1rem', borderRadius: '1rem'}}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="flex-wh-yt"
            src="https://www.youtube.com/embed/-QQlKj50eyU"
            title="YouTube video player"
            frameBorder="0"
            style={{ margin: '0.1rem', borderRadius: '1rem'}}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="flex-wh-yt"
            src="https://www.youtube.com/embed/90Od1o5459E"
            title="YouTube video player"
            frameBorder="0"
            style={{ margin: '0.1rem', borderRadius: '1rem'}}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="flex-wh-yt"
            src="https://www.youtube.com/embed/Dgp6mq6Eq6g"
            title="YouTube video player"
            frameBorder="0"
            style={{ margin: '0.1rem', borderRadius: '1rem'}}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          
        </div>
      </div>
    </div>
  );
}

export default YTVideos;
