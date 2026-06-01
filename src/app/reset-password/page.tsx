'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'

const LOGO_SRC = '/FusionEdge_logo.png'

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)
  const { supabase, loading } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!supabase) return

    const { error } = await supabase.auth.updateUser({ password })

    if (error) {
      setError(error.message)
    } else {
      setDone(true)
      setTimeout(() => router.push('/sign-in'), 2000)
    }
  }

  if (loading) return null

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        .reset-root {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f7;
          font-family: 'Segoe UI', sans-serif;
          padding: 16px;
        }

        .reset-card {
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
        .reset-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #fafafa;
          border-right: 1px solid #f0f0f0;
          padding: 44px;
        }

        .reset-left-copy {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 36px 0 16px;
        }

        .reset-left-eyebrow {
          font-size: 10.5px;
          font-weight: 600;
          color: #1ec99e;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin: 0 0 14px 0;
        }

        .reset-left-heading {
          font-size: 27px;
          font-weight: 800;
          color: #111;
          line-height: 1.22;
          margin: 0 0 16px 0;
          letter-spacing: -0.5px;
        }

        .reset-left-sub {
          font-size: 13px;
          color: #999;
          line-height: 1.7;
          margin: 0 0 34px 0;
          max-width: 255px;
        }

        .reset-tips {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .reset-tip {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .reset-tip-icon {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .reset-tip-title {
          font-size: 12px;
          font-weight: 600;
          color: #222;
          margin: 0 0 2px 0;
        }

        .reset-tip-desc {
          font-size: 11px;
          color: #bbb;
          margin: 0;
          line-height: 1.5;
        }

        .reset-left-tagline {
          font-size: 10.5px;
          color: #ccc;
          margin: 0;
          letter-spacing: 0.03em;
        }

        /* ── Right Panel ── */
        .reset-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 44px 48px;
          max-width: 420px;
          width: 100%;
        }

        .reset-title {
          font-size: 21px;
          font-weight: 700;
          color: #111;
          margin: 0 0 4px 0;
        }

        .reset-subtitle {
          font-size: 12px;
          color: #bbb;
          margin: 0 0 28px 0;
        }

        .reset-error {
          margin-bottom: 14px;
          padding: 8px 12px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 8px;
          font-size: 11px;
          color: #dc2626;
        }

        .reset-success {
          margin-bottom: 14px;
          padding: 8px 12px;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 8px;
          font-size: 11px;
          color: #16a34a;
        }

        .reset-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .reset-label {
          display: block;
          font-size: 11px;
          font-weight: 600;
          color: #444;
          margin-bottom: 6px;
        }

        .reset-input-password {
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

        .reset-pw-toggle {
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

        .reset-pw-hint {
          margin-top: 5px;
          font-size: 10px;
          color: #ccc;
        }

        .reset-btn {
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

        .reset-signin-link {
          text-align: center;
          font-size: 11px;
          color: #bbb;
          margin: 0;
        }

        /* ── Mobile Banner ── */
        .reset-mobile-banner {
          display: none;
          padding: 24px 20px 0;
          text-align: left;
        }

        .reset-mobile-banner img {
          height: 44px;
          width: auto;
          object-fit: contain;
        }

        /* ─────────────────────────────────────────────────
           RESPONSIVE BREAKPOINTS
        ───────────────────────────────────────────────── */

        @media (max-width: 768px) {
          .reset-card {
            flex-direction: column;
            border-radius: 20px;
            min-height: unset;
            max-width: 480px;
          }

          .reset-left {
            display: none;
          }

          .reset-mobile-banner {
            display: block;
          }

          .reset-right {
            max-width: 100%;
            padding: 24px 24px 36px;
          }
        }

        @media (max-width: 480px) {
          .reset-root {
            padding: 0;
            align-items: flex-start;
          }

          .reset-card {
            border-radius: 0;
            box-shadow: none;
            min-height: 100vh;
            max-width: 100%;
          }

          .reset-mobile-banner {
            padding: 20px 20px 0;
          }

          .reset-right {
            padding: 20px 20px 40px;
          }

          .reset-title {
            font-size: 20px;
          }
        }
      `}</style>

      <div className="reset-root">
        <div className="reset-card">

          {/* Mobile-only logo banner */}
          <div className="reset-mobile-banner">
            <img src={LOGO_SRC} alt="Fusionedge" />
          </div>

          {/* ── Left Panel ── */}
          <div className="reset-left">
            <div>
              <img
                src={LOGO_SRC}
                alt="Fusionedge"
                style={{ height: 56, width: 'auto', objectFit: 'contain' }}
              />
            </div>

            <div className="reset-left-copy">
              <p className="reset-left-eyebrow">Account Security</p>
              <h2 className="reset-left-heading">
                Set a New<br />Password.
              </h2>
              <p className="reset-left-sub">
                Choose a strong password to keep your account secure. You'll be redirected to sign in as soon as it's updated.
              </p>

              <div className="reset-tips">
                <div className="reset-tip">
                  <div className="reset-tip-icon" style={{ background: '#f3effe' }}>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#5b2d8e" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="reset-tip-title">Use 8+ characters</p>
                    <p className="reset-tip-desc">Mix letters, numbers &amp; symbols.</p>
                  </div>
                </div>

                <div className="reset-tip">
                  <div className="reset-tip-icon" style={{ background: '#e6fdf6' }}>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#1ec99e" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="reset-tip-title">Keep it unique</p>
                    <p className="reset-tip-desc">Don't reuse passwords from other sites.</p>
                  </div>
                </div>

                <div className="reset-tip">
                  <div className="reset-tip-icon" style={{ background: '#f3effe' }}>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#5b2d8e" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="reset-tip-title">Stay in control</p>
                    <p className="reset-tip-desc">You can update your password anytime.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="reset-left-tagline">Smarter inspections. Proven compliance.</p>
          </div>

          {/* ── Right Panel — Form ── */}
          <div className="reset-right">
            <h1 className="reset-title">Reset password</h1>
            <p className="reset-subtitle">Enter your new password below.</p>

            {error && <div className="reset-error">{error}</div>}
            {done && (
              <div className="reset-success">
                Password updated! Redirecting to sign in...
              </div>
            )}

            <form onSubmit={handleSubmit} className="reset-form">

              {/* New Password */}
              <div>
                <label className="reset-label">New Password</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    minLength={6}
                    className="reset-input-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                    className="reset-pw-toggle"
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
                <p className="reset-pw-hint">8+ characters with letters, numbers &amp; symbols.</p>
              </div>

              {/* Submit Button */}
              <button type="submit" className="reset-btn">
                Update Password
              </button>

              {/* Back to sign in */}
              <p className="reset-signin-link">
                Remember your password?{' '}
                <a href="/sign-in" style={{ color: '#5b2d8e', fontWeight: 600, textDecoration: 'none' }}>
                  Sign In
                </a>
              </p>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}