'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AlreadySignedUp() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => router.push('/'), 3000)
    return () => clearTimeout(timer)
  }, [router])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', textAlign: 'center', padding: 20 }}>
      <h1 style={{ fontSize: '2rem', marginBottom: 16 }}>You're already signed up!</h1>
      <p style={{ fontSize: '1.125rem', color: '#666' }}>Redirecting you to the home page...</p>
    </div>
  )
}
