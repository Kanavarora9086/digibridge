import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/main.css"; // ✅ Correct path to main.css


const Downloads = () => (
  <>
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">DigiBridge</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/skills">Learn Skills</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/resources">Resources</Link></li>
            <li className="nav-item"><Link className="nav-link active" to="/downloads">Downloads</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/help">Help</Link></li>
          </ul>
        </div>
      </div>
    </nav>

    {/* Download Section */}
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">📥 Downloadable Resources</h2>
        <p className="text-center text-muted mb-5">
          Click to download useful materials and tools for learning.
        </p>
        <div className="row g-4">
          {/* Resource Cards */}
          {[
            {
              icon: "fas fa-file-pdf text-danger",
              title: "Digital Literacy PDF",
              link: "assets/pdf/digital-literacy.pdf",
            },
            {
              icon: "fas fa-book text-warning",
              title: "Computer Basics Guide",
              link: "assets/pdf/computer-basics.pdf",
            },
            {
              icon: "fas fa-mobile-alt text-success",
              title: "Mobile App Tips",
              link: "assets/pdf/mobile-apps.pdf",
            },
          ].map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow-sm h-100 text-center">
                <div className="card-body">
                  <i className={`${item.icon} fa-3x mb-3`}></i>
                  <h5 className="card-title">{item.title}</h5>
                  <a className="btn btn-outline-primary mt-2" download href={item.link}>
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* YouTube Section */}
    <section className="youtube-material py-5 bg-light">
      <div className="container">
        <h2 className="text-center text-primary fw-bold mb-4">
          <i className="fab fa-youtube me-2"></i>
          YouTube Study Material (Beginners to Class 12)
        </h2>
        <p className="text-center text-muted mb-5">
          Watch free video lessons to build your digital skills – from basics to advanced topics!
        </p>
        <div className="row g-4">
          {[
            {
              src: "https://www.youtube.com/embed/IqKieDk5t8U",
              title: "💻 Computer Basics (Hindi)",
              desc: "Understand how computers work, common terms, and basic operations.",
            },
            {
              src: "https://www.youtube.com/embed/Z_Dyuhc6f8E",
              title: "🌐 Using Internet & Email",
              desc: "Learn to browse the web, search, and use email securely.",
            },
            {
              src: "https://www.youtube.com/embed/I3G2QF3fLhI",
              title: "📱 Top 10 Study Apps",
              desc: "Explore apps for notes, time management, and test prep.",
            },
            {
              src: "https://www.youtube.com/embed/_G3F3N45fxc",
              title: "🔒 Cyber Safety Tips",
              desc: "Protect yourself online with these basic safety practices.",
            },
            {
              src: "https://www.youtube.com/embed/IrPbbBv8C0o",
              title: "📂 Google Docs & Drive",
              desc: "Learn how to create, edit and share files using Google tools.",
            },
            {
              src: "https://www.youtube.com/embed/f1Uywq9P8oc",
              title: "📘 Class 12 IT/CS (CBSE)",
              desc: "Covers theory, practicals, and important concepts for CBSE board.",
            },
          ].map((video, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <div className="ratio ratio-16x9">
                  <iframe
                    src={video.src}
                    title={video.title}
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <h6 className="fw-bold">{video.title}</h6>
                  <p className="text-muted small">{video.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-dark text-white py-3 text-center">
      <div className="container">
        <p className="mb-0">© 2025 DigiBridge. All rights reserved.</p>
      </div>
    </footer>
  </>
);

export default Downloads;
