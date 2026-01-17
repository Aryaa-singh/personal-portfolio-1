import React from 'react';

const Principle = () => {
    return (
        <section className="section-tinted fade-up">
            <div style={{
                maxWidth: '680px',
                margin: '0 auto',
                textAlign: 'center',
                position: 'relative'
            }}>
                {/* Decorative quote mark */}
                <div style={{
                    fontSize: '4rem',
                    color: 'var(--accent-light)',
                    lineHeight: 1,
                    marginBottom: '0.5rem'
                }}>
                    "
                </div>

                <span className="eyebrow">Philosophy</span>
                <h2 style={{ marginBottom: '1.25rem' }}>A Simple Principle</h2>

                <p style={{
                    margin: '0 auto',
                    fontSize: '1.125rem',
                    color: 'var(--text-secondary)',
                    maxWidth: '560px',
                    lineHeight: 1.8
                }}>
                    The best systems disappear — not because they're invisible,
                    but because they're reliable enough to fade into the background.
                    When things work the way people expect, attention shifts away from
                    the platform and back to the work it's meant to support.
                </p>

                {/* Accent line */}
                <div style={{
                    width: '60px',
                    height: '3px',
                    background: 'var(--accent)',
                    margin: '2rem auto 0',
                    borderRadius: '2px'
                }}></div>
            </div>
        </section>
    );
};

export default Principle;
