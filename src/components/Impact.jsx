import React, { useState } from 'react';

const Icons = {
    workflow: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="6" height="6" rx="1" />
            <rect x="15" y="3" width="6" height="6" rx="1" />
            <rect x="9" y="15" width="6" height="6" rx="1" />
            <path d="M9 6h6M12 9v6" />
        </svg>
    ),
    onboard: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    ),
    stability: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
    ),
    integrate: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    )
};

const items = [
    {
        title: "Workflow Automation",
        icon: Icons.workflow,
        summary: "Rule-driven workflows for regulated processes.",
        context: "Highly regulated BFSI processes with heavy manual approval chains.",
        action: "Implemented rule-driven workflows to encode approvals and decision logic directly into the platform.",
        outcome: "Reduced operational friction while keeping processes compliant and auditable."
    },
    {
        title: "Onboarding Support",
        icon: Icons.onboard,
        summary: "Smooth go-lives for enterprise clients.",
        context: "Large enterprise clients onboarding onto complex BPM platforms.",
        action: "Worked closely during go-lives to resolve configuration gaps, integration issues, and production blockers.",
        outcome: "Smoother transitions into live usage with fewer post-deployment escalations."
    },
    {
        title: "Platform Stability",
        icon: Icons.stability,
        summary: "Backend optimization under real load.",
        context: "Production systems under real user load and tight SLAs.",
        action: "Debugged performance issues, optimized backend logic, and refactored inefficient queries.",
        outcome: "More stable systems that teams could trust during daily operations."
    },
    {
        title: "System Integrations",
        icon: Icons.integrate,
        summary: "Consistent data flow across platforms.",
        context: "Fragmented enterprise systems needing consistent data flow.",
        action: "Designed and implemented REST/SOAP integrations with proper validation and error handling.",
        outcome: "Improved interoperability across platforms without fragile point-to-point fixes."
    }
];

const ImpactCard = ({ item, isActive, onClick, index }) => {
    return (
        <div
            className={`card fade-up stagger-${index + 1} ${isActive ? 'active' : ''}`}
            onClick={onClick}
            style={{
                padding: '1.25rem',
                cursor: 'pointer',
                textAlign: 'left'
            }}
        >
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: isActive ? '1rem' : '0'
            }}>
                <div className="icon-box" style={{ flexShrink: 0 }}>
                    {item.icon}
                </div>
                <div style={{ minWidth: 0 }}>
                    <h3 style={{ margin: 0, fontSize: '0.9375rem' }}>{item.title}</h3>
                    {!isActive && (
                        <p style={{ margin: 0, fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                            {item.summary}
                        </p>
                    )}
                </div>
            </div>

            {isActive && (
                <div style={{
                    animation: 'fadeUp 0.25s ease-out',
                    fontSize: '0.875rem'
                }}>
                    <div style={{ marginBottom: '0.875rem' }}>
                        <div className="micro-label">Context</div>
                        <p style={{ margin: 0 }}>{item.context}</p>
                    </div>

                    <div style={{ marginBottom: '0.875rem' }}>
                        <div className="micro-label">Action</div>
                        <p style={{ margin: 0 }}>{item.action}</p>
                    </div>

                    <div style={{
                        background: 'var(--accent-light)',
                        padding: '0.625rem 0.875rem',
                        borderRadius: '8px'
                    }}>
                        <div className="micro-label" style={{ color: 'var(--accent)' }}>Outcome</div>
                        <p style={{ margin: 0, fontWeight: 500, color: 'var(--text-primary)' }}>{item.outcome}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

const Impact = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span className="eyebrow">Impact</span>
                <h2>Tangible Impact</h2>
            </div>

            <div className="impact-grid">
                {items.map((item, i) => (
                    <ImpactCard
                        key={i}
                        item={item}
                        index={i}
                        isActive={activeIndex === i}
                        onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                    />
                ))}
            </div>

            <style>{`
        .impact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        @media (max-width: 640px) {
          .impact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default Impact;
