import { ArrowDown, Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { useState, useEffect } from "react";
import { HERO, TERMINAL_OUTPUT } from "../constants";
import '../../styles/Hero.css'

const Hero = () => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    setDone(false);

    const interval = setInterval(() => {
      if (i < TERMINAL_OUTPUT.length) {
        setDisplayed(TERMINAL_OUTPUT.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 18); // ms per character — adjust to taste

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
        <div className="hero-content-wrapper">

          <div className="hero-left">
            <p className="hero-eyebrow">Software Engineer · New York, NY</p>
            <h1 className="hero-name">
              <span className="font-light">Nyala </span>Jackson
            </h1>
            <p className="hero-subtitle">{HERO.subtitle}</p>
            <p className="hero-bio">{HERO.bio}</p>
            <div className="hero-links">
              <a href="https://github.com/nyjackson" target="_blank" rel="noreferrer" className="hero-link">
                <Github size={16} />
                GitHub
              </a>
              <a href="https://linkedin.com/in/nyalajackson" target="_blank" rel="noreferrer" className="hero-link">
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a href="mailto:nymjackson@gmail.com" className="hero-link">
                <Mail size={16} />
                Email
              </a>
            </div>
            <a href="#projects" className="hero-cta">
              View my work <ArrowDown size={14} />
            </a>
          </div>

          <div className="hero-right">
            <div className="terminal">
              <div className="terminal-bar">
                <span className="terminal-dot dot-red" />
                <span className="terminal-dot dot-yellow" />
                <span className="terminal-dot dot-green" />
                <span className="terminal-filename">identitySync.ts — DRY RUN</span>
              </div>
              <pre className="terminal-body">
                {displayed}
                {!done && <span className="terminal-cursor">▋</span>}
              </pre>
            </div>
          </div>

        </div>
    </section>
  );
};

export default Hero;