import "./App.css";

import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaRss } from "react-icons/fa";

function App() {
  return (
    <div>
      <h1>Ryan Duan</h1>

      <h2>Backend Engineer</h2>

      <nav className="links" aria-label="Profile links">
        <a aria-label="GitHub" href="https://github.com/ryanduan02" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a aria-label="LinkedIn" href="https://www.linkedin.com/in/ryanduan/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a aria-label="Email" href="mailto:ryanduan02+website@gmail.com">
          <FaEnvelope />
        </a>
      </nav>
    </div>
  )
}

export default App
