import React from 'react';

const YoutubeVideo = ({ videoId }) => {
  return (
    <div className="youtube-video-container">
      <iframe
        title={videoId}
        className='youtube-wh'
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YoutubeVideo;
