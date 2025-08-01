import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Resources = () => {
  useEffect(() => {
    const map = L.map("map").setView([20.5937, 78.9629], 5); // Default: India

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    }).addTo(map);

    map.locate({ setView: true, maxZoom: 15 });

    map.on("locationfound", (e) => {
      const radius = e.accuracy;
      const { lat, lng } = e.latlng;

      L.marker(e.latlng)
        .addTo(map)
        .bindPopup("📍 You are here")
        .openPopup();

      L.circle(e.latlng, {
        radius,
        color: "blue",
        fillColor: "#cce5ff",
        fillOpacity: 0.3,
      }).addTo(map);

      // 🛰️ Overpass API: Real Nearby Places (Mandirs, Banks, ATMs, NGOs)
      const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];(
        node["amenity"="bank"](around:2000,${lat},${lng});
        node["amenity"="atm"](around:2000,${lat},${lng});
        node["amenity"="place_of_worship"](around:2000,${lat},${lng});
        node["amenity"="ngo"](around:2000,${lat},${lng});
      );out;`;

      fetch(overpassUrl)
        .then((res) => res.json())
        .then((data) => {
          data.elements.forEach((el) => {
            const type = el.tags.amenity || "Amenity";
            const name = el.tags.name || "Unnamed Location";

            L.marker([el.lat, el.lon])
              .addTo(map)
              .bindPopup(`<b>${name}</b><br/>Type: ${type}`);
          });
        })
        .catch((err) => console.error("❌ Failed to fetch OSM data:", err));
    });

    map.on("locationerror", () => {
      alert("⚠️ Location access denied. Please allow location in your browser.");
    });

    return () => map.remove();
  }, []);

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
              <li className="nav-item"><Link className="nav-link active" to="/resources">Find Resources</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/downloads">Downloads</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/help">Get Help</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-primary text-white py-5 mt-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Find Learning Resources</h1>
          <p className="lead">
            Explore guides, tools, and tutorials to enhance your digital knowledge
          </p>
        </div>
      </header>

      {/* Resources Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {[
              {
                icon: "fas fa-laptop-code",
                color: "text-primary",
                title: "Basic Computer Skills",
                text: "Step-by-step tutorials for beginners on using computers and devices.",
                link: "https://www.gcflearnfree.org/computers",
                btnText: "Explore",
              },
              {
                icon: "fas fa-globe",
                color: "text-success",
                title: "Internet Safety",
                text: "Learn how to stay safe online with simple guides on passwords and privacy.",
                link: "https://www.cybercrime.gov.in",
                btnText: "Stay Safe",
              },
              {
                icon: "fas fa-mobile-alt",
                color: "text-warning",
                title: "Mobile Literacy",
                text: "Understand how to use smartphones for communication, banking, and more.",
                link: "https://www.youtube.com/watch?v=Mm8M13rU_6g",
                btnText: "Watch Video",
              },
              {
                icon: "fas fa-cloud-download-alt",
                color: "text-info",
                title: "Free Software Tools",
                text: "Download open-source apps for editing, office work, and online classes.",
                link: "/downloads",
                btnText: "View Tools",
              },
              {
                icon: "fas fa-book-reader",
                color: "text-secondary",
                title: "Digital Guides (PDF)",
                text: "Access easy-to-read booklets on using technology in everyday life.",
                link: "/downloads#pdfs",
                btnText: "Read Guides",
              },
              {
                icon: "fas fa-chalkboard-teacher",
                color: "text-danger",
                title: "Workshops & Webinars",
                text: "Join live training events and recordings hosted by DigiBridge experts.",
                link: "https://meet.google.com",
                btnText: "Join Events",
              },
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 shadow-sm text-center">
                  <div className="card-body">
                    <i className={`${item.icon} fa-3x ${item.color} mb-3`}></i>
                    <h5 className="fw-bold">{item.title}</h5>
                    <p>{item.text}</p>
                    <a
                      className={`btn btn-outline-${item.color.split("-")[1]}`}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.btnText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-primary mb-4">📍 Nearby Amenities on Map</h2>
          <p className="text-center text-muted mb-4">
            Your location with nearby Mandirs, Banks, NGOs, and ATMs.
          </p>
          <div
            id="map"
            style={{
              height: "500px",
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          ></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <div className="container">
          <p className="mb-0">© 2025 DigiBridge. Empowering through digital literacy.</p>
        </div>
      </footer>
    </>
  );
};

export default Resources;
