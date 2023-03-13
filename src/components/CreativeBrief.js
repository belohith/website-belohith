import React from 'react';

function CreativeBrief() {
  return (
    <div className="cb-container">
      <div className="layout" style={{ backgroundColor: "#191919" }}>
        <p className="layout-title"></p>
        <div
          className="card-tb"
          style={{
            border: "1px solid #191919"
          }}
        >
          <p style={{ color: "#ffffff" }}>
            The urge to express things on my mind often takes its own creative route, bursting a bunch of ideas in various forms. The following is a visual display of some of those outbursts.
          </p>
          <p style={{ color: "#ffffff" }}>
            My interests lie in Writing, Filming, Design. I also host a Podcast and Youtube channel, although very inactive nowadays due to work. <br />
            
            <br />
            <br /> Scroll down to see my work in each of those.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreativeBrief;
