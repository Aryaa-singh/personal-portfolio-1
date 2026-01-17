import React from 'react';

const chips = [
    "Workflow-heavy platforms",
    "High-stakes production systems",
    "Regulated enterprise environments"
];

const Hero = () => {
    return (
        <section className="fade-up" style={{
            paddingTop: '4rem',
            paddingBottom: '2rem',
            textAlign: 'center'
        }}>
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

            <p style={{
                margin: '0 auto 1.5rem',
                fontSize: '1.0625rem',
                color: 'var(--text-secondary)',
                maxWidth: '620px'
            }}>
                I focus on how platforms behave in real-world conditions — where constraints, scale, and long-term reliability shape what success actually looks like, with particular attention to how systems are understood and used, not just how they're designed.
            </p>

            {/* Capability Chips */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.625rem',
                flexWrap: 'wrap',
                marginBottom: '1.5rem'
            }}>
                {chips.map((chip, i) => (
                    <span
                        key={i}
                        className={`fade-up stagger-${i + 1}`}
                        style={{
                            padding: '0.4rem 0.875rem',
                            background: 'var(--accent-light)',
                            color: 'var(--accent)',
                            borderRadius: '20px',
                            fontSize: '0.8125rem',
                            fontWeight: 500
                        }}
                    >
                        {chip}
                    </span>
                ))}
            </div>

            <div className="divider"></div>
        </section>
    );
};

export default Hero;
