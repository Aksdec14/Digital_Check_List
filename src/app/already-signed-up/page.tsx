'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const LOGO_SRC = '/FusionEdge_logo.png'

export default function AlreadySignedUp() {
  const router = useRouter()
  const [count, setCount] = useState(3)

  useEffect(() => {
    const interval = setInterval(() => setCount((c) => c - 1), 1000)
    const timer = setTimeout(() => router.push('/'), 3000)
    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [router])

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        .already-root {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f7;
          font-family: 'Segoe UI', sans-serif;
          padding: 16px;
        }

        .already-card {
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
        .already-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #fafafa;
          border-right: 1px solid #f0f0f0;
          padding: 44px;
        }

        .already-left-copy {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 36px 0 16px;
        }

        .already-left-eyebrow {
          font-size: 10.5px;
          font-weight: 600;
          color: #1ec99e;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin: 0 0 14px 0;
        }

        .already-left-heading {
          font-size: 27px;
          font-weight: 800;
          color: #111;
          line-height: 1.22;
          margin: 0 0 16px 0;
          letter-spacing: -0.5px;
        }

        .already-left-sub {
          font-size: 13px;
          color: #999;
          line-height: 1.7;
          margin: 0 0 34px 0;
          max-width: 255px;
        }

        .already-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .already-feature {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .already-feature-icon {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .already-feature-title {
          font-size: 12px;
          font-weight: 600;
          color: #222;
          margin: 0 0 2px 0;
        }

        .already-feature-desc {
          font-size: 11px;
          color: #bbb;
          margin: 0;
          line-height: 1.5;
        }

        .already-left-tagline {
          font-size: 10.5px;
          color: #ccc;
          margin: 0;
          letter-spacing: 0.03em;
        }

        /* ── Right Panel ── */
        .already-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 44px 48px;
          max-width: 420px;
          width: 100%;
          text-align: center;
        }

        .already-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 18px;
          background: #f3effe;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          flex-shrink: 0;
        }

        .already-title {
          font-size: 21px;
          font-weight: 700;
          color: #111;
          margin: 0 0 8px 0;
        }

        .already-subtitle {
          font-size: 13px;
          color: #999;
          line-height: 1.7;
          margin: 0 0 32px 0;
          max-width: 280px;
        }

        .already-countdown {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          background: #fafafa;
          border: 1px solid #ebebeb;
          border-radius: 100px;
          margin-bottom: 28px;
        }

        .already-countdown-num {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #5b2d8e;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .already-redirect-label {
          font-size: 12px;
          color: #888;
        }

        .already-manual {
          font-size: 11px;
          color: #bbb;
          margin: 0;
        }

        /* ── Mobile Banner ── */
        .already-mobile-banner {
          display: none;
          padding: 24px 20px 0;
          text-align: left;
        }

        .already-mobile-banner img {
          height: 44px;
          width: auto;
          object-fit: contain;
        }

        /* ─────────────────────────────────────────────────
           RESPONSIVE BREAKPOINTS
        ───────────────────────────────────────────────── */

        @media (max-width: 768px) {
          .already-card {
            flex-direction: column;
            border-radius: 20px;
            min-height: unset;
            max-width: 480px;
          }

          .already-left {
            display: none;
          }

          .already-mobile-banner {
            display: block;
          }

          .already-right {
            max-width: 100%;
            padding: 36px 24px 48px;
          }
        }

        @media (max-width: 480px) {
          .already-root {
            padding: 0;
            align-items: flex-start;
          }

          .already-card {
            border-radius: 0;
            box-shadow: none;
            min-height: 100vh;
            max-width: 100%;
          }

          .already-mobile-banner {
            padding: 20px 20px 0;
          }

          .already-right {
            padding: 32px 20px 40px;
          }

          .already-title {
            font-size: 20px;
          }
        }
      `}</style>

      <div className="already-root">
        <div className="already-card">

          {/* Mobile-only logo banner */}
          <div className="already-mobile-banner">
            <img src={LOGO_SRC} alt="Fusionedge" />
          </div>

          {/* ── Left Panel ── */}
          <div className="already-left">
            <div>
              <img
                src={LOGO_SRC}
                alt="Fusionedge"
                style={{ height: 56, width: 'auto', objectFit: 'contain' }}
              />
            </div>

            <div className="already-left-copy">
              <p className="already-left-eyebrow">Already In</p>
              <h2 className="already-left-heading">
                Good to Have<br />You Back.
              </h2>
              <p className="already-left-sub">
                Your account is active and your team's work is waiting. We're taking you home now.
              </p>

              <div className="already-features">
                <div className="already-feature">
                  <div className="already-feature-icon" style={{ background: '#f3effe' }}>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#5b2d8e" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="already-feature-title">Proven compliance</p>
                    <p className="already-feature-desc">Audit-ready records, every time.</p>
                  </div>
                </div>

                <div className="already-feature">
                  <div className="already-feature-icon" style={{ background: '#e6fdf6' }}>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#1ec99e" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="already-feature-title">Real-time tracking</p>
                    <p className="already-feature-desc">See work progress across all sites.</p>
                  </div>
                </div>

                <div className="already-feature">
                  <div className="already-feature-icon" style={{ background: '#f3effe' }}>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#5b2d8e" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <p className="already-feature-title">Zero guesswork</p>
                    <p className="already-feature-desc">Consistent standards, every team.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="already-left-tagline">Smarter inspections. Proven compliance.</p>
          </div>

          {/* ── Right Panel ── */}
          <div className="already-right">
            <div className="already-icon-wrap">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#5b2d8e" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="already-title">You're already signed up!</h1>
            <p className="already-subtitle">
              Your account is all set. Taking you to the home page in just a moment.
            </p>

            <div className="already-countdown">
              <div className="already-countdown-num">{count}</div>
              <span className="already-redirect-label">Redirecting you now...</span>
            </div>

            <p className="already-manual">
              Not redirecting?{' '}
              <a href="/" style={{ color: '#5b2d8e', fontWeight: 600, textDecoration: 'none' }}>
                Go to home
              </a>
            </p>
          </div>

        </div>
      </div>
    </>
  )
}