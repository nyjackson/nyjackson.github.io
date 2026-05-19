import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { HERO } from "../constants";
import '../../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p className="footer-copyright">
            &copy; {currentYear} <span className="font-medium">Nyala Jackson</span>. All rights reserved.
          </p>
        </div>
        
        <div className="footer-right">
          <div className="footer-links">
            <a href={HERO.links.github} target="_blank" rel="noreferrer" className="footer-link" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={HERO.links.linkedin} target="_blank" rel="noreferrer" className="footer-link" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${HERO.links.email}`} className="footer-link" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;