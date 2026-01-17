import React from 'react';

const columns = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
        ),
        title: "APIs & Integrations",
        text: "Designing and supporting reliable communication between systems."
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="6" height="6" rx="1" />
                <rect x="15" y="3" width="6" height="6" rx="1" />
                <rect x="9" y="15" width="6" height="6" rx="1" />
                <path d="M9 6h6M12 9v6" />
            </svg>
        ),
        title: "Workflow & Decision Logic",
        text: "Translating rules and approvals into predictable system behavior."
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        title: "Performance & Reliability",
        text: "Debugging, tuning, and stabilizing systems under real-world load."
    }
];

const Systems = () => {
    return (
        <section className="section-tinted fade-up" style={{ borderRadius: '24px', margin: '0' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <span className="eyebrow">Domain</span>
                <h2>The Systems I'm Comfortable Owning</h2>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem'
            }}>
                {columns.map((col, i) => (
                    <div
                        key={i}
                        className={`fade-up stagger-${i + 1}`}
                        style={{ textAlign: 'center' }}
                    >
                        <div className="icon-box" style={{ margin: '0 auto 1rem' }}>
                            {col.icon}
                        </div>
                        <h3 style={{ marginBottom: '0.5rem' }}>{col.title}</h3>
                        <p style={{ margin: '0 auto', fontSize: '0.9375rem', maxWidth: '240px' }}>{col.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Systems;
