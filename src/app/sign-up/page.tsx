'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const { supabase } = useAuth()
  const router = useRouter()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess(false)
    if (!supabase) return

    const { data, error } = await supabase.auth.signUp({ email, password })

    if (error) {
      console.error('SignUp error:', error)
      setError(error.message)
      return
    }

    console.log('SignUp data:', data)

    if (data.session) {
      router.push('/')
      return
    }

    setSuccess(true)
    setTimeout(() => router.push('/sign-in'), 2000)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column' }}>
      <form onSubmit={handleSignUp} style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 320 }}>
        <h1>Sign Up</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>Account created! Check your email to confirm, then sign in.</p>}
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
        <button type="submit">Sign Up</button>
        <p style={{ textAlign: 'center', fontSize: 14 }}>
          Already have an account? <Link href="/sign-in" style={{ color: '#1e3a6b' }}>Sign In</Link>
        </p>
      </form>
    </div>
  )
}
