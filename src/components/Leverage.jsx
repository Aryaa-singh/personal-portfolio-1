import React from 'react';

const leverageCards = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
            </svg>
        ),
        title: "Reducing Operational Ambiguity",
        text: "Helping teams move from unclear requirements to predictable, enforceable system behavior."
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: "Supporting High-Stakes Adoption",
        text: "Staying close during onboarding, go-lives, and early production phases when platforms are most vulnerable."
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        title: "Stabilizing Systems Under Real Use",
        text: "Resolving issues that only surface once real users begin depending on the system daily."
    }
];

const Leverage = () => {
    return (
        <section className="section-tinted fade-up">
            <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
                <span className="eyebrow">Value</span>
                <h2>Where I Add Leverage</h2>
            </div>

            <p style={{
                textAlign: 'center',
                margin: '0 auto 2rem',
                maxWidth: '600px',
                color: 'var(--text-secondary)',
                fontSize: '0.9375rem'
            }}>
                I add the most value in environments where technical correctness alone isn't enough —
                where systems must align with users, processes, and constraints.
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.25rem'
            }}>
                {leverageCards.map((card, i) => (
                    <div
                        key={i}
                        className={`card fade-up stagger-${i + 1}`}
                        style={{
                            textAlign: 'center',
                            padding: '1.75rem 1.25rem'
                        }}
                    >
                        <div className="icon-box" style={{ margin: '0 auto 1rem' }}>
                            {card.icon}
                        </div>
                        <h3 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>{card.title}</h3>
                        <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.6, maxWidth: 'none' }}>{card.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Leverage;
