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
      A detailed overview of my professional background, technical expertise, and industry experience.
    </p>

    <div className="resume-card" style={{ marginBottom: "2rem" }}>
      <h3 className="resume-heading">Current Work & Focus</h3>
      <p className="resume-text">
        I am currently expanding my expertise in modern AI engineering and backend architecture. 
        My primary focus is on agentic AI patterns, workflow automation, and the Model Context Protocol (MCP). 
        I am experimenting with building end-to-end intelligent systems that combine LLMs, orchestration layers, 
        and scalable backend components.
        <br /><br />
        Alongside my AI work, I’m continuing to refine my backend engineering skills by designing 
        data-driven platforms, modernizing cloud architectures, and maintaining hands-on development 
        with Python, Java, and Golang. 
        I'm also actively building personal tools and utilities as part of my ongoing learning and experimentation.
      </p>
    </div>

    <div className="resume-grid">

      {/* LEFT COLUMN — SUMMARY + SKILLS + CONTACT */}
      <div className="resume-column">

        {/* Professional Summary */}
        <div className="resume-card">
          <h3 className="resume-heading">Professional Summary</h3>
          <p className="resume-text">
            Senior Backend Architect & Technical Lead with 15+ years of experience engineering scalable,
            cloud-native distributed systems. Expert in Microservices, Event-Driven Architecture, and Data Engineering. 
            Proven track record in the Security (SOAR) and AI domains, leading cross-functional teams to deliver
            critical infrastructure. Experienced in optimizing cloud lifecycles, reducing costs by 70%, and driving 
            engineering excellence in high-paced environments.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="resume-card">
          <h3 className="resume-heading">Technical Skills</h3>

          <h4 className="resume-subheading">Architecture</h4>
          <ul className="resume-list">
            <li>Microservices, Event-Driven Design, Serverless</li>
            <li>Distributed Systems, REST APIs, High Availability</li>
            <li>Data Modeling, System Design</li>
          </ul>

          <h4 className="resume-subheading">Cloud & DevOps</h4>
          <ul className="resume-list">
            <li>Azure DevOps, AWS (Lambda, EC2, IAM, Step Functions)</li>
            <li>Docker, Kubernetes, Terraform (IaC)</li>
            <li>CI/CD (Jenkins, GitHub Actions)</li>
          </ul>

          <h4 className="resume-subheading">Languages</h4>
          <ul className="resume-list">
            <li>Python, Golang, C++, Java, SQL</li>
          </ul>

          <h4 className="resume-subheading">Data & Databases</h4>
          <ul className="resume-list">
            <li>Postgres, MySQL, MSSQL, DynamoDB</li>
            <li>Kafka, Stream Processing, ETL/ELT Pipelines, Data Lakes</li>
          </ul>

          <h4 className="resume-subheading">Security</h4>
          <ul className="resume-list">
            <li>SOAR Systems, Secrets Management, Zero Trust principles</li>
            <li>Monitoring & Alerting</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="resume-card resume-contact">
          <h3 className="resume-heading">Contact</h3>
          <p className="resume-text">
            <strong>Email:</strong> yonatan.harel@mail.com<br />
            {/* <strong>Phone:</strong> 0585-705622<br /> */}
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/YonatanHarel" target="_blank" rel="noreferrer" className="resume-link">
              github.com/YonatanHarel
            </a>
            <br />
            <strong>LinkedIn:</strong>{" "}
            <a href="LINKEDIN_URL" target="_blank" rel="noreferrer" className="resume-link">
              LinkedIn Profile
            </a>
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN — EXPERIENCE + EDUCATION */}
      <div className="resume-column">

        {/* Experience */}
        <div className="resume-card">
          <h3 className="resume-heading">Professional Experience</h3>

          <div className="resume-item">
            <div className="resume-item-header">
              <span className="resume-item-title">CITADEL CONSULTING LTD. | Software Architect / Technical Lead</span>
              <span className="resume-item-dates">Jul 2023 – Jan 2025</span>
            </div>
            <ul className="resume-list">
              <li>Architected a comprehensive SOAR platform, leading the lifecycle from requirement definition to production.</li>
              <li>Designed resilient cloud architectures aligned with Well-Architected principles.</li>
              <li>Improved operational efficiency via automation and modern engineering practices.</li>
              <li>Mentored engineering teams and established secure coding standards.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <span className="resume-item-title">SKF AI | Software Architect / Technical Lead</span>
              <span className="resume-item-dates">Apr 2022 – Jul 2023</span>
            </div>
            <ul className="resume-list">
              <li>Led migration from monolithic systems to cloud microservices, reducing infra cost by 70%.</li>
              <li>Designed the Industrial Data Platform (IDP) enabling large-scale analytics.</li>
              <li>Introduced Golang for high-performance backend services.</li>
              <li>Improved production reliability by introducing automated testing and reviews.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <span className="resume-item-title">SKF AI | Senior Software Developer</span>
              <span className="resume-item-dates-inline">Jun 2021 – Apr 2022</span>
            </div>
            <ul className="resume-list">
              <li>Designed scalable ETL/ELT data pipelines for industrial analytics.</li>
              <li>Developed Terraform IaC for consistent cloud provisioning.</li>
              <li>Collaborated on data lake design for storage optimization.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <span className="resume-item-title">RAFAEL | Autonomous Systems Developer</span>
              <span className="resume-item-dates-inline">Jul 2019 – Jun 2021</span>
            </div>
            <ul className="resume-list">
              <li>Built real-time C/C++ flight control software for tactical weapon systems.</li>
              <li>Developed diagnostic tools for performance analysis.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <span className="resume-item-title">TADIAD | Lead Developer</span>
              <span className="resume-item-dates-inline">Dec 2017 – May 2018</span>
            </div>
            <ul className="resume-list">
              <li>Led a development team delivering business-critical features.</li>
            </ul>
          </div>


          <div className="resume-item">
            <div className="resume-item-header">
              <span className="resume-item-title">WONDERLOGIX | Software Developer</span>
              <span className="resume-item-dates-inline">May 2016 – Dec 2017</span>
            </div>
            <ul className="resume-list">
              <li>Developed an industrial automation design tool, delivering the MVP end-to-end.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <span className="resume-item-title">AMDOCS LTD. | Software Developer</span>
              <span className="resume-item-dates-inline">Aug 2014 – May 2016</span>
            </div>
            <ul className="resume-list">
              <li>Developed enterprise CRM systems in Java.</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <span className="resume-item-title">SAP | Development Intern & Engineer</span>
              <span className="resume-item-dates-inline">Aug 2009 – Jan 2014</span>
            </div>
            <ul className="resume-list">
              <li>Developed C++ components in the Master Data Management (MDM) group.</li>
              <li>Gained deep experience with enterprise software lifecycles and QA.</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="resume-card">
          <h3 className="resume-heading">Education</h3>

          <div className="resume-item">
            <span className="resume-item-title">MBA </span>
            <span className="resume-item-subtitle">Open University of Israel</span>
          </div>

          <div className="resume-item">
            <span className="resume-item-title">B.Sc. Computer Science & Information Systems  </span>
            <span className="resume-item-subtitle">University of Haifa</span>
          </div>
        </div>

      </div>
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
