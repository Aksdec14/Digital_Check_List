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
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f5f5f7',
        fontFamily: "'Segoe UI', sans-serif",
        padding: '16px',
        boxSizing: 'border-box',
      }}
    >
      {/* Card */}
      <div
        style={{
          width: '100%',
          maxWidth: 900,
          background: '#ffffff',
          borderRadius: 24,
          boxShadow: '0 2px 40px rgba(0,0,0,0.07)',
          display: 'flex',
          overflow: 'hidden',
          minHeight: 560,
        }}
      >
        {/* Left Panel */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: '#fafafa',
            borderRight: '1px solid #f0f0f0',
            padding: 44,
          }}
        >
          {/* Logo */}
          <div>
            <img
              src={LOGO_SRC}
              alt="Fusionedge"
              style={{ height: 56, width: 'auto', objectFit: 'contain' }}
            />
          </div>

          {/* Main copy */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '36px 0 16px' }}>
            <p style={{ fontSize: 10.5, fontWeight: 600, color: '#1ec99e', letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 14px 0' }}>
              Already In
            </p>
            <h2
              style={{
                fontSize: 27,
                fontWeight: 800,
                color: '#111',
                lineHeight: 1.22,
                margin: '0 0 16px 0',
                letterSpacing: '-0.5px',
              }}
            >
              Good to Have<br />You Back.
            </h2>
            <p style={{ fontSize: 13, color: '#999', lineHeight: 1.7, margin: '0 0 34px 0', maxWidth: 255 }}>
              Your account is active and your team's work is waiting. We're taking you home now.
            </p>

            {/* Features */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: '#f3effe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#5b2d8e" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 600, color: '#222', margin: '0 0 2px 0' }}>Proven compliance</p>
                  <p style={{ fontSize: 11, color: '#bbb', margin: 0, lineHeight: 1.5 }}>Audit-ready records, every time.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: '#e6fdf6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#1ec99e" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 600, color: '#222', margin: '0 0 2px 0' }}>Real-time tracking</p>
                  <p style={{ fontSize: 11, color: '#bbb', margin: 0, lineHeight: 1.5 }}>See work progress across all sites.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: '#f3effe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#5b2d8e" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 600, color: '#222', margin: '0 0 2px 0' }}>Zero guesswork</p>
                  <p style={{ fontSize: 11, color: '#bbb', margin: 0, lineHeight: 1.5 }}>Consistent standards, every team.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom tagline */}
          <p style={{ fontSize: 10.5, color: '#ccc', margin: 0, letterSpacing: '0.03em' }}>
            Smarter inspections. Proven compliance.
          </p>
        </div>

        {/* Right Panel */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '44px 48px',
            maxWidth: 420,
            width: '100%',
            textAlign: 'center',
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: '#f3effe',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 24,
            }}
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#5b2d8e" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 style={{ fontSize: 21, fontWeight: 700, color: '#111', margin: '0 0 8px 0' }}>
            You're already signed up!
          </h1>
          <p style={{ fontSize: 13, color: '#999', lineHeight: 1.7, margin: '0 0 32px 0', maxWidth: 280 }}>
            Your account is all set. Taking you to the home page in just a moment.
          </p>

          {/* Countdown pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 18px',
              background: '#fafafa',
              border: '1px solid #ebebeb',
              borderRadius: 100,
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                background: '#5b2d8e',
                color: '#fff',
                fontSize: 11,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {count}
            </div>
            <span style={{ fontSize: 12, color: '#888' }}>Redirecting you now...</span>
          </div>

          {/* Manual link */}
          <p style={{ fontSize: 11, color: '#bbb', margin: 0 }}>
            Not redirecting?{' '}
            <a
              href="/"
              style={{ color: '#5b2d8e', fontWeight: 600, textDecoration: 'none' }}
            >
              Go to home
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}