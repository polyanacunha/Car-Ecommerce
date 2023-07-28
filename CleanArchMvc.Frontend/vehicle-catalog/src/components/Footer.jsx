import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo-text">Voltus</span>
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">Sobre</a>
          <a href="/contact">Contato</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
