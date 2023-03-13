import React from 'react';

const YoutubeVideo = ({ videoId }) => {
  return (
    <div className="youtube-video-container">
      <iframe
        title={videoId}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YoutubeVideo;
