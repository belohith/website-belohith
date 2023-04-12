import AboutText from "./AboutText";

function Games() {
  return (
    <div>
      <div className="layout" style={{ backgroundColor: "#191919" }}>
      <p id="skills" className="layout-title" style={{ color: "#FFD700", opacity: 1 }}>Skills</p>
      <h2 style={{color: "white"}}>Programming Languages</h2>
      <div className="flex-row center">
        <p className="box-white">C</p>
        <p className="box-white">C++</p>
        <p className="box-white">C#</p>
        <p className="box-white">Java</p>
        <p className="box-white">Python</p>
        <p className="box-white">GoLang</p>
        <p className="box-white">JavaScript</p>
        <p className="box-white">TypeScript</p>
        <p className="box-white">Erlang</p>
        <p className="box-white">Elixir</p>
        <p className="box-white">Dart</p>
        <p className="box-white">Kotlin</p>
        </div>
        <h2 style={{color: "white"}}>Frameworks</h2>
        <div className="flex-row center">
        <p className="box-white">React</p>
        <p className="box-white">Vue</p>
        <p className="box-white">Angular</p>
        <p className="box-white">Django</p>
        <p className="box-white">Flask</p>
        <p className="box-white">ExpressJS</p>
        <p className="box-white">Phoenix</p>
        <p className="box-white">Bootstrap</p>
        <p className="box-white">Bulma</p>
        <p className="box-white">Tailwind CSS</p>
        <p className="box-white">Material UI</p>
        <p className="box-white">SASS</p>
        </div>
        <h2 style={{color: "white"}}>Other Technologies</h2>
        <div className="flex-row center">
        <p className="box-white">HTML</p>
        <p className="box-white">CSS</p>
        <p className="box-white">XML</p>
        <p className="box-white">NodeJS</p>
        <p className="box-white">Flutter</p>
        <p className="box-white">Android Dev</p>
        <p className="box-white">React Native</p>
        <p className="box-white">MySQL</p>
        
        </div>
        <div className="flex-row center">
        <p className="box-white">MongoDB</p>
        <p className="box-white">Firebase</p>
        <p className="box-white">AWS S3</p>
        <p className="box-white">Microsoft Office</p>
        <p className="box-white">GitHub</p>
        <p className="box-white">Docker</p>
        <p className="box-white">Kubernetes</p>
        <p className="box-white">Jenkins</p>
        <p className="box-white">Postman</p>
        </div>
        {/* <div>
          <AboutText
            title="Programming Languages"
            text1="C · C++ · C# "
            text2="Java · Python · GoLang"
            text3="JavaScript · Typescript"
            text4="Erlang · Elixir · Dart"
          />
          <AboutText
            title="Frameworks/Libraries"
            text1="React · Vue · Angular"
            text2="Django · Flask "
            text3="Bootstrap · Bulma · Tailwind CSS · Material UI · Sass"
          />
          <AboutText
            title="Web & Mobile Dev Related"
            text1="HTML · CSS · XML · NodeJS · Android Development · ExpressJS · Flutter · React Native"
          />
          <AboutText
            title="Databases"
            text1="MySQL · MongoDB · Firebase · AWS S3"
          />
          <AboutText
            title="DevOps & CI/CD & API Testing"
            text1="Microsoft Office · GitHub · Docker · Kubernetes · Jenkins ·  Postman"
          />
        </div> */}
      </div>
    </div>
  );
}

export default Games;
