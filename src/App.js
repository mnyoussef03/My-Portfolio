import React, { useState } from "react"; // Added useState
import { Link } from "react-scroll"; // For smooth scrolling
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaBriefcase,
  FaGraduationCap,
  FaArrowDown,
  FaBook,
  FaServer,
} from "react-icons/fa";
import "./App.css";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., EmailJS)
    alert(
      "Message sent! (This is a demo—integrate with a backend for real use.)"
    );
  };

  // State for About tabs (default: Education)
  const [activeTab, setActiveTab] = useState("education");

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">EL Mostain Youssef</div>
          <ul className="nav-menu">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <img
            src="/Profile.png"
            alt="EL Mostain Youssef"
            className="hero-img"
          />
          <h1>EL Mostain Youssef</h1>
          <h2>Full-Stack Developer</h2>
          <p>
            I'm a Full-Stack Developer based in Casablanca, passionate about web
            development and experienced with ERP systems like Odoo.
          </p>
          <div className="hero-links">
            <a
              href="https://github.com/mnyoussef03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/youssef-el-mostain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <Link to="about" smooth={true} duration={500} className="scroll-down">
            <FaArrowDown />
          </Link>
        </div>
      </section>

      {/* About Section - Side-by-Side: Text Left, Taller Image Right (With Tabs) */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            {/* Text on Left - With Tabs */}
            <div className="about-text">
              <p>
                I'm a 22 year old Full-Stack Developer based in Casablanca,
                passionate about building modern and efficient web applications.
                With experience in technologies like JavaScript, PHP, Python,
                React, and Laravel, I enjoy turning ideas into functional
                digital solutions. I’ve also gained solid hands-on experience
                working with ERP systems such as Odoo developing custom modules,
                integrating data models, and designing user-friendly interfaces.
                Curious and driven, I’m constantly improving my skills and
                exploring new tools to deliver clean, scalable, and creative
                solutions for real world problems.
              </p>

              {/* Tabbed Details */}
              <div className="about-details">
                {/* Tab Buttons */}
                <div className="tabs">
                  <button
                    className={`tab-button ${
                      activeTab === "education" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("education")}
                  >
                    <FaGraduationCap /> Education
                  </button>
                  <button
                    className={`tab-button ${
                      activeTab === "experience" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("experience")}
                  >
                    <FaBriefcase /> Experience
                  </button>
                </div>

                {/* Tab Content - Conditional Render */}
                <div className="tab-content">
                  {activeTab === "education" ? (
                    <div className="detail">
                      <FaGraduationCap className="tab-icon" />
                      <div>
                        <h3>Education</h3>
                        <ul className="education-list">
                          <li>
                            Specialized Technician Diploma in Digital
                            Development (Web Full Stack Option), Mixed
                            Professional Training Center Lalla Aicha, Casablanca
                            (Sept 2022 - July 2024).
                          </li>
                          <li>
                            Automotive Diagnostics and Embedded Electronics
                            Program, CREA OFPPT Center, Casablanca (Sept 2021 -
                            July 2022).
                          </li>
                          <li>
                            Matter Sciences (Physics-Chemistry) (SMPC), Faculty
                            of Sciences Ain Chock (FSAC), Casablanca (Sept 2020
                            - June 2021).
                          </li>
                          <li>
                            Baccalaureate in Physical Sciences (French Option),
                            Amr Ibn Al Aass High School, Casablanca (Sept 2019 -
                            July 2020).
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="detail">
                      <FaBriefcase className="tab-icon" />
                      <div>
                        <h3>Experience</h3>
                        <ul className="experience-list">
                          <li>
                            Odoo Developer and Integrator at YELTECH Solutions
                            BTP, Casablanca (Sept 2022 - June 2024): Developed
                            Odoo modules for construction resource management
                            using Python, XML, and PostgreSQL.
                          </li>
                          <li>
                            Website Creator at YELTECH Solutions BTP (June 2024
                            - July 2024): Built a responsive WordPress site with
                            Elementor and contact form integration.
                          </li>
                          <li>
                            Full Stack Web Development Internship (PFE) at AGOUZ
                            TRANS, Casablanca (April 2024 - May 2024): Created a
                            truck rental management platform using HTML, CSS,
                            JS, PHP, and MySQL.
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Image on Right - Taller */}
            <div className="about-image">
              <img
                src="/El_moustain_Youssef.png"
                alt="EL Mostain Youssef Profile"
                className="about-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-scroller">
            <div className="skills-track">
              {/* Original skills */}
              <div className="skill-item">
                <FaHtml5 size={50} />
                <span>HTML/CSS/SCSS</span>
              </div>
              <div className="skill-item">
                <FaJs size={50} />
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <FaReact size={50} />
                <span>React</span>
              </div>
              <div className="skill-item">
                <FaPhp size={50} />
                <span>PHP/Laravel</span>
              </div>
              <div className="skill-item">
                <FaPython size={50} />
                <span>Python</span>
              </div>
              <div className="skill-item">
                <FaDatabase size={50} />
                <span>MySQL/PostgreSQL/MongoDB</span>
              </div>
              <div className="skill-item">
                <FaGitAlt size={50} />
                <span>Git/GitHub</span>
              </div>
              <div className="skill-item">
                <FaServer size={50} /> {/* Reuse for REST API */}
                <span>REST API/Postman</span>
              </div>
              {/* Duplicated for infinite loop */}
              <div className="skill-item">
                <FaHtml5 size={50} />
                <span>HTML/CSS/SCSS</span>
              </div>
              <div className="skill-item">
                <FaJs size={50} />
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <FaReact size={50} />
                <span>React</span>
              </div>
              <div className="skill-item">
                <FaPhp size={50} />
                <span>PHP/Laravel</span>
              </div>
              <div className="skill-item">
                <FaPython size={50} />
                <span>Python</span>
              </div>
              <div className="skill-item">
                <FaDatabase size={50} />
                <span>MySQL/PostgreSQL/MongoDB</span>
              </div>
              <div className="skill-item">
                <FaGitAlt size={50} />
                <span>Git/GitHub</span>
              </div>
              <div className="skill-item">
                <FaServer size={50} />
                <span>REST API/Postman</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <img src="/projects/movie-app.png" alt="MNYF Movie App" />
              <h3>MNYF Movie App</h3>
              <p>
                Movie streaming website (under development). Developing a
                website to browse and stream movies.
              </p>
              <div className="tech-stack">
                <span>Laravel</span>
                <span>PHP</span>
                <span>Blade</span>
                <span>JavaScript</span>
                <span>API</span>
                <span>Tailwind CSS</span>
                <span>Vite</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Live Demo (Coming Soon)
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  GitHub (In Progress)
                </a>
              </div>
            </div>
            <div className="project-card">
              <img src="/projects/hr-app.png" alt="HR Management App" />
              <h3>Human Resources Management Application</h3>
              <p>Developing a simple application to manage human resources.</p>
              <div className="tech-stack">
                <span>Laravel</span>
                <span>PHP</span>
                <span>Blade</span>
                <span>JavaScript</span>
                <span>Bootstrap</span>
                <span>jQuery</span>
                <span>MySQL</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Live Demo (Coming Soon)
                </a>
                <a
                  href="https://github.com/mnyoussef03/ressources_h"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="project-card">
              <img
                src="/projects/tourist-interface.png"
                alt="Tourist Web Interface"
              />
              <h3>Tourist Web Interface</h3>
              <p>
                Creating an interactive web interface to explore Moroccan cities
                for tourists.
              </p>
              <div className="tech-stack">
                <span>React</span>
                <span>JavaScript</span>
                <span>XML</span>
                <span>CSS</span>
                <span>SCSS</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Live Demo (Coming Soon)
                </a>
                <a
                  href="https://github.com/mnyoussef03/MNYF_Travel-"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="project-card">
              <img src="/projects/yeltech-site.png" alt="YELTECH Website" />
              <h3>YELTECH Solutions BTP Showcase Website</h3>
              <p>
                Development of a showcase website using WordPress with
                Elementor, responsive design, and integration of a contact form.
              </p>
              <div className="tech-stack">
                <span>WordPress</span>
                <span>Elementor</span>
              </div>
              <div className="project-links">
                <a
                  href="https://yeltech.ma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  GitHub (N/A)
                </a>
              </div>
            </div>
            <div className="project-card">
              <img src="/projects/lost_in_space.png" alt="LOST IN SPACE" />
              <h3>LOST IN SPACE (Children's Book)</h3>
              <p>
                Let's read this story that shows us the adventures of Ava and
                Jack in space. It also shows us the extent of their courage and
                intelligence in the face of difficult situations. Here are 10
                important pieces of information about the world of space and the
                universe that can serve as a barometer for children's minds.
                Published on KDP Amazon, created with Canva.
              </p>
              <div className="tech-stack">
                <span>Canva</span>
                <span>Creative Writing</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Live Demo (Amazon KDP)
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  GitHub (N/A)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <p>Let's discuss your next project or opportunity!</p>
          <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
          <div className="social-links">
            <a
              href="https://github.com/mnyoussef03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://linkedin.com/in/youssef-el-mostain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
            <a href="mailto:mnyoussef369@gmail.com">
              <FaEnvelope size={30} />
            </a>
            <a
              href="https://instagram.com/youssef_el_mostain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://twitter.com/el_mostain_youssef"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://wa.me/212608944738"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={30} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 EL Mostain Youssef. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
