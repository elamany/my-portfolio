import Reveal from './Reveal.jsx';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <Reveal className="contact-inner" id="lets-build">
          <p className="eyebrow">03 — Get in touch</p>
          <h2>
            Let's build something <em>useful</em>.
          </h2>
          <p className="lead">
            Interested in working together, or discussing a software,
            mobile, or AI/ML project? Feel free to reach out — I'm always
            open to a good conversation.
          </p>

          <a href="tel:0912166828" className="contact-cta">
            Call: 0912166828
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>
        </Reveal>

        <Reveal className="contact-grid" delay={0.1}>
          <a href="mailto:ammanuael@gmail.com" className="contact-item">
            <span className="contact-label">Email</span>
            <span className="contact-value">
              ammanuael@gmail.com
              <ArrowIcon />
            </span>
          </a>

          <a href="tel:0912166828" className="contact-item">
            <span className="contact-label">Phone</span>
            <span className="contact-value">
              0912166828
              <ArrowIcon />
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/elamani/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item linkedin"
          >
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">
              in/elamani
              <ArrowIcon />
            </span>
          </a>

          <a
            href="https://github.com/elamany"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="contact-label">GitHub</span>
            <span className="contact-value">
              github.com/elamany
              <ArrowIcon />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}