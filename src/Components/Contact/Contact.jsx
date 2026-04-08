import React from "react";

function Contact() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "70vh",
        background: "linear-gradient(135deg, #e9ecef, #dee2e6)"
      }}
    >
      <div
        className="card shadow"
        style={{
          width: "40vw",
          borderRadius: "16px",
          border: "none",
          overflow: "hidden"
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "#242526",
            color: "white",
            padding: "18px",
            textAlign: "center",
            fontWeight: "500",
            letterSpacing: "0.5px"
          }}
        >
          Contact Information
        </div>

        {/* Body */}
        <div style={{ padding: "25px" }}>
          
          <div className="mb-3">
            <small className="text-muted">Email</small>
            <div
              style={{
                background: "#f8f9fa",
                padding: "10px",
                borderRadius: "8px"
              }}
            >
              shauryagrover@gmail.com
            </div>
          </div>

          <div className="mb-3">
            <small className="text-muted">Phone</small>
            <div
              style={{
                background: "#f8f9fa",
                padding: "10px",
                borderRadius: "8px"
              }}
            >
              9871*****
            </div>
          </div>

          <div className="mb-3">
            <small className="text-muted">GitHub</small>
            <a
              href="https://github.com/shauryasecondry-dev"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block",
                background: "#f8f9fa",
                padding: "10px",
                borderRadius: "8px",
                textDecoration: "none",
                color: "#212529"
              }}
            >
              github.com/shauryasecondry-dev
            </a>
          </div>

          <div>
            <small className="text-muted">LinkedIn</small>
            <a
              href="https://www.linkedin.com/in/shaurya-grover-9b937435a"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block",
                background: "#f8f9fa",
                padding: "10px",
                borderRadius: "8px",
                textDecoration: "none",
                color: "#212529"
              }}
            >
              View Profile
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;