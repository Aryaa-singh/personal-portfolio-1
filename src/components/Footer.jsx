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
            className="modal-overlay"
            onClick={onClose}
        >
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="modal-close" onClick={onClose}>
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
                    <a href="mailto:singhh.aryaa@gmail.com" className="modal-btn">
                        <EmailIcon />
                        Email Me
                    </a>
                    <a
                        href="https://www.linkedin.com/in/arya-singh-186b3620b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-btn"
                    >
                        <LinkedInIcon />
                        LinkedIn
                    </a>
                </div>
            </div>

            <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
          animation: fadeIn 0.2s ease-out;
        }
        .modal-content {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          max-width: 380px;
          width: 100%;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          animation: fadeUp 0.3s ease-out;
        }
        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-muted);
          padding: 0.25rem;
        }
        .modal-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.625rem;
          padding: 0.875rem;
          background: white;
          border: 1px solid var(--border);
          border-radius: 10px;
          color: var(--text-primary);
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s;
        }
        .modal-btn:hover {
          border-color: var(--accent);
          background: var(--accent-light);
        }
        @media (max-width: 640px) {
          .modal-content {
            padding: 1.5rem;
            border-radius: 16px;
          }
        }
      `}</style>
        </div>
    );
};

const Footer = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <footer className="footer-section fade-up">
                <span className="eyebrow">Connect</span>
                <h2 style={{ marginBottom: '1.5rem' }}>
                    Let's Build Customer Value Together
                </h2>

                <div className="footer-buttons">
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

                <style>{`
          .footer-section {
            text-align: center;
            padding-top: 3rem;
            padding-bottom: 2rem;
            border-top: 1px solid var(--border);
          }
          .footer-buttons {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
          }
          @media (max-width: 640px) {
            .footer-section {
              padding-top: 2rem;
              padding-bottom: 1.5rem;
            }
            .footer-buttons {
              flex-direction: column;
              gap: 0.75rem;
            }
            .footer-buttons .btn {
              width: 100%;
              justify-content: center;
            }
          }
        `}</style>
            </footer>

            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
};

export default Footer;
