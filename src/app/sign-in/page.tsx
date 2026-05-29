'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { supabase } = useAuth()
  const router = useRouter()

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!supabase) return

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
    } else {
      router.push('/')
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column' }}>
      <form onSubmit={handleSignIn} style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 320 }}>
        <h1>Sign In</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
        <p style={{ textAlign: 'center', fontSize: 14 }}>
          <Link href="/forgot-password" style={{ color: '#1e3a6b' }}>Forgot Password?</Link>
        </p>
        <p style={{ textAlign: 'center', fontSize: 14 }}>
          Don't have an account? <Link href="/sign-up" style={{ color: '#1e3a6b' }}>Sign Up</Link>
        </p>
      </form>
    </div>
  )
}
