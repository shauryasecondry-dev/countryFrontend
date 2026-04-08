import Contact from "./Contact.jsx";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";

function ContactPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* Header */}
      <Navbar />

      {/* Content (centered) */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ContactPage;