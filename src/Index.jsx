import React, { useState } from "react";
import { Link } from "react-router-dom";
import './App.css';
import './assets/css/main.css';

const Index = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // Add your language switching logic here
    console.log('Language changed to:', e.target.value);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          <Link className="navbar-brand text-primary fw-bold" to="/">
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
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/skills">Skills</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/resources">Resources</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/downloads">Downloads</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/help">Help</Link></li>
              <li className="nav-item d-flex align-items-center">
                <select
                  className="form-select form-select-sm ms-2 w-auto"
                  value={language}
                  onChange={handleLanguageChange}
                >
                  <option value="en">English</option>
                  <option value="hi">हिंदी</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="hero-section text-white"
        id="home"
        style={{
          paddingTop: '100px',
          paddingBottom: '60px',
          background: 'linear-gradient(to right, #007bff, #00c6ff)',
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1
                className="fw-bold mb-4"
                style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', wordBreak: 'break-word' }}
              >
                Bridge the <span className="text-warning">Digital Divide</span>
              </h1>
              <p className="lead mb-4">
                Empowering communities through digital skills, free resources, and inclusive technology access.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link className="btn btn-warning btn-lg" to="/skills">
                  <i className="fas fa-graduation-cap me-2"></i>Start Learning
                </Link>
                <Link className="btn btn-outline-light btn-lg" to="/resources">
                  <i className="fas fa-map-marker-alt me-2"></i>Find Resources
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0 text-center">
              <i className="fas fa-laptop-code fa-5x"></i>
              <h4 className="mt-3 text-white">Digital Access for All</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="py-5 bg-light">
        <div className="container">
          <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner rounded shadow">
              {[
                {
                  icon: "fas fa-users",
                  title: "Empowering Communities",
                  text: "Access to digital skills for everyone, everywhere",
                },
                {
                  icon: "fas fa-book-open",
                  title: "Free Learning Materials",
                  text: "Offline guides, mobile-friendly modules, local help",
                },
                {
                  icon: "fas fa-hands-helping",
                  title: "Join the Digital Movement",
                  text: "Together, we bridge the divide",
                },
              ].map((slide, idx) => (
                <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
                  <div className="text-center py-5">
                    <i className={`${slide.icon} fa-3x mb-3`}></i>
                    <h5>{slide.title}</h5>
                    <p>{slide.text}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to={idx}
                  className={idx === 0 ? "active" : ""}
                  aria-current={idx === 0 ? "true" : undefined}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5" id="features">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-3">What We Offer</h2>
              <p className="lead text-muted">
                Everything you need to start your digital journey and bridge the technology gap.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {[
              {
                icon: "fas fa-graduation-cap text-primary",
                title: "Learn Digital Skills",
                desc: "Master computer basics, internet navigation, and essential digital literacy skills.",
                link: "/skills",
                btn: "Start Learning",
              },
              {
                icon: "fas fa-map-marker-alt text-success",
                title: "Find Resources",
                desc: "Locate nearby Wi-Fi spots, computer labs, and community centers.",
                link: "/resources",
                btn: "Find Locations",
              },
              {
                icon: "fas fa-download text-info",
                title: "Download Materials",
                desc: "Access offline guides and educational materials.",
                link: "/downloads",
                btn: "Download Now",
              },
              {
                icon: "fas fa-question-circle text-warning",
                title: "Get Support",
                desc: "Ask questions and connect with our community.",
                link: "/help",
                btn: "Get Help",
              },
            ].map((f, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="card h-100 text-center shadow-sm">
                  <div className="card-body">
                    <i className={`${f.icon} fa-3x mb-3`}></i>
                    <h5>{f.title}</h5>
                    <p>{f.desc}</p>
                    <Link className="btn btn-outline-dark" to={f.link}>
                      {f.btn}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <div className="container">
          <p className="mb-0">&copy; 2025 DigiBridge. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Index;
