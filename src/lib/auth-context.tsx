'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { Session, User, SupabaseClient } from '@supabase/supabase-js'
import { createClient } from './supabase'

type AuthContextType = {
  user: User | null
  session: Session | null
  loading: boolean
  supabase: SupabaseClient | null
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  supabase: null,
  signOut: async () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null)

  useEffect(() => {
    let mounted = true
    const client = createClient()
    setSupabase(client)

    const init = async () => {
      const { data: { session } } = await client.auth.getSession()

      if (!session) {
        if (mounted) setLoading(false)
        return
      }

      const { data: { user } } = await client.auth.getUser()

      if (!mounted) return

      if (user) {
        setSession(session)
        setUser(user)
      } else {
        await client.auth.signOut()
      }
      setLoading(false)
    }

    init()

    const { data: { subscription } } = client.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [])

  const signOut = async () => {
    if (!supabase) return
    await supabase.auth.signOut()
    setUser(null)
    setSession(null)
  }

  return (
    <AuthContext.Provider value={{ user, session, loading, supabase, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
