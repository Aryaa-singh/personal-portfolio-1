import React from 'react';

const HumanTouch = () => {
    return (
        <section className="animate-entry" style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--glass-border)',
            marginTop: '2rem'
        }}>
            <h2 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '2rem',
                textAlign: 'center'
            }}>
                Beyond The Code
            </h2>

            <div style={{
                maxWidth: '650px',
                margin: '0 auto',
                textAlign: 'center'
            }}>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8' }}>
                    I believe that the best systems are the ones that disappear.
                    When technology is correctly aligned with human needs, it stops being a tool you struggle with and becomes a capability you possess.
                </p>

                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                    "Clarity over complexity. Reliability over novelty."
                </p>
            </div>
        </section>
    );
};

export default HumanTouch;
