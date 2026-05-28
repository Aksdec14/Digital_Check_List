'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useClerk, useUser, useAuth } from '@clerk/clerk-react'
import { useRouter } from 'next/navigation'
import { healthCheck, verifyToken, getUserProfile } from '@/lib/api'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [backendAlive, setBackendAlive] = useState(false)
  const [profile, setProfile] = useState<{ name?: string; email: string } | null>(null)
  const { openSignIn } = useClerk()
  const { isSignedIn } = useUser()
  const { getToken } = useAuth()
  const router = useRouter()

  useEffect(() => {
    healthCheck()
      .then(() => setBackendAlive(true))
      .catch(() => setBackendAlive(false))
  }, [])

  useEffect(() => {
    if (!isSignedIn) {
      setProfile(null)
      return
    }
    getToken().then((token) => {
      if (!token) return
      verifyToken(token).then((res) => {
        if (res.valid) {
          getUserProfile(token).then(setProfile).catch(() => {})
        }
      }).catch(() => {})
    })
  }, [isSignedIn, getToken])

  const toggle = () => {
    setOpen((v) => !v)
  }

  const close = () => {
    setOpen(false)
  }

  return (
    <nav>
      <div className="logo-brand">
        <Image
          src="/FusionEdge_logo.png"
          alt="FusionEdge Logo"
          width={160}
          height={40}
          loading="eager"
        />
        {backendAlive && <span className="backend-badge">Live</span>}
      </div>
      <ul className={`nav-links${open ? ' active' : ''}`} id="navLinks">
        <li><a href="#platform" onClick={close}>Platform</a></li>
        <li><a href="#solutions" onClick={close}>Solutions</a></li>
        <li><a href="#integrations" onClick={close}>Integrations</a></li>
        <li><a href="#resources" onClick={close}>Resources</a></li>
        <li><a href="#faq" onClick={close}>FAQ</a></li>
        <li><a href="#contact" onClick={close}>Contact</a></li>
      </ul>
      <div className="nav-right">
        {profile && <span className="user-greeting">Hi, {profile.name || profile.email}</span>}
        <button className="nav-cta" onClick={() => isSignedIn ? router.push('/already-signed-up') : openSignIn()}>Get a Free Demo</button>
        <button
          className={`hamburger${open ? ' active' : ''}`}
          onClick={toggle}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="navLinks"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  )
}
