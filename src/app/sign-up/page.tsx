'use client'

import { useState } from 'react'
import Link from 'next/link'

import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'

const LOGO_SRC = '/FusionEdge_logo.png'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const { supabase } = useAuth()
  const router = useRouter()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess(false)

    if (password !== repeatPassword) {
      setError('Passwords do not match.')
      return
    }
    if (!phone.trim()) {
      setError('Phone number is required.')
      return
    }
    if (!supabase) return
    const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { phone } } })
    if (error) { setError(error.message); return }
    if (data.session) { router.push('/'); return }
    setSuccess(true)
  }

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        .signup-root {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f7;
          font-family: 'Segoe UI', sans-serif;
          padding: 16px;
        }

        .signup-card {
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
        .signup-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #fafafa;
          border-right: 1px solid #f0f0f0;
          padding: 44px;
        }

        .signup-left-copy {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 36px 0 16px;
        }

        .signup-left-eyebrow {
          font-size: 10.5px;
          font-weight: 600;
          color: #1ec99e;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin: 0 0 14px 0;
        }

        .signup-left-heading {
          font-size: 27px;
          font-weight: 800;
          color: #111;
          line-height: 1.22;
          margin: 0 0 16px 0;
          letter-spacing: -0.5px;
        }

        .signup-left-sub {
          font-size: 13px;
          color: #999;
          line-height: 1.7;
          margin: 0 0 34px 0;
          max-width: 255px;
        }

        .signup-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .signup-feature {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .signup-feature-icon {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .signup-feature-title {
          font-size: 12px;
          font-weight: 600;
          color: #222;
          margin: 0 0 2px 0;
        }

        .signup-feature-desc {
          font-size: 11px;
          color: #bbb;
          margin: 0;
          line-height: 1.5;
        }

        .signup-left-tagline {
          font-size: 10.5px;
          color: #ccc;
          margin: 0;
          letter-spacing: 0.03em;
        }

        /* ── Right Panel ── */
        .signup-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 44px 48px;
          max-width: 420px;
          width: 100%;
        }

        .signup-title {
          font-size: 21px;
          font-weight: 700;
          color: #111;
          margin: 0 0 4px 0;
        }

        .signup-subtitle {
          font-size: 12px;
          color: #bbb;
          margin: 0 0 28px 0;
        }

        .signup-error {
          margin-bottom: 14px;
          padding: 8px 12px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 8px;
          font-size: 11px;
          color: #dc2626;
        }

        .signup-success {
          margin-bottom: 14px;
          padding: 8px 12px;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 8px;
          font-size: 11px;
          color: #16a34a;
        }

        .signup-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .signup-label {
          display: block;
          font-size: 11px;
          font-weight: 600;
          color: #444;
          margin-bottom: 6px;
        }

        .signup-input {
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

        .signup-input-password {
          width: 100%;
          height: 40px;
          padding: 0 36px 0 12px;
          border-radius: 8px;
          border: 1px solid #ebebeb;
          background: #fafafa;
          font-size: 13px;
          color: #111;
          outline: none;
        }

        .signup-pw-toggle {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          color: #9ca3af;
          display: flex;
          align-items: center;
        }

        .signup-pw-hint {
          margin-top: 5px;
          font-size: 10px;
          color: #ccc;
        }

        .signup-btn {
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

        .signup-signin-link {
          text-align: center;
          font-size: 11px;
          color: #bbb;
          margin: 0;
        }

        /* ── Mobile Banner (shown only on small screens) ── */
        .signup-mobile-banner {
          display: none;
          padding: 24px 20px 0;
          text-align: left;
        }

        .signup-mobile-banner img {
          height: 44px;
          width: auto;
          object-fit: contain;
        }

        /* ─────────────────────────────────────────────────
           RESPONSIVE BREAKPOINTS
        ───────────────────────────────────────────────── */

        /* Tablet: hide left panel, form fills the card */
        @media (max-width: 768px) {
          .signup-card {
            flex-direction: column;
            border-radius: 20px;
            min-height: unset;
            max-width: 480px;
          }

          .signup-left {
            display: none;
          }

          .signup-mobile-banner {
            display: block;
          }

          .signup-right {
            max-width: 100%;
            padding: 24px 24px 36px;
          }
        }

        /* Small phones */
        @media (max-width: 480px) {
          .signup-root {
            padding: 0;
            align-items: flex-start;
          }

          .signup-card {
            border-radius: 0;
            box-shadow: none;
            min-height: 100vh;
            max-width: 100%;
          }

          .signup-mobile-banner {
            padding: 20px 20px 0;
          }

          .signup-right {
            padding: 20px 20px 40px;
          }

          .signup-title {
            font-size: 20px;
          }
        }
      `}</style>

      <div className="signup-root">
        <div className="signup-card">

          {/* Mobile-only logo banner */}
          <div className="signup-mobile-banner">
            <img src={LOGO_SRC} alt="Fusionedge" />
          </div>

          {/* ── Left Panel ── */}
          <div className="signup-left">
            <div>
              <img
                src={LOGO_SRC}
                alt="Fusionedge"
                style={{ height: 56, width: 'auto', objectFit: 'contain' }}
              />
            </div>

            <div className="signup-left-copy">
              <p className="signup-left-eyebrow">Go Paperless</p>
              <h2 className="signup-left-heading">
                Digital Checklists<br />for Smarter Teams.
              </h2>
              <p className="signup-left-sub">
                Replace paper, Excel, and disconnected tools with one system for inspections, safety audits, and preventive maintenance.
              </p>

              <div className="signup-features">
                <div className="signup-feature">
                  <div className="signup-feature-icon" style={{ background: '#f3effe' }}>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#5b2d8e" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="signup-feature-title">Proven compliance</p>
                    <p className="signup-feature-desc">Audit-ready records, every time.</p>
                  </div>
                </div>

                <div className="signup-feature">
                  <div className="signup-feature-icon" style={{ background: '#e6fdf6' }}>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#1ec99e" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="signup-feature-title">Real-time tracking</p>
                    <p className="signup-feature-desc">See work progress across all sites.</p>
                  </div>
                </div>

                <div className="signup-feature">
                  <div className="signup-feature-icon" style={{ background: '#f3effe' }}>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#5b2d8e" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <p className="signup-feature-title">Zero guesswork</p>
                    <p className="signup-feature-desc">Consistent standards, every team.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="signup-left-tagline">Smarter inspections. Proven compliance.</p>
          </div>

          {/* ── Right Panel — Form ── */}
          <div className="signup-right">
            <h1 className="signup-title">Create an account</h1>
            <p className="signup-subtitle">Start managing your team's checklists today.</p>

            {error && <div className="signup-error">{error}</div>}
            {success && (
              <div className="signup-success">
                Account created! Check your email to confirm, then sign in.
              </div>
            )}

            <form onSubmit={handleSignUp} className="signup-form">

              {/* Email */}
              <div>
                <label className="signup-label">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="signup-input"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="signup-label">
                  Phone <span style={{ color: '#dc2626' }}>*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  required
                  className="signup-input"
                />
              </div>

              {/* Password */}
              <div>
                <label className="signup-label">Password</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="signup-input-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                    className="signup-pw-toggle"
                  >
                    {showPassword ? (
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
                <p className="signup-pw-hint">8+ characters with letters, numbers &amp; symbols.</p>
              </div>

              {/* Repeat Password */}
              <div>
                <label className="signup-label">Repeat Password</label>
                <input
                  type="password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="signup-input"
                />
              </div>

              {/* Submit */}
              <button type="submit" className="signup-btn">
                Sign Up
              </button>

              <p className="signup-signin-link">
                Already have an account?{' '}
                <Link href="/sign-in" style={{ color: '#5b2d8e', fontWeight: 600, textDecoration: 'none' }}>
                  Sign In
                </Link>
              </p>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}