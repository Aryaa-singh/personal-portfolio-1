import React from 'react';

const TrustBar = () => {
    return (
        <div style={{
            textAlign: 'center',
            marginBottom: '4rem',
            opacity: 0.8
        }}>
            <p style={{
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontSize: '0.875rem',
                marginBottom: '1.5rem'
            }}>
                Trusted in governed, high-stakes environments
            </p>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                flexWrap: 'wrap',
                fontFamily: 'monospace',
                color: 'var(--text-muted)'
            }}>
                <span>BFSI SECTOR</span>
                <span>•</span>
                <span>ENTERPRISE WORKFLOWS</span>
                <span>•</span>
                <span>REGULATED SYSTEMS</span>
            </div>
        </div>
    );
};

export default TrustBar;
