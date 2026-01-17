import React, { useState } from 'react';

// Icons
const LinkedInIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const EmailIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

const PdfIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
    </svg>
);

const CloseIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
                animation: 'fadeIn 0.2s ease-out'
            }}
            onClick={onClose}
        >
            <div
                style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '2rem',
                    maxWidth: '380px',
                    width: '90%',
                    position: 'relative',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    animation: 'fadeUp 0.3s ease-out'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--text-muted)',
                        padding: '0.25rem'
                    }}
                >
                    <CloseIcon />
                </button>

                <h2 style={{ marginBottom: '0.5rem', textAlign: 'center', fontSize: '1.375rem' }}>Let's Connect</h2>
                <p style={{
                    textAlign: 'center',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem',
                    maxWidth: 'none',
                    fontSize: '0.9375rem'
                }}>
                    Reach out directly or connect with me on LinkedIn.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <a
                        href="mailto:singhh.aryaa@gmail.com"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.625rem',
                            padding: '0.875rem',
                            background: 'white',
                            border: '1px solid var(--border)',
                            borderRadius: '10px',
                            color: 'var(--text-primary)',
                            fontWeight: 500,
                            textDecoration: 'none',
                            transition: 'all 0.2s'
                        }}
                    >
                        <EmailIcon />
                        Email Me
                    </a>
                    <a
                        href="https://www.linkedin.com/in/arya-singh-186b3620b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.625rem',
                            padding: '0.875rem',
                            background: 'white',
                            border: '1px solid var(--border)',
                            borderRadius: '10px',
                            color: 'var(--text-primary)',
                            fontWeight: 500,
                            textDecoration: 'none',
                            transition: 'all 0.2s'
                        }}
                    >
                        <LinkedInIcon />
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
};

const Footer = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <footer className="fade-up" style={{
                textAlign: 'center',
                paddingTop: '3rem',
                paddingBottom: '2rem',
                borderTop: '1px solid var(--border)'
            }}>
                <span className="eyebrow">Connect</span>
                <h2 style={{ marginBottom: '1.5rem' }}>
                    Let's Build Customer Value Together
                </h2>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '2rem'
                }}>
                    <button
                        onClick={() => setModalOpen(true)}
                        className="btn btn-primary"
                    >
                        Contact Me
                    </button>

                    <a
                        href="/resume.pdf"
                        download="Arya_Singh_Resume.pdf"
                        className="btn btn-secondary"
                    >
                        <PdfIcon />
                        Download Resume
                    </a>
                </div>

                <p style={{
                    fontSize: '0.8125rem',
                    color: 'var(--text-muted)',
                    margin: '0 auto',
                    maxWidth: 'none'
                }}>
                    © Arya Singh
                </p>
            </footer>

            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
};

export default Footer;
