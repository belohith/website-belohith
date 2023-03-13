import SPEpisode from "./SPEpsiode";

function Podcast() {
  return (
    <div>
      <div className="layout" style={{ backgroundColor: "#191919" }}>
        <p className="layout-title" style={{ color: "#37ae5c", opacity: 1 }}>
          Podcast
        </p>

        <div className="spotify-container">
          <div className="sp-desc-container">
            <p className="sp-desc">
              I am surrounded by many inspiring individuals and my thoughts are
              constantly buzzing in my head, making it difficult to keep them to
              myself. That's why I've decided to share them with the world
              through this platform. Here's to all those who choose to join me
              on this journey. Stay tuned for more exciting episodes!{" "}
              <a
                target="_blank"
                className="ytlink"
                href="https://open.spotify.com/show/77tgTTXihCsRqLSlFmyovx?si=526184fecafb4e23"
              >
                More episodes here!
              </a>
            </p>
          </div>
          <SPEpisode
            spotifyUri={
              "10nR7Czyz3uKC3htQP0yAI?utm_source=generator&theme=0&t=0"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Podcast;
