function SpotifyPodcast() {
  return (
    <div className="margin-2">
      <div>
        <p className="items-title width-100">Listen to my Podcast here</p>
        <div className="items-bg flex-container ">
          <iframe
            style={{ margin: '0.1rem', borderRadius: '1rem'}}
            src="https://open.spotify.com/embed/episode/3RaQdNCbdVYkTxpDjIjEPh?utm_source=generator&theme=0&t=0"
            className="flex-wh-sp"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
          <iframe
            style={{ margin: '0.1rem', borderRadius: '1rem'}}
            src="https://open.spotify.com/embed/episode/10nR7Czyz3uKC3htQP0yAI?utm_source=generator&theme=0&t=0"
            className="flex-wh-sp"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
          <iframe
            style={{ margin: '0.1rem', borderRadius: '1rem'}}
            src="https://open.spotify.com/embed/episode/09LhyuEHVv3WfXJ0ydB4Rr?utm_source=generator&theme=0&t=0"
            className="flex-wh-sp"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
          <iframe
            style={{ margin: '0.1rem', borderRadius: '1rem'}}
            src="https://open.spotify.com/embed/episode/26yK4vqvBeFIm8K6LpAAeI?utm_source=generator&theme=0&t=0"
            className="flex-wh-sp"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default SpotifyPodcast;
