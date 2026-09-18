import Reveal from './Reveal.jsx';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <Reveal className="about-intro">
          <p className="eyebrow">01 — About</p>
          <h2>
            From idea to <em>production</em>.
          </h2>
          <p>
            I'm Amanuel Tadele — a software developer working across the
            full stack: <strong>web platforms with real payment flows</strong>,{' '}
            <strong>mobile apps shipped to the Play Store</strong>, and{' '}
            <strong>
              deep-learning research published through my MSc work
            </strong>
            .
          </p>
          <p>
            My sweet spot is taking a product from idea to production:
            architecting the backend, designing the API, building the
            interface, and deploying something people actually use.
          </p>
        </Reveal>

        <div className="about-focus">
          <Reveal className="focus-card" delay={0.05}>
            <span className="focus-label">AI / ML</span>
            <h3>AI/ML for deep learning</h3>
            <p>
              Applied deep learning for medical imaging, gesture
              recognition, and classification problems — from data
              pipeline to trained model.
            </p>
            <div className="focus-tags">
              {['Python', 'TensorFlow', 'PyTorch', 'Keras', 'OpenCV', 'MediaPipe'].map(
                (t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                )
              )}
            </div>
          </Reveal>

          <Reveal className="focus-card mobile" delay={0.1}>
            <span className="focus-label">Mobile</span>
            <h3>Cross-platform apps</h3>
            <p>
              Build mobile apps with Flutter, React Native and Kotlin —
              shipped to production with local persistence and reactive
              state management.
            </p>
            <div className="focus-tags">
              {['Flutter', 'React Native', 'Kotlin', 'GetX', 'Hive'].map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="focus-card fullstack" delay={0.15}>
            <span className="focus-label">Full-Stack</span>
            <h3>Payments &amp; platforms</h3>
            <p>
              Stripe and Chapa integrations, REST APIs, auth and campaign
              systems running in production.
            </p>
            <div className="focus-tags">
              {[
                'PHP',
                'Django / DRF',
                'PostgreSQL',
                'MySQL',
                'JavaScript',
                'Stripe',
                'Chapa',
                'JWT',
              ].map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}