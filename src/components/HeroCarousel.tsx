'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'

interface CardItem {
  col: number
  emoji: string
  name: string
  cls: string
  items: [string, string][]
}

const CARDS: CardItem[] = [
  { col: 1, emoji: '🏢', name: 'Facility Inspection', cls: 'ap',
    items: [['Area walkthrough', 'p'], ['Equipment status', 'p'], ['Photo evidence', 'p'], ['Sign-off required', 'p'], ['Auto-escalation', 'p']] },
  { col: 1, emoji: '🛡️', name: 'Safety Audit', cls: 'at',
    items: [['Hazard identification', 't'], ['PPE compliance', 't'], ['Emergency exits', 't'], ['Incident logging', 't'], ['Audit trail', 't']] },
  { col: 1, emoji: '🔧', name: 'Preventive Maintenance', cls: 'ag',
    items: [['Asset scheduling', 'g'], ['Work orders', 'g'], ['Technician assign', 'g'], ['Parts tracking', 'g'], ['Completion proof', 'g']] },
  { col: 1, emoji: '🔐', name: 'Security Patrol', cls: 'ap',
    items: [['Entry point check', 'p'], ['CCTV verification', 'p'], ['Access logs', 'p'], ['Visitor sign-in', 'p'], ['Perimeter scan', 'p']] },
  { col: 2, emoji: '📋', name: 'Compliance Checklist', cls: 'ao',
    items: [['Regulatory items', 'o'], ['Certification check', 'o'], ['Documentation', 'o'], ['Audit export', 'o'], ['Multi-site sync', 'o']] },
  { col: 2, emoji: '📊', name: 'Daily Operations', cls: 'ab',
    items: [['Shift handover', 'b'], ['Task completion', 'b'], ['Resource tracking', 'b'], ['KPI monitoring', 'b'], ['Report generation', 'b']] },
  { col: 2, emoji: '🔥', name: 'Fire & Life Safety', cls: 'ak',
    items: [['Extinguisher check', 'k'], ['Alarm test log', 'k'], ['Evacuation drill', 'k'], ['Sprinkler status', 'k'], ['Signage audit', 'k']] },
  { col: 2, emoji: '🌿', name: 'Environmental Check', cls: 'at',
    items: [['Waste disposal', 't'], ['Energy readings', 't'], ['Water quality', 't'], ['Air filtration', 't'], ['Sustainability log', 't']] },
]

export default function HeroCarousel() {
  const { user } = useAuth()
  const router = useRouter()
  const col1Ref = useRef<HTMLDivElement>(null)
  const col2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const col1Cards = CARDS.filter((c) => c.col === 1)
    const col2Cards = CARDS.filter((c) => c.col === 2)
    const doubled1 = [...col1Cards, ...col1Cards]
    const doubled2 = [...col2Cards, ...col2Cards]

    if (col1Ref.current) {
      col1Ref.current.innerHTML = ''
      doubled1.forEach((card) => {
        const div = document.createElement('div')
        div.className = `check-card ${card.cls}`
        div.innerHTML = `
          <div class="card-head">
            <span class="card-emoji">${card.emoji}</span>
            <span class="card-name">${card.name}</span>
          </div>
          ${card.items.map(([label, color]) =>
            `<div class="ci"><span class="tk ${color}">✓</span>${label}</div>`
          ).join('')}
        `
        col1Ref.current!.appendChild(div)
      })
    }

    if (col2Ref.current) {
      col2Ref.current.innerHTML = ''
      doubled2.forEach((card) => {
        const div = document.createElement('div')
        div.className = `check-card ${card.cls}`
        div.innerHTML = `
          <div class="card-head">
            <span class="card-emoji">${card.emoji}</span>
            <span class="card-name">${card.name}</span>
          </div>
          ${card.items.map(([label, color]) =>
            `<div class="ci"><span class="tk ${color}">✓</span>${label}</div>`
          ).join('')}
        `
        col2Ref.current!.appendChild(div)
      })
    }
  }, [])

  return (
    <section id="platform" className="hero">
      <div className="blob blob-purple"></div>
      <div className="blob blob-teal"></div>

      <div className="hero-left">
        <div className="badge"><span className="badge-dot"></span>Digital Operations Platform</div>
        <h1 className="hero-heading">
          Go Paperless with<br />
          <span className="gradient-text">Digital Checklists</span>
        </h1>
        <p className="hero-sub">Smarter inspections. Proven compliance. Zero guesswork.</p>
        <p className="hero-desc">
          Manual checklists <strong>slow teams down</strong>, hide accountability, and fail when audits or
          escalations arise. FusionEdge helps teams <strong>track work in real time</strong>, capture proof of completion,
          and maintain consistent standards — across sites, teams, and workflows.
        </p>
        <p className="hero-desc-2">
          From daily facility inspections to safety audits and preventive maintenance, FusionEdge
          replaces paper, Excel, and disconnected tools with one unified system.
        </p>
        <div className="hero-ctas">
          <button className="btn-primary" onClick={() => user ? router.push('/already-signed-up') : router.push('/sign-in')}>Get a Free Demo</button>
          <button className="btn-secondary" onClick={() => window.location.href = '#contact'}>Contact Us →</button>
        </div>
      </div>

      <div className="carousels-wrapper">
        <div className="carousel-col up">
          <div className="carousel-track" ref={col1Ref}></div>
        </div>
        <div className="carousel-col down">
          <div className="carousel-track" ref={col2Ref}></div>
        </div>
      </div>
    </section>
  )
}
