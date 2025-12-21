import "./App.css";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <div>
      <h1>Ryan Duan</h1>

      <h2>Software Engineer</h2>

      <nav className="links" aria-label="Profile links">
        <a
          aria-label="GitHub"
          href="https://github.com/ryanduan02"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/ryanduan/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a aria-label="Email" href="mailto:ryanduan02+website@gmail.com">
          <FaEnvelope />
        </a>
      </nav>

      <div className="contentWrapper">
        <img className="profilePhoto" src="/img.jpg" alt="Photo of Ryan Duan" />
        <section className="about">
          <h3>About</h3>
          <p>
            I'm a Software Development Engineer at Amazon in New York, where I
            build and scale customer facing systems. Most recently, I worked on
            the backend of an{" "}
            <a href="https://techcrunch.com/2025/10/23/amazons-new-ai-shopping-tool-tells-you-why-you-should-buy-a-recommended-product/">
              AI-powered shopping feature
            </a>{" "}
            delivered through the Amazon mobile app.
          </p>
            As an engineer, I have extensive experience with Java, 
            Python, Typescript, and C. I've also spent coutless hours building 
            and operating services in AWS. 
          <p>

          </p>
            Personally, I have a variety of interests. Recently, I've taken 
            Clash Royale more seriously, reaching ultimate champion rank multiple
            seasons in a row soon after getting back into it. And in clash of clans, 
            I reached top 10k in May 2025 in the builder base.
          <p>

          
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
