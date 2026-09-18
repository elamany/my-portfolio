import Reveal from './Reveal.jsx';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <Reveal as="h1" delay={0.15}>
            Amanuel
            <br />
            <span className="grad">Tadele</span>
          </Reveal>

          <Reveal as="p" className="role" delay={0.2}>
            Full-Stack Developer
            <span className="sep" />
            Mobile Developer
            <span className="sep" />
            AI/ML Engineer
          </Reveal>

          <Reveal as="p" className="hero-copy" delay={0.25}>
            Selected work across web applications, mobile products,
            payment systems, backend services, and machine-learning
            research — built with a focus on clarity, performance
            and real-world use.
          </Reveal>

          <Reveal className="hero-actions" delay={0.3}>
            <a href="#work" className="btn btn-primary">
              View selected work
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
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </Reveal>

          <Reveal className="hero-stats" delay={0.35}>
            <div className="stat">
              <strong>09</strong>
              <span>Selected projects</span>
            </div>
            <div className="stat">
              <strong>Full-Stack</strong>
              <span>Web &amp; Mobile</span>
            </div>
            <div className="stat">
              <strong>AI / ML</strong>
              <span>Deep Learning</span>
            </div>
          </Reveal>
        </div>

        <Reveal className="portrait-wrap" delay={0.2}>
          <div className="portrait-ring" aria-hidden="true" />
          <div className="portrait">
            <div className="portrait-fallback" aria-hidden="true">
              AT
            </div>
            <img
              src="https://avatars.githubusercontent.com/u/67623837?v=4"
              alt="Portrait of Amanuel Tadele"
              onError={(e) => e.currentTarget.remove()}
            />
          </div>
          <span className="portrait-badge">
            <b>●</b> OPEN TO WORK
          </span>
        </Reveal>
      </div>
    </section>
  );
}