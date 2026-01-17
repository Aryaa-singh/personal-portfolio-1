import React from 'react';

const blocks = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: "Stability First",
        text: "I prioritize predictable behavior over clever solutions — especially in environments where errors are costly and confidence in the system matters."
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
        ),
        title: "Translating Ambiguity",
        text: "I spend time clarifying intent before building — turning loosely defined business needs into rules, flows, and behavior the system can actually enforce."
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
        ),
        title: "Reliability in Production",
        text: "My work doesn't stop at delivery. I stay involved through onboarding and live usage, fixing issues that only appear under real load and real users."
    }
];

const InPractice = () => {
    return (
        <section className="section-tinted fade-up">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span className="eyebrow">Approach</span>
                <h2>How I Work in Practice</h2>
            </div>

            <div className="practice-grid">
                {blocks.map((block, i) => (
                    <div
                        key={i}
                        className={`card fade-up stagger-${i + 1}`}
                        style={{
                            textAlign: 'center',
                            padding: '1.75rem 1.25rem'
                        }}
                    >
                        <div className="icon-box" style={{ margin: '0 auto 1rem' }}>
                            {block.icon}
                        </div>
                        <h3 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>{block.title}</h3>
                        <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.6, maxWidth: 'none' }}>{block.text}</p>
                    </div>
                ))}
            </div>

            <style>{`
        .practice-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 768px) {
          .practice-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
            max-width: 400px;
            margin: 0 auto;
          }
        }
      `}</style>
        </section>
    );
};

export default InPractice;
