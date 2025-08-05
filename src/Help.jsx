import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
// Bootstrap JS import not needed for React usage
import "./assets/css/main.css";


const Help = () => {
  const [language, setLanguage] = useState("en");
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    question: ""
  });

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // Add your language switching logic here
    console.log("Language changed to:", e.target.value);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (showSuccess) setShowSuccess(false);
  };

  const handleSubmit = (e) => {
    const form = e.target;
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      setShowSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        question: ""
      });
    }
    form.classList.add("was-validated");
  };

  return (
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
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/skills">Learn Skills</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/resources">Resources</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/downloads">Downloads</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/help">Get Help</Link></li>
              <li className="nav-item">
                <select
                  className="form-select form-select-sm ms-2"
                  id="languageSwitch"
                  value={language}
                  onChange={handleLanguageChange}
                >
                  <option value="en">English</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="page-header bg-primary text-white py-5 mt-5">
        <div className="container text-center">
          <i className="fas fa-question-circle fa-4x mb-3"></i>
          <h1 className="display-4 fw-bold mb-3">Need Help?</h1>
          <p className="lead">
            We're here to support you on your digital journey. Ask questions, get guidance, and connect with our community.
          </p>
        </div>
      </section>

      {/* Help Options */}
      <section className="help-options py-5">
        <div className="container">
          <div className="row g-4 mb-5">
            {[
              {
                icon: "fas fa-envelope text-primary",
                title: "Ask a Question",
                desc: "Get personalized help by submitting your question through our support form.",
              },
              {
                icon: "fas fa-book text-success",
                title: "Browse FAQ",
                desc: "Find answers to common questions about digital skills and technology.",
              },
              {
                icon: "fas fa-users text-info",
                title: "Community Support",
                desc: "Connect with other learners and experienced users in our community.",
              },
            ].map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 border-0 shadow-sm text-center p-4">
                  <i className={`${item.icon} fa-3x mb-3`}></i>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Form */}
      <section className="help-form py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow-lg border-0">
                <div className="card-header bg-primary text-white text-center py-4">
                  <h3 className="mb-0">
                    <i className="fas fa-question-circle me-2"></i>Ask Your Question
                  </h3>
                  <p className="mb-0 mt-2 text-white-50">We'll get back to you within 24 hours</p>
                </div>
                <div className="card-body p-4">
                  {showSuccess && (
                    <div className="alert alert-success" role="alert">
                      <i className="fas fa-check-circle me-2"></i>
                      <strong>Thank you!</strong> Your question has been submitted.
                    </div>
                  )}
                  <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="firstName" className="form-label">
                          <i className="fas fa-user me-2"></i>First Name *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                        <div className="invalid-feedback">Please enter your first name.</div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="lastName" className="form-label">
                          <i className="fas fa-user me-2"></i>Last Name *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                        <div className="invalid-feedback">Please enter your last name.</div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        <i className="fas fa-envelope me-2"></i>Email Address *
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      <div className="invalid-feedback">Please enter a valid email.</div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">
                        <i className="fas fa-heading me-2"></i>Subject *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                      />
                      <div className="invalid-feedback">Please enter a subject.</div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="question" className="form-label">
                        <i className="fas fa-comment-dots me-2"></i>Your Question *
                      </label>
                      <textarea
                        className="form-control"
                        id="question"
                        rows={6}
                        required
                        value={formData.question}
                        onChange={handleInputChange}
                      ></textarea>
                      <div className="invalid-feedback">Please enter your question.</div>
                    </div>

                    <div className="text-center mt-4">
                      <button type="submit" className="btn btn-primary px-5 py-2">
                        <i className="fas fa-paper-plane me-2"></i>Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          <p className="mb-0">© 2025 DigiBridge. Empowering through digital literacy.</p>
        </div>
      </footer>
    </>
  );
};

export default Help;
