import React from 'react';

const SPEpisode = ({ spotifyUri }) => {
  return (
    <div className="spotify-audio-container">
      <iframe
        src={`https://open.spotify.com/embed/episode/${spotifyUri}`}
        width="300"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default SPEpisode;
