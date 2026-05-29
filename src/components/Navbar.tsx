'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { healthCheck } from '@/lib/api'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [backendAlive, setBackendAlive] = useState(false)
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    healthCheck()
      .then(() => setBackendAlive(true))
      .catch(() => setBackendAlive(false))
  }, [])

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
        {user && <span className="user-greeting">Hi, {user.email}</span>}
        <button className="nav-cta" onClick={() => user ? router.push('/already-signed-up') : router.push('/sign-in')}>Get a Free Demo</button>
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
