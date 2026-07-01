import React, { useState, useRef } from "react";
import { Link } from "react-scroll";
import emailjs from "@emailjs/browser";
import {
  FaHtml5,
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
  FaServer,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("education");
  const [menuOpen, setMenuOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_k59k9gl", // ← remplace par ton Service ID
        "template_9kjvd41", // ← remplace par ton Template ID
        form.current,
        "Uc7aEOmZ36b-fcea3", // ← remplace par ta Public Key
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">EL Mostain Youssef</div>

          <button
            className="burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
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
            
              href="https://github.com/mnyoussef03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            
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

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a 22 year old Full-Stack Developer based in Casablanca,
                passionate about building modern and efficient web applications.
                With experience in technologies like JavaScript, PHP, Python,
                React, and Laravel, I enjoy turning ideas into functional
                digital solutions. I've also gained solid hands-on experience
                working with ERP systems such as Odoo developing custom modules,
                integrating data models, and designing user-friendly interfaces.
                Curious and driven, I'm constantly improving my skills and
                exploring new tools to deliver clean, scalable, and creative
                solutions for real world problems.
              </p>

              <div className="about-details">
                <div className="tabs">
                  <button
                    className={`tab-button ${activeTab === "education" ? "active" : ""}`}
                    onClick={() => setActiveTab("education")}
                  >
                    <FaGraduationCap /> Education
                  </button>
                  <button
                    className={`tab-button ${activeTab === "experience" ? "active" : ""}`}
                    onClick={() => setActiveTab("experience")}
                  >
                    <FaBriefcase /> Experience
                  </button>
                </div>

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
                            BTP, Casablanca (Feb 2025 - Aug 2025): Developed
                            Odoo modules for construction resource management
                            using Python, XML, and PostgreSQL.
                          </li>
                          <li>
                            Website Creator at YELTECH Solutions BTP (June 2025
                            - July 2025): Built a responsive WordPress site with
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
                <span className="link-disabled">Live Demo (Coming Soon)</span>
                <span className="link-disabled">GitHub (In Progress)</span>
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
                <span className="link-disabled">Live Demo (Coming Soon)</span>
                
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
                <span className="link-disabled">Live Demo (Coming Soon)</span>
                
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
                
                  href="https://yeltech.ma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <span className="link-disabled">GitHub (N/A)</span>
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
                <span className="link-disabled">Live Demo (Amazon KDP)</span>
                <span className="link-disabled">GitHub (N/A)</span>
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
          <form ref={form} onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
          <div className="social-links">
            
              href="https://github.com/mnyoussef03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            
              href="https://linkedin.com/in/youssef-el-mostain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
            <a href="mailto:mnyoussef369@gmail.com">
              <FaEnvelope size={30} />
            </a>
            
              href="https://instagram.com/youssef_el_mostain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} />
            </a>
            
              href="https://twitter.com/el_mostain_youssef"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={30} />
            </a>
            
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
