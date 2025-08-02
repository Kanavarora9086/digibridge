import React from "react";
import { Link } from "react-router-dom";

const Skills = () => (
  <>
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/">
          <i className="fas fa-bridge me-2"></i>DigiBridge
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/skills">Learn Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resources">Find Resources</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/downloads">Downloads</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/help">Get Help</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {/* Header */}
    <header className="bg-success text-white py-5 mt-5">
      <div className="container text-center">
        <h1 className="display-4 fw-bold">Learn Essential Digital Skills</h1>
        <p className="lead">
          Start your journey with beginner-friendly skills to become tech-savvy
        </p>
      </div>
    </header>

    {/* Skills Section */}
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          {[
            {
              icon: "fas fa-mouse-pointer",
              title: "Using a Computer",
              text: "Learn how to use a mouse, keyboard, and desktop system effectively.",
              link: "https://edu.gcfglobal.org/en/computers/",
              btnClass: "success",
            },
            {
              icon: "fas fa-envelope-open-text",
              title: "Email & Communication",
              text: "Create email accounts and communicate safely and clearly online.",
              link: "https://edu.gcfglobal.org/en/email101/",
              btnClass: "primary",
            },
            {
              icon: "fas fa-globe-asia",
              title: "Using the Internet",
              text: "Discover how to search, browse, and use online services safely.",
              link: "https://edu.gcfglobal.org/en/internetbasics/",
              btnClass: "danger",
            },
            {
              icon: "fas fa-mobile-alt",
              title: "Smartphone Basics",
              text: "Understand how to use Android phones, apps, calling, and SMS.",
              link: "https://www.wikihow.com/Use-an-Android-Phone",
              btnClass: "warning",
            },
            {
              icon: "fas fa-shopping-cart",
              title: "Digital Payments",
              text: "Learn UPI, mobile banking, and safe online transactions.",
              link: "https://www.youtube.com/watch?v=PY9FdOV4IuA",
              btnClass: "secondary",
            },
            {
              icon: "fas fa-lock",
              title: "Cyber Safety",
              text: "Know how to protect your data, avoid scams, and set strong passwords.",
              link: "https://www.staysafeonline.org",
              btnClass: "dark",
            },
          ].map((skill, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <i className={`${skill.icon} fa-3x text-${skill.btnClass} mb-3`}></i>
                  <h5 className="card-title fw-bold">{skill.title}</h5>
                  <p className="card-text">{skill.text}</p>
                  <a
                    className={`btn btn-outline-${skill.btnClass}`}
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <p className="mb-0">© 2025 DigiBridge. Empowering through digital literacy.</p>
      </div>
    </footer>
  </>
);

export default Skills;
