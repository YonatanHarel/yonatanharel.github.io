          import React from "react";
          import BackToTop from "./components/BackToTop";
          import healthcareImg from "./assets/healthcare.png";
          import externalSortImg from "./assets/externalsort.png";
          import agenticAiImg from "./assets/agentic-ai.png"
          import awsBotoImg from "./assets/aws-python-boto3.webp"
          import profileImg from "./assets/me.jpg"


          const LinkedInIcon = () => (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.98 3.5C4.98 4.604 4.104 5.5 3 5.5C1.896 5.5 1 4.604 1 3.5C1 2.396 1.896 1.5 3 1.5C4.104 1.5 4.98 2.396 4.98 3.5ZM5 7H1V23H5V7ZM8 7H12V9.1H12.06C12.63 8.057 14.02 6.94 16.2 6.94C21.06 6.94 22 9.97 22 14.14V23H18V15.07C18 12.88 17.96 10.16 15.12 10.16C12.24 10.16 12 12.54 12 14.9V23H8V7Z"/>
            </svg>
          );

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
              title: "AWS Cognito - Backup and Restore",
              description:
                "A utility for backing up and restoring AWS Cognito user pools, including users and configuration, using automation scripts and AWS APIs.",
              tech: ["Python", "Boto3", "AWS Cognito", "AWS Lambda"],
              github: "https://github.com/YonatanHarel/AWS-Cognito-backup-and-restore",
              image: awsBotoImg,
              imageAlt: "Illustration of files and sorting arrows"
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
              status: "WORK IN PROGRESS",
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
                      <a href="#resume">Resume</a>
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
                    <div className="hero-left">
                      <div className="hero-photo">
                        <img src={profileImg} alt="Yonatan Harel" />
                      </div>
                    </div>
                    <div className="hero-right">
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
                          <a
                          className="btn btn-ghost linkedin-btn"
                          href="https://www.linkedin.com/in/yonatan-harel"
                          target="_blank"
                          rel="noreferrer"
                        ><LinkedInIcon />LinkedIn
                        </a>
                        </div>
                    </div>
                    </div>
                </header>

                <main>
                  <section id="intro" className="section section-alt">
            <h2 className="section-title">Introduction</h2>
            <p className="section-intro" style={{ maxWidth: "750px", margin: "0 auto" }}>
            I'm a software developer passionate about building clean, scalable, and data-driven systems.
        My work centers on backend engineering, data pipelines, and platform development, using Python, Java, and modern AI tooling to turn ideas into robust solutions.

        I’m a self-taught learner who thrives on exploring new technologies, solving complex problems, and pushing my skillset forward.
        Recently, I've expanded into advanced AI approaches — including agentic AI, MCP, and workflow automation - allowing me to build smarter, more adaptive systems that drive real impact.
              <br /><br />
              Below are a few selected projects that highlight my interests in
              data-processing, algorithms, backend engineering, and AI-powered
              experimentation.
            </p>
          </section>

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
                  {/* <h3 className="project-title">{project.title}</h3> */}
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                      {project.status && (
                        <span className="project-badge">{project.status}</span>
                      )}
                  </div>
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
                  
                  <section id="resume" className="section">
                    <h2 className="section-title">Resume</h2>
                    <p className="section-intro">
                      A concise overview of my background, experience, and education.
                    </p>

                    <div className="resume-grid">
                      {/* Left column – Summary & Contact */}
                      <div className="resume-column">
                        <div className="resume-card">
                          <h3 className="resume-heading">Summary</h3>
                          <p className="resume-text">
                            Software developer with a strong interest in data processing,
                            backend systems, and AI/agentic architectures. Experienced
                            with Python, Java, and modern tooling around large language
                            models and automation. Curious, detail-oriented, and focused
                            on writing clear, maintainable code.
                          </p>
                        </div>

                        <div className="resume-card">
                          <h3 className="resume-heading">Core Skills</h3>
                          <ul className="resume-list">
                            <li>Python, Java, JavaScript / TypeScript</li>
                            <li>Data processing, ETL, Pandas, NumPy</li>
                            <li>REST APIs, backend services</li>
                            <li>Agentic AI, LLM orchestration, OpenAI SDK</li>
                            <li>Testing, debugging, and performance awareness</li>
                          </ul>
                        </div>

                        <div className="resume-card">
                          <h3 className="resume-heading">Contact</h3>
                          <p className="resume-text">
                            <strong>Email:</strong> yonatan.harel@mail.com
                            <br />
                            <strong>GitHub:</strong>{" "}
                            <a
                              href="https://github.com/YonatanHarel"
                              target="_blank"
                              rel="noreferrer"
                              className="resume-link"
                            >
                              github.com/YonatanHarel
                            </a>
                          </p>
                          <p className="resume-note">
                            (yonatan.harel@mail.com)
                          </p>
                        </div>
                      </div>

                      {/* Right column – Experience & Education */}
                      <div className="resume-column">
                        <div className="resume-card">
                          <h3 className="resume-heading">Experience</h3>

                          <div className="resume-item">
                            <div className="resume-item-header">
                              <span className="resume-item-title">
                                Software Projects & Self-Driven Learning
                              </span>
                              <span className="resume-item-dates">
                                20XX – Present
                              </span>
                            </div>
                            <p className="resume-item-subtitle">
                              Personal projects in data processing, algorithms, and AI.
                            </p>
                            <ul className="resume-list">
                              <li>
                                Built <strong>HealthCare</strong> data project using
                                Python, Pandas, Pydantic, and NumPy to explore and clean
                                healthcare datasets.
                              </li>
                              <li>
                                Implemented <strong>External Sort</strong> in Java and
                                Python to handle large datasets that do not fit into
                                memory.
                              </li>
                              <li>
                                Experimented with <strong>Agentic AI</strong> setups using
                                the OpenAI SDK, CrewAI, Syncio and related tools while
                                following agentic AI engineering best practices.
                              </li>
                            </ul>
                          </div>

                          {/* הוסף כאן ניסיון עבודה אמיתי כשיהיה */}
                          <div className="resume-item resume-item-placeholder">
                            <div className="resume-item-header">
                              <span className="resume-item-title">
                                [Your Job Title / Role]
                              </span>
                              <span className="resume-item-dates">
                                [Dates, e.g. 2023 – Present]
                              </span>
                            </div>
                            <p className="resume-item-subtitle">[Company / Organization]</p>
                            <ul className="resume-list">
                              <li>[Responsibility or achievement #1]</li>
                              <li>[Responsibility or achievement #2]</li>
                              <li>[Responsibility or achievement #3]</li>
                            </ul>
                          </div>
                        </div>

                        <div className="resume-card">
                          <h3 className="resume-heading">Education</h3>

                          <div className="resume-item">
                            <div className="resume-item-header">
                              <span className="resume-item-title">
                                [Degree / Program Name]
                              </span>
                              <span className="resume-item-dates">
                                [Years, e.g. 2019 – 2023]
                              </span>
                            </div>
                            <p className="resume-item-subtitle">
                              [University / College / Bootcamp]
                            </p>
                            <p className="resume-text">
                              Short description of your studies, areas of focus, or
                              notable projects.
                            </p>
                          </div>

                          <div className="resume-item">
                            <div className="resume-item-header">
                              <span className="resume-item-title">
                                The Complete Agentic AI Engineering Course
                              </span>
                              <span className="resume-item-dates">
                                Udemy – Ed Donner
                              </span>
                            </div>
                            <p className="resume-text">
                              Followed a hands-on course on agentic AI engineering,
                              including building multi-step agents, tool use, and
                              orchestration patterns with LLMs.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Optional: Add a PDF download button once you have a file */}
                    <div className="resume-download">
                      <p className="resume-note">
                        Once you have a PDF version of your CV, you can place it in the
                        project (for example under <code>public/cv.pdf</code>) and link it
                        here:
                      </p>
                      <a
                        className="btn btn-ghost"
                        href="/cv.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download CV (PDF)
                      </a>
                    </div>
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
                        <a className="btn btn-primary" href="mailto:yonatan.harel@mail.com">
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
                      {/* <p className="contact-note">
                        (Replace <code>you@example.com</code> with your real address in
                        the code.)
                      </p> */}
                    </div>
                  </section>
                </main>

                <footer className="footer">
                  <p>
                    © {new Date().getFullYear()} Yonatan Harel. Built with React and
                    deployed via GitHub Pages.
                  </p>
                </footer>
                <BackToTop />
              </div>
            );
          }

          
          export default App;
