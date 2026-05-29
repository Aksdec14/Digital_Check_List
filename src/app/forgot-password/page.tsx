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
              Account Recovery
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
              Locked Out?<br />We've Got You.
            </h2>
            <p style={{ fontSize: 13, color: '#999', lineHeight: 1.7, margin: '0 0 34px 0', maxWidth: 255 }}>
              Enter your email and we'll send you a secure link to reset your password and get back to your inspections.
            </p>

            {/* Steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: '#f3effe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#5b2d8e" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 600, color: '#222', margin: '0 0 2px 0' }}>Check your inbox</p>
                  <p style={{ fontSize: 11, color: '#bbb', margin: 0, lineHeight: 1.5 }}>A reset link will arrive within a minute.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: '#e6fdf6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#1ec99e" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 600, color: '#222', margin: '0 0 2px 0' }}>Click the secure link</p>
                  <p style={{ fontSize: 11, color: '#bbb', margin: 0, lineHeight: 1.5 }}>The link expires after 24 hours.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: '#f3effe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#5b2d8e" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 600, color: '#222', margin: '0 0 2px 0' }}>Set a new password</p>
                  <p style={{ fontSize: 11, color: '#bbb', margin: 0, lineHeight: 1.5 }}>Back in control in under a minute.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom tagline */}
          <p style={{ fontSize: 10.5, color: '#ccc', margin: 0, letterSpacing: '0.03em' }}>
            Smarter inspections. Proven compliance.
          </p>
        </div>

        {/* Right Panel — Form */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '44px 48px',
            maxWidth: 420,
            width: '100%',
          }}
        >
          {!sent ? (
            <>
              <h1 style={{ fontSize: 21, fontWeight: 700, color: '#111', margin: '0 0 4px 0' }}>Forgot password?</h1>
              <p style={{ fontSize: 12, color: '#bbb', margin: '0 0 28px 0' }}>
                No worries — enter your email and we'll send a reset link.
              </p>

              {error && (
                <div
                  style={{
                    marginBottom: 14,
                    padding: '8px 12px',
                    background: '#fef2f2',
                    border: '1px solid #fecaca',
                    borderRadius: 8,
                    fontSize: 11,
                    color: '#dc2626',
                  }}
                >
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#444', marginBottom: 6 }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    style={{
                      width: '100%',
                      height: 40,
                      padding: '0 12px',
                      borderRadius: 8,
                      border: '1px solid #ebebeb',
                      background: '#fafafa',
                      fontSize: 13,
                      color: '#111',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    height: 42,
                    borderRadius: 8,
                    border: 'none',
                    background: '#5b2d8e',
                    color: '#fff',
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: 'pointer',
                    marginTop: 4,
                    letterSpacing: '0.01em',
                  }}
                >
                  Send Reset Link
                </button>

                <p style={{ textAlign: 'center', fontSize: 11, color: '#bbb', margin: 0 }}>
                  Remember your password?{' '}
                  <Link href="/sign-in" style={{ color: '#5b2d8e', fontWeight: 600, textDecoration: 'none' }}>
                    Sign In
                  </Link>
                </p>
              </form>
            </>
          ) : (
            /* Success state */
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: '#e6fdf6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#1ec99e" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 style={{ fontSize: 19, fontWeight: 700, color: '#111', margin: '0 0 8px 0' }}>Check your email</h2>
              <p style={{ fontSize: 13, color: '#999', lineHeight: 1.7, margin: '0 0 28px 0', maxWidth: 280 }}>
                We sent a password reset link to <span style={{ color: '#111', fontWeight: 600 }}>{email}</span>. It expires in 24 hours.
              </p>
              <div
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  background: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  borderRadius: 8,
                  fontSize: 11,
                  color: '#16a34a',
                  marginBottom: 20,
                }}
              >
                Didn't get it? Check your spam folder.
              </div>
              <Link
                href="/sign-in"
                style={{
                  fontSize: 11,
                  color: '#5b2d8e',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                ← Back to Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}