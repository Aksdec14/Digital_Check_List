'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth-context'
import Link from 'next/link'

const LOGO_SRC = '/FusionEdge_logo.png'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const { supabase } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!supabase) return

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })

    if (error) {
      setError(error.message)
    } else {
      setSent(true)
    }
  }

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        .forgot-root {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f7;
          font-family: 'Segoe UI', sans-serif;
          padding: 16px;
        }

        .forgot-card {
          width: 100%;
          max-width: 900px;
          background: #ffffff;
          border-radius: 24px;
          box-shadow: 0 2px 40px rgba(0,0,0,0.07);
          display: flex;
          overflow: hidden;
          min-height: 560px;
        }

        /* ── Left Panel ── */
        .forgot-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #fafafa;
          border-right: 1px solid #f0f0f0;
          padding: 44px;
        }

        .forgot-left-copy {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 36px 0 16px;
        }

        .forgot-left-eyebrow {
          font-size: 10.5px;
          font-weight: 600;
          color: #1ec99e;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin: 0 0 14px 0;
        }

        .forgot-left-heading {
          font-size: 27px;
          font-weight: 800;
          color: #111;
          line-height: 1.22;
          margin: 0 0 16px 0;
          letter-spacing: -0.5px;
        }

        .forgot-left-sub {
          font-size: 13px;
          color: #999;
          line-height: 1.7;
          margin: 0 0 34px 0;
          max-width: 255px;
        }

        .forgot-steps {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .forgot-step {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .forgot-step-icon {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .forgot-step-title {
          font-size: 12px;
          font-weight: 600;
          color: #222;
          margin: 0 0 2px 0;
        }

        .forgot-step-desc {
          font-size: 11px;
          color: #bbb;
          margin: 0;
          line-height: 1.5;
        }

        .forgot-left-tagline {
          font-size: 10.5px;
          color: #ccc;
          margin: 0;
          letter-spacing: 0.03em;
        }

        /* ── Right Panel ── */
        .forgot-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 44px 48px;
          max-width: 420px;
          width: 100%;
        }

        .forgot-title {
          font-size: 21px;
          font-weight: 700;
          color: #111;
          margin: 0 0 4px 0;
        }

        .forgot-subtitle {
          font-size: 12px;
          color: #bbb;
          margin: 0 0 28px 0;
        }

        .forgot-error {
          margin-bottom: 14px;
          padding: 8px 12px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 8px;
          font-size: 11px;
          color: #dc2626;
        }

        .forgot-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .forgot-label {
          display: block;
          font-size: 11px;
          font-weight: 600;
          color: #444;
          margin-bottom: 6px;
        }

        .forgot-input {
          width: 100%;
          height: 40px;
          padding: 0 12px;
          border-radius: 8px;
          border: 1px solid #ebebeb;
          background: #fafafa;
          font-size: 13px;
          color: #111;
          outline: none;
        }

        .forgot-btn {
          width: 100%;
          height: 42px;
          border-radius: 8px;
          border: none;
          background: #5b2d8e;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 4px;
          letter-spacing: 0.01em;
        }

        .forgot-signin-link {
          text-align: center;
          font-size: 11px;
          color: #bbb;
          margin: 0;
        }

        /* ── Success state ── */
        .forgot-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .forgot-success-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: #e6fdf6;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          flex-shrink: 0;
        }

        .forgot-success-title {
          font-size: 19px;
          font-weight: 700;
          color: #111;
          margin: 0 0 8px 0;
        }

        .forgot-success-sub {
          font-size: 13px;
          color: #999;
          line-height: 1.7;
          margin: 0 0 28px 0;
          max-width: 280px;
        }

        .forgot-success-notice {
          width: 100%;
          padding: 10px 14px;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 8px;
          font-size: 11px;
          color: #16a34a;
          margin-bottom: 20px;
        }

        /* ── Mobile Banner ── */
        .forgot-mobile-banner {
          display: none;
          padding: 24px 20px 0;
          text-align: left;
        }

        .forgot-mobile-banner img {
          height: 44px;
          width: auto;
          object-fit: contain;
        }

        /* ─────────────────────────────────────────────────
           RESPONSIVE BREAKPOINTS
        ───────────────────────────────────────────────── */

        @media (max-width: 768px) {
          .forgot-card {
            flex-direction: column;
            border-radius: 20px;
            min-height: unset;
            max-width: 480px;
          }

          .forgot-left {
            display: none;
          }

          .forgot-mobile-banner {
            display: block;
          }

          .forgot-right {
            max-width: 100%;
            padding: 24px 24px 36px;
          }
        }

        @media (max-width: 480px) {
          .forgot-root {
            padding: 0;
            align-items: flex-start;
          }

          .forgot-card {
            border-radius: 0;
            box-shadow: none;
            min-height: 100vh;
            max-width: 100%;
          }

          .forgot-mobile-banner {
            padding: 20px 20px 0;
          }

          .forgot-right {
            padding: 20px 20px 40px;
          }

          .forgot-title {
            font-size: 20px;
          }
        }
      `}</style>

      <div className="forgot-root">
        <div className="forgot-card">

          {/* Mobile-only logo banner */}
          <div className="forgot-mobile-banner">
            <img src={LOGO_SRC} alt="Fusionedge" />
          </div>

          {/* ── Left Panel ── */}
          <div className="forgot-left">
            <div>
              <img
                src={LOGO_SRC}
                alt="Fusionedge"
                style={{ height: 56, width: 'auto', objectFit: 'contain' }}
              />
            </div>

            <div className="forgot-left-copy">
              <p className="forgot-left-eyebrow">Account Recovery</p>
              <h2 className="forgot-left-heading">
                Locked Out?<br />We've Got You.
              </h2>
              <p className="forgot-left-sub">
                Enter your email and we'll send you a secure link to reset your password and get back to your inspections.
              </p>

              <div className="forgot-steps">
                <div className="forgot-step">
                  <div className="forgot-step-icon" style={{ background: '#f3effe' }}>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#5b2d8e" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="forgot-step-title">Check your inbox</p>
                    <p className="forgot-step-desc">A reset link will arrive within a minute.</p>
                  </div>
                </div>

                <div className="forgot-step">
                  <div className="forgot-step-icon" style={{ background: '#e6fdf6' }}>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#1ec99e" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <p className="forgot-step-title">Click the secure link</p>
                    <p className="forgot-step-desc">The link expires after 24 hours.</p>
                  </div>
                </div>

                <div className="forgot-step">
                  <div className="forgot-step-icon" style={{ background: '#f3effe' }}>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#5b2d8e" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="forgot-step-title">Set a new password</p>
                    <p className="forgot-step-desc">Back in control in under a minute.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="forgot-left-tagline">Smarter inspections. Proven compliance.</p>
          </div>

          {/* ── Right Panel ── */}
          <div className="forgot-right">
            {!sent ? (
              <>
                <h1 className="forgot-title">Forgot password?</h1>
                <p className="forgot-subtitle">
                  No worries — enter your email and we'll send a reset link.
                </p>

                {error && <div className="forgot-error">{error}</div>}

                <form onSubmit={handleSubmit} className="forgot-form">
                  <div>
                    <label className="forgot-label">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                      className="forgot-input"
                    />
                  </div>

                  <button type="submit" className="forgot-btn">
                    Send Reset Link
                  </button>

                  <p className="forgot-signin-link">
                    Remember your password?{' '}
                    <Link href="/sign-in" style={{ color: '#5b2d8e', fontWeight: 600, textDecoration: 'none' }}>
                      Sign In
                    </Link>
                  </p>
                </form>
              </>
            ) : (
              /* Success state */
              <div className="forgot-success">
                <div className="forgot-success-icon">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#1ec99e" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="forgot-success-title">Check your email</h2>
                <p className="forgot-success-sub">
                  We sent a password reset link to{' '}
                  <span style={{ color: '#111', fontWeight: 600 }}>{email}</span>. It expires in 24 hours.
                </p>
                <div className="forgot-success-notice">
                  Didn't get it? Check your spam folder.
                </div>
                <Link
                  href="/sign-in"
                  style={{ fontSize: 11, color: '#5b2d8e', fontWeight: 600, textDecoration: 'none' }}
                >
                  ← Back to Sign In
                </Link>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  )
}