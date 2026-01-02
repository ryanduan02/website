import { projects } from "../projects";
import { FaGithub } from "react-icons/fa";

export function ProjectsPage() {
  return (
    <section className="projects" aria-label="Projects">
      <h3 className="projectsTitle">Some thoughts ...</h3>

      <div className="projectsList">
        {projects.map((p) => (
          <article className="projectCard" key={`${p.title}-${p.date}`}>
            <header className="projectHeaderRow">
              <h4 className="projectTitle">{p.title}</h4>
              <time className="projectDate" dateTime={p.date}>
                {p.date}
              </time>
            </header>

            <a
              className="projectGithub"
              href={p.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub aria-hidden="true" focusable="false" />
              {"Github"}
            </a>

            <p className="projectDescription">{p.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
