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
          <p>
            As an engineer, I have extensive experience with Java, Python,
            TypeScript, and C. I've also spent countless hours building and
            operating services in AWS.
          </p>
          <p>
            Personally, I have a variety of interests. Recently, I've taken
            Clash Royale more seriously, reaching ultimate champion rank
            multiple seasons in a row. In Clash of Clans I reached top 10k in
            May 2025 in the builder base.
          </p>
        </section>
      </div>

      <aside className="resume" aria-label="Resume">
        <h3>Experience</h3>

        <div className="resumeItem">
          <div className="jobHeader">
            <div className="jobTitle">Software Development Engineer</div>
            <div className="jobMeta">New York, NY</div>
            <div className="jobMeta">August 2025 - Current</div>
          </div>
          <p>
            I built and maintained backend components powering Amazon's
            AI-driven “Help Me Decide” feature across core shopping flows,
            including the development of novel product capabilities. I
            decomposed backend services to improve extensibility and optimized
            the cache by adjusting cache admission policy to only retain entries
            with demonstratlue use potential to
          </p>
        </div>

        <div className="resumeItem">
          <div className="jobHeader">
            <div className="jobTitle">Software Development Engineer</div>
            <div className="jobMeta">New York, NY</div>
            <div className="jobMeta">May 2024 - August 2024</div>
          </div>
          <p>
            Designed and built a document migration engine to automatically
            convert OpenXML contract templates into JavaScript-compatible
            formats, dramatically reducing manual migration work and
            accelerating adoption of Amazon's internal system.
          </p>
        </div>

        <div className="resumeItem">
          <div className="jobHeader">
            <div className="jobTitle">Software Engineer Intern</div>
            <div className="jobMeta">Pittsburgh, PA</div>
            <div className="jobMeta">June 2023 - August 2023</div>
          </div>
          <p>
            Interned on the Corporate Risk Technology team to modernize and
            automate a critical capital analysis and reporting tool,
            significantly reducing manual work while improving efficiency,
            accuracy, and regulatory readiness
          </p>
        </div>

        <div className="resumeItem">
          <div className="jobHeader">
            <div className="jobTitle">Teaching Assistant</div>
            <div className="jobMeta">Pittsburgh, PA</div>
            <div className="jobMeta">August 2022 - May 2025</div>
          </div>
          <p>
            Led recitations, office hours and graded assignments and exams for
            50 to 150 students across core Math and Computer Science courses:
            calculus, linear algebra, probability. Helped grade, lead
            recitations, and develop course materials, including a Python-based
            library for teaching computational probability
          </p>
        </div>
      </aside>
    </div>
  );
}

export default App;
