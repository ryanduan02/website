import "./App.css";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

type TabId = "home" | "writing"; // extend later: | "projects" | "writing" | ...

type TabConfig = {
  id: TabId;
  label: string;
  render: () => React.ReactNode;
};

function Tabs({
  tabs,
  activeId,
  onChange,
  ariaLabel,
}: {
  tabs: TabConfig[];
  activeId: TabId;
  onChange: (id: TabId) => void;
  ariaLabel: string;
}) {
  const tabRefs = React.useRef<Array<HTMLButtonElement | null>>([]);

  const activeIndex = Math.max(
    0,
    tabs.findIndex((t) => t.id === activeId)
  );

  function focusTab(index: number) {
    const clamped = (index + tabs.length) % tabs.length;
    tabRefs.current[clamped]?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent) {
    // Roving focus + selection like typical tabs
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        focusTab(activeIndex + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        focusTab(activeIndex - 1);
        break;
      case "Home":
        e.preventDefault();
        focusTab(0);
        break;
      case "End":
        e.preventDefault();
        focusTab(tabs.length - 1);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        onChange(tabs[activeIndex].id);
        break;
      default:
        break;
    }
  }

  return (
    <div className="tabShell">
      <div
        className="tabList"
        role="tablist"
        aria-label={ariaLabel}
        onKeyDown={onKeyDown}
      >
        {tabs.map((tab, idx) => {
          const selected = tab.id === activeId;
          const tabId = `tab-${tab.id}`;
          const panelId = `panel-${tab.id}`;

          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[idx] = el;
              }}
              id={tabId}
              role="tab"
              type="button"
              className={`tab ${selected ? "tabActive" : ""}`}
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              onClick={() => onChange(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map((tab) => {
        const selected = tab.id === activeId;
        const tabId = `tab-${tab.id}`;
        const panelId = `panel-${tab.id}`;

        return (
          <div
            key={tab.id}
            id={panelId}
            role="tabpanel"
            aria-labelledby={tabId}
            hidden={!selected}
            className="tabPanel"
          >
            {selected ? tab.render() : null}
          </div>
        );
      })}
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <h1>Ryan Duan</h1>

      <h2>Software Engineer</h2>

      <nav className="links" aria-label="Profile links">
        <a
          aria-label="GitHub"
          href="https://github.com/ryanduan02"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/ryanduan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          aria-label="Email"
          href="mailto:ryanduan02+website@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
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
            the backend of an AI-powered shopping feature delivered through the
            Amazon mobile app.
          </p>
          <p>
            As an engineer, I have extensive experience with Java, Python,
            TypeScript, and C. I've also spent countless hours building and
            operating services in AWS.
          </p>
          <p>
            I love playing games. Recently, I've taken Clash Royale more
            seriously, reaching ultimate champion rank multiple seasons in a
            row. In Clash of Clans I reached top 10k in May 2025 in the builder
            base. I played chess competitively in high school, but not so much
            anymore. I still play online from time to time. You can find me{" "}
            <a
              href="https://www.chess.com/member/ryanxd"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
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
            AI-driven{" "}
            <a
              href="https://techcrunch.com/2025/10/23/amazons-new-ai-shopping-tool-tells-you-why-you-should-buy-a-recommended-product/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Help Me Decide
            </a>{" "}
            feature across core shopping flows, including the development of
            novel product capabilities. I decomposed backend services to improve
            extensibility and optimized the cache by adjusting cache admission
            policy to only retain entries with demonstratlue use potential to
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

        <div className="fullResumeLink">
          <a
            href="/Ryan_Duan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>Full resume</h4>
          </a>
        </div>
      </aside>
    </div>
  );
}

export default function App() {
  const tabs: TabConfig[] = React.useMemo(
    () => [
      { id: "home", label: "Home", render: () => <HomePage /> },
      { id: "writing", label: "Writing", render: () => <WritingPage /> },
      // Later:
      // { id: "projects", label: "Projects", render: () => <ProjectsPage /> },

    ],
    []
  );

  const [activeId, setActiveId] = React.useState<TabId>("home");

  return (
    <div className="appRoot">
      <Tabs
        tabs={tabs}
        activeId={activeId}
        onChange={setActiveId}
        ariaLabel="Site sections"
      />
    </div>
  );
}

type Writing = {
  slug: string;              // unique internal id, used for navigation
  title: string;
  summary: string;
  date?: string;
  content: React.ReactNode;  // full post content (JSX)
};

function WritingPage() {
  const posts: Writing[] = [
    /*
    {
      slug: "example-post",
      title: "Example Post Title",
      summary:
        "A short 1–2 sentence summary describing what the reader will get out of this piece.",
      date: "2025-12-01",
      content: (
        <>
          <p>
            This is the full post content. It renders on your website, not an
            external link.
          </p>
          <h4>A section header</h4>
          <p>
            Write more paragraphs here. You can include <strong>bold</strong>,
            lists, links, etc.
          </p>
        </>
      ),
    },
    */
  ];

  const [activeSlug, setActiveSlug] = React.useState<string | null>(null);

  const activePost = React.useMemo(
    () => posts.find((p) => p.slug === activeSlug) ?? null,
    [posts, activeSlug]
  );

  if (activePost) {
    return (
      <section className="writing" aria-label="Writing post">
        <button
          type="button"
          className="writingBack"
          onClick={() => setActiveSlug(null)}
        >
          ← Back to writing
        </button>

        <header className="postHeader">
          <h3 className="postH1">{activePost.title}</h3>
          {activePost.date ? (
            <div className="postMeta">{activePost.date}</div>
          ) : null}
        </header>

        <article className="postBody">{activePost.content}</article>
      </section>
    );
  }

  return (
    <section className="writing" aria-label="Writing posts">
      <h3>Some thoughts ...</h3>

      <ul className="postList">
        {posts.map((post) => (
          <li key={post.slug} className="postItem">
            <button
              type="button"
              className="postCard"
              onClick={() => setActiveSlug(post.slug)}
              aria-label={`Open post: ${post.title}`}
            >
              <div className="postTitleRow">
                <span className="postTitle">{post.title}</span>
                {post.date ? <span className="postDate">{post.date}</span> : null}
              </div>
              <p className="postSummary">{post.summary}</p>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
