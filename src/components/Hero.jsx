import React from 'react';

const chips = [
    "Workflow-heavy platforms",
    "High-stakes production systems",
    "Regulated enterprise environments"
];

const Hero = () => {
    return (
        <section className="fade-up hero-section">
            {/* Abstract system icon */}
            <div style={{ marginBottom: '1.25rem' }}>
                <svg width="48" height="48" viewBox="0 0 56 56" fill="none" className="icon-pulse">
                    <rect x="4" y="4" width="20" height="20" rx="4" stroke="#3B82F6" strokeWidth="2" />
                    <rect x="32" y="4" width="20" height="20" rx="4" stroke="#3B82F6" strokeWidth="2" />
                    <rect x="18" y="32" width="20" height="20" rx="4" stroke="#3B82F6" strokeWidth="2" />
                    <path d="M14 24v8M42 24v8M28 24v8" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>

            <h1>
                Helping complex platforms work —<br />
                <span style={{
                    background: 'linear-gradient(90deg, #3B82F6, #60A5FA)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}>
                    reliably, calmly, at scale.
                </span>
            </h1>

            <p className="hero-subtext">
                I focus on how platforms behave in real-world conditions — where constraints, scale, and long-term reliability shape what success actually looks like, with particular attention to how systems are understood and used, not just how they're designed.
            </p>

            {/* Capability Chips */}
            <div className="chips-container">
                {chips.map((chip, i) => (
                    <span
                        key={i}
                        className={`chip fade-up stagger-${i + 1}`}
                    >
                        {chip}
                    </span>
                ))}
            </div>

            <div className="divider"></div>

            <style>{`
        .hero-section {
          padding-top: 4rem;
          padding-bottom: 2rem;
          text-align: center;
        }
        .hero-subtext {
          margin: 0 auto 1.5rem;
          font-size: 1.0625rem;
          color: var(--text-secondary);
          max-width: 620px;
        }
        .chips-container {
          display: flex;
          justify-content: center;
          gap: 0.625rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }
        .chip {
          padding: 0.4rem 0.875rem;
          background: var(--accent-light);
          color: var(--accent);
          border-radius: 20px;
          font-size: 0.8125rem;
          font-weight: 500;
        }
        @media (max-width: 640px) {
          .hero-section {
            padding-top: 2.5rem;
            padding-bottom: 1.5rem;
          }
          .hero-subtext {
            font-size: 0.9375rem;
            padding: 0 0.5rem;
          }
          .chip {
            font-size: 0.75rem;
            padding: 0.35rem 0.75rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
