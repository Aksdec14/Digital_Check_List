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
              Account Security
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
              Set a New<br />Password.
            </h2>
            <p style={{ fontSize: 13, color: '#999', lineHeight: 1.7, margin: '0 0 34px 0', maxWidth: 255 }}>
              Choose a strong password to keep your account secure. You'll be redirected to sign in as soon as it's updated.
            </p>

            {/* Tips */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: '#f3effe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#5b2d8e" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 600, color: '#222', margin: '0 0 2px 0' }}>Use 8+ characters</p>
                  <p style={{ fontSize: 11, color: '#bbb', margin: 0, lineHeight: 1.5 }}>Mix letters, numbers &amp; symbols.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: '#e6fdf6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#1ec99e" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 600, color: '#222', margin: '0 0 2px 0' }}>Keep it unique</p>
                  <p style={{ fontSize: 11, color: '#bbb', margin: 0, lineHeight: 1.5 }}>Don't reuse passwords from other sites.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: '#f3effe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#5b2d8e" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 600, color: '#222', margin: '0 0 2px 0' }}>Stay in control</p>
                  <p style={{ fontSize: 11, color: '#bbb', margin: 0, lineHeight: 1.5 }}>You can update your password anytime.</p>
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
          <h1 style={{ fontSize: 21, fontWeight: 700, color: '#111', margin: '0 0 4px 0' }}>Reset password</h1>
          <p style={{ fontSize: 12, color: '#bbb', margin: '0 0 28px 0' }}>Enter your new password below.</p>

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
          {done && (
            <div
              style={{
                marginBottom: 14,
                padding: '8px 12px',
                background: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: 8,
                fontSize: 11,
                color: '#16a34a',
              }}
            >
              Password updated! Redirecting to sign in...
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>

            {/* New Password */}
            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#444', marginBottom: 6 }}>
                New Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  minLength={6}
                  style={{
                    width: '100%',
                    height: 40,
                    padding: '0 36px 0 12px',
                    borderRadius: 8,
                    border: '1px solid #ebebeb',
                    background: '#fafafa',
                    fontSize: 13,
                    color: '#111',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                  style={{
                    position: 'absolute',
                    right: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    color: '#9ca3af',
                    display: 'flex',
                    alignItems: 'center',
                  }}
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
              <p style={{ marginTop: 5, fontSize: 10, color: '#ccc' }}>
                8+ characters with letters, numbers &amp; symbols.
              </p>
            </div>

            {/* Submit Button */}
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
              Update Password
            </button>

            {/* Back to sign in */}
            <p style={{ textAlign: 'center', fontSize: 11, color: '#bbb', margin: 0 }}>
              Remember your password?{' '}
              <a href="/sign-in" style={{ color: '#5b2d8e', fontWeight: 600, textDecoration: 'none' }}>
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}