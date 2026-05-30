'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/lib/auth-context'

export default function TimedPopup() {
  const [show, setShow] = useState(false)
  const { user } = useAuth()

  useEffect(() => {
    if (user) return

    const timer = setTimeout(() => {
      setShow(true)
    }, 30000)

    return () => clearTimeout(timer)
  }, [user])



  if (!show || user) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm rounded-2xl bg-white p-6 shadow-2xl border border-gray-100">
      <button
        onClick={() => setShow(false)}
        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 text-lg leading-none"
        aria-label="Close"
      >
        ×
      </button>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Try FusionEdge Free
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        See how digital checklists can transform your operations
      </p>
      <button
        onClick={() => setShow(false)}
        className="w-full rounded-lg bg-[#1e3a6b] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#16304f] transition-colors"
      >
        Get a Free Demo
      </button>
    </div>
  )
}
