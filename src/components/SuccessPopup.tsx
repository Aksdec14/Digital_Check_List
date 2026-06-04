'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

interface SuccessPopupProps {
  open: boolean
  onClose: () => void
  variant?: 'with-icon' | 'compact'
}

export default function SuccessPopup({
  open,
  onClose,
  variant = 'with-icon',
}: SuccessPopupProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const handleGotIt = () => {
    onClose()
    router.push('/')
  }

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose()
  }

  if (!open) return null

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; }

        .sp-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(3px);
          padding: 16px;
          animation: sp-fade-in 0.2s ease;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Left variant (with icon, two buttons) ── */
        .sp-card {
          background: #fff;
          border-radius: 16px;
          width: 100%;
          max-width: 420px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0,0,0,0.14);
          animation: sp-scale-in 0.25s cubic-bezier(0.34,1.56,0.64,1);
        }

        .sp-header {
          background: #f0faf0;
          padding: 14px 20px 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e2f4e2;
        }

        .sp-header-title {
          font-size: 14px;
          font-weight: 600;
          color: #2e7d32;
          margin: 0;
        }

        .sp-close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #555;
          border-radius: 4px;
          transition: background 0.15s;
        }
        .sp-close-btn:hover { background: #e0e0e0; }

        /* body with icon */
        .sp-body {
          padding: 24px 20px 20px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .sp-icon-wrap {
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1.5px solid #c8e6c9;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
        }

        .sp-text-block { flex: 1; }

        .sp-title {
          font-size: 16px;
          font-weight: 700;
          color: #2e7d32;
          margin: 0 0 6px;
          line-height: 1.3;
        }

        .sp-message {
          font-size: 13px;
          color: #555;
          line-height: 1.65;
          margin: 0;
        }

        .sp-footer {
          padding: 0 20px 20px;
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }

        .sp-btn-secondary {
          height: 38px;
          padding: 0 18px;
          border-radius: 8px;
          border: 1.5px solid #bdbdbd;
          background: #fff;
          color: #333;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.15s, border-color 0.15s;
        }
        .sp-btn-secondary:hover { background: #f5f5f5; border-color: #999; }

        .sp-btn-primary {
          height: 38px;
          padding: 0 20px;
          border-radius: 8px;
          border: none;
          background: #2e7d32;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.15s, transform 0.1s;
        }
        .sp-btn-primary:hover { background: #256427; }
        .sp-btn-primary:active { transform: scale(0.97); }

        /* ── Right variant (compact, single button) ── */
        .sp-card-compact {
          background: #f0faf0;
          border-radius: 16px;
          width: 100%;
          max-width: 380px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0,0,0,0.14);
          animation: sp-scale-in 0.25s cubic-bezier(0.34,1.56,0.64,1);
          padding: 20px 20px 20px;
        }

        .sp-compact-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .sp-compact-header-title {
          font-size: 14px;
          font-weight: 600;
          color: #2e7d32;
          margin: 0;
        }

        .sp-compact-title {
          font-size: 16px;
          font-weight: 700;
          color: #2e7d32;
          margin: 0 0 8px;
          line-height: 1.3;
        }

        .sp-compact-message {
          font-size: 13px;
          color: #444;
          line-height: 1.65;
          margin: 0 0 20px;
        }

        .sp-compact-footer {
          display: flex;
          justify-content: flex-end;
        }

        /* Animations */
        @keyframes sp-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes sp-scale-in {
          from { opacity: 0; transform: scale(0.90); }
          to   { opacity: 1; transform: scale(1); }
        }

        /* Responsive */
        @media (max-width: 480px) {
          .sp-card, .sp-card-compact { max-width: 100%; border-radius: 14px; }
          .sp-body { flex-direction: column; align-items: center; text-align: center; gap: 12px; }
          .sp-footer { justify-content: center; }
          .sp-btn-secondary, .sp-btn-primary { flex: 1; }
          .sp-compact-footer { justify-content: center; }
          .sp-compact-title { text-align: center; }
          .sp-compact-message { text-align: center; }
        }
      `}</style>

      <div className="sp-overlay" ref={overlayRef} onClick={handleOverlayClick}>
        {variant === 'with-icon' ? (
          /* ── Left variant ── */
          <div className="sp-card" role="dialog" aria-modal="true" aria-labelledby="sp-title">
            <div className="sp-header">
              <p className="sp-header-title">Positive dialog</p>
              <button className="sp-close-btn" onClick={onClose} aria-label="Close">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="sp-body">
              <div className="sp-icon-wrap" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="sp-text-block">
                <h3 className="sp-title" id="sp-title">🎉 Submission Successful</h3>
                <p className="sp-message">
                  Thank you for taking part in this moment. Our team has successfully received your information and will get in touch with you shortly.
                </p>
              </div>
            </div>

            <div className="sp-footer">
              <button className="sp-btn-secondary" onClick={onClose}>Close</button>
              <button className="sp-btn-primary" onClick={onClose}>Done</button>
            </div>
          </div>
        ) : (
          /* ── Right (compact) variant ── */
          <div className="sp-card-compact" role="dialog" aria-modal="true" aria-labelledby="sp-compact-title">
            <div className="sp-compact-header">
              <p className="sp-compact-header-title">Positive dialog</p>
              <button className="sp-close-btn" onClick={onClose} aria-label="Close">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <h3 className="sp-compact-title" id="sp-compact-title">🎉 Submission Successful</h3>
            <p className="sp-compact-message">
              Thank you for taking part in this moment. Our team has successfully received your information and will get in touch with you shortly.
            </p>
            <div className="sp-compact-footer">
              <button className="sp-btn-primary" onClick={handleGotIt}>Got It</button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}