import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { projects } from '../data/projects.js';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'ai', label: 'AI / ML' },
  { key: 'fullstack', label: 'Full-Stack' },
];

const pad = (n) => String(n).padStart(2, '0');

export default function Work() {
  const [filter, setFilter] = useState('all');

  const visible =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="work" id="work">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">02 — Portfolio</p>
            <h2>
              Project <em>archive</em>
            </h2>
          </div>
          <p className="section-note">
            A collection of shipped web platforms, mobile apps and
            research-driven machine-learning systems.
          </p>
          <span className="section-count" aria-live="polite">
            <b className="section-number">{pad(visible.length)}</b> /{' '}
            {pad(projects.length)}
          </span>
        </Reveal>

        <Reveal className="filters" delay={0.05} role="tablist">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              className={`filter ${filter === f.key ? 'active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="project-list" key={filter}>
          {visible.map((project, i) => (
            <Reveal
              key={project.id}
              as="article"
              className="project"
              delay={i * 0.045}
              data-category={project.category}
            >
              <div className="project-number">{project.id}</div>

              <div className="project-main">
                <h3 className="project-title">
                  {project.title}
                  <span className="project-type">{project.type}</span>
                </h3>
                <p className="project-description">{project.description}</p>
                <div className="stack">
                  {project.stack.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.linkLabel} <span>↗</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}