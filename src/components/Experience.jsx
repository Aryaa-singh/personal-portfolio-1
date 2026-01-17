import React from 'react';

const Experience = () => {
    return (
        <div style={{ padding: '3rem', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1.5rem' }}>
                <div>
                    <h2 style={{ margin: 0, fontSize: '2rem', letterSpacing: '-0.03em' }}>Professional Narrative</h2>
                </div>
                <span style={{
                    background: 'var(--brand-accent)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    boxShadow: '0 4px 6px -1px rgba(79, 70, 229, 0.3)'
                }}>LATEST ROLE</span>
            </div>

            <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '0.25rem', color: 'var(--text-primary)', fontSize: '1.75rem', fontWeight: 700 }}>Application Engineer</h3>
                <div style={{
                    color: 'var(--brand-accent)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                }}>
                    Newgen Software | iBPS Platform
                </div>
            </div>

            <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                    I didn't just configure software; I acted as the <strong>technical bridge</strong> between complex banking requirements and the capabilities of the iBPS platform. Working with major financial institutions like <strong>Saudi National Bank</strong> and <strong>Canara Bank</strong>, I translated high-stakes business needs into reliable, automated workflows.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    My role went beyond simple implementation. I owned the <strong>solution architecture</strong> within the platform constraints—designing data models, configuring business rules (BRMS), and ensuring that the final delivered system wasn't just "functional" but genuinely efficient for end-users.
                </p>
                <p>
                    When standard configurations hit a wall, I engineered custom solutions. I optimized <strong>critical SQL queries</strong> to cut reporting times, wrote custom Java logic for deep integrations (REST/SOAP), and led the technical troubleshooting during high-pressure <strong>production go-lives</strong>. I thrive in environments where technical precision leads to direct business value.
                </p>
            </div>
        </div>
    );
};

export default Experience;
