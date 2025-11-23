import React from "react";
import healthcareImg from "./assets/healthcare.png";
import externalSortImg from "./assets/externalsort.png";
import agenticAiImg from "./assets/agentic-ai.png"

const projects = [
  {
    title: "HealthCare – Handling Healthcare Data",
    description:
      "A Python-based project for exploring and processing healthcare-related datasets with a focus on data quality, validation, and basic analytics.",
    tech: ["Python", "Pandas", "Pydantic", "NumPy"],
    github: "https://github.com/YonatanHarel/HealthCare",
    image: healthcareImg,
    imageAlt: "CT/MRI style healthcare illustration"
  },
  {
    title: "External Sort – Large-Scale Sorting",
    description:
      "An external sorting implementation in Java and Python designed to handle datasets that don't fit into memory, using file-based chunking and merge strategies.",
    tech: ["Java", "Python", "Algorithms"],
    github: "https://github.com/YonatanHarel/ExternalSort",
    image: externalSortImg,
    imageAlt: "Illustration of files and sorting arrows"
  },
  {
    title: "Agentic AI – Mini Projects & Demos",
    description:
      "A collection of mini-projects and demos built while following 'The Complete Agentic AI Engineering Course' by Ed Donner, experimenting with agentic patterns and orchestration.",
    tech: ["Python", "OpenAI SDK", "CrewAI", "Asyncio", "LLMs", "MCP"],
    github: "https://github.com/YonatanHarel/Agentic-AI",
    image: agenticAiImg,
    imageAlt: "Abstract AI/agent network illustration"
  },
];

const skills = [
  "Python",
  "Java",
  "JavaScript / TypeScript",
  "Data Processing & ETL",
  "Pandas / NumPy",
  "APIs & Backend",
  "Agentic AI & LLMs",
];

function App() {
  return (
    <div className="page">
      <header className="hero" id="top">
        <nav className="navbar">
          <a href="#top" className="logo">
            YH
          </a>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
            <a
              href="https://github.com/YonatanHarel"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="hero-eyebrow">Software Developer & Data Enthusiast</p>
          <h1 className="hero-title">Hi, I'm Yonatan Harel 👋</h1>
          <p className="hero-subtitle">
            I enjoy solving problems at the intersection of{" "}
            <strong>software engineering</strong>,{" "}
            <strong>data processing</strong>, and{" "}
            <strong>AI/agentic systems</strong>. I like building clear,
            maintainable solutions and experimenting with new tools and
            architectures.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View selected projects
            </a>
            <a
              className="btn btn-ghost"
              href="https://github.com/YonatanHarel"
              target="_blank"
              rel="noreferrer"
            >
              Visit my GitHub
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="projects" className="section">
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-intro">
            A few projects that showcase how I work with data, algorithms, and
            AI tooling.
          </p>

          <div className="projects-grid">
  {projects.map((project) => (
    <article key={project.title} className="project-card">
      {project.image && (
        <div className="project-media">
          <img
            src={project.image}
            alt={project.imageAlt || project.title}
            className="project-image"
          />
        </div>
      )}

      <div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="project-tags">
          {project.tech.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>

      <div className="project-links">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          View on GitHub ↗
        </a>
      </div>
    </article>
  ))}
</div>
        </section>

        <section id="skills" className="section section-alt">
          <h2 className="section-title">Skills & Focus Areas</h2>
          <p className="section-intro">
            I combine backend, data, and AI tools to build practical solutions.
          </p>
          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill} className="skill-badge">
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section">
          <h2 className="section-title">Contact</h2>
          <p className="section-intro">
            Interested in collaborating, have a question about one of my
            projects, or just want to say hi?
          </p>

          <div className="contact-box">
            <p>
              You can reach me via email or explore more of my work on GitHub.
            </p>
            <div className="contact-actions">
              <a className="btn btn-primary" href="mailto:you@example.com">
                Email me
              </a>
              <a
                className="btn btn-ghost"
                href="https://github.com/YonatanHarel"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Profile
              </a>
            </div>
            <p className="contact-note">
              (Replace <code>you@example.com</code> with your real address in
              the code.)
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Yonatan Harel. Built with React and
          deployed via GitHub Pages.
        </p>
      </footer>
    </div>
  );
}

export default App;
