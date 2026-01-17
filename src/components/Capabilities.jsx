import React from 'react';

const CapabilityCard = ({ title, description }) => (
    <div className="glass-panel" style={{ padding: '2rem', height: '100%' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{title}</h3>
        <p style={{ margin: 0 }}>{description}</p>
    </div>
);

const Capabilities = () => {
    const items = [
        {
            title: "Solutions Engineering",
            description: "Translating ambiguous business requirements into concrete, configurable system workflows that developers can build and users can adopt."
        },
        {
            title: "System Integration",
            description: "Connecting enterprise platforms with existing infrastructure using REST/SOAP APIs, ensuring data integrity across boundaries."
        },
        {
            title: "Platform Enablement",
            description: "Supporting go-live phases, debugging production issues, and refactoring logic to ensure long-term system stability and performance."
        }
    ];

    return (
        <section>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem'
            }}>
                {items.map((item, index) => (
                    <CapabilityCard key={index} {...item} />
                ))}
            </div>
        </section>
    );
};

export default Capabilities;
