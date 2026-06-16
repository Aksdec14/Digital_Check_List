'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import SuccessPopup from '@/components/SuccessPopup'

export default function AuthConfirmedPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (loading) return
    if (user) {
      setReady(true)
    } else {
      router.replace('/sign-in')
    }
  }, [loading, user, router])

  if (!ready) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, sans-serif',
        fontSize: 14,
        color: '#888',
      }}>
        Verifying your email…
      </div>
    )
  }

  return (
    <SuccessPopup
      open={ready}
      onClose={() => router.push('/')}
      variant="compact"
    />
  )
}
