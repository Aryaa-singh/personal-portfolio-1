import React from 'react';

const Principles = () => {
    const principles = [
        {
            title: "Clarity Over Complexity",
            desc: "I believe in stripping away the non-essential to build systems that are easy to understand, maintain, and use."
        },
        {
            title: "Problem First, Solution Second",
            desc: "I focus on deeply understanding the root business problem before writing a line of code or configuring a workflow."
        },
        {
            title: "Bridge The Gap",
            desc: "I thrive in the space between technical engineering and business outcomes, speaking the language of both."
        }
    ];

    return (
        <section style={{ height: '100%' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', color: 'var(--text-primary)' }}>Operating Principles</h3>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
            }}>
                {principles.map((p, index) => (
                    <div key={index} style={{
                        borderLeft: '2px solid var(--brand-accent)',
                        paddingLeft: '1rem'
                    }}>
                        <h4 style={{ marginBottom: '0.25rem', color: 'var(--text-primary)', fontSize: '1rem' }}>{p.title}</h4>
                        <p style={{ fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>{p.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Principles;
