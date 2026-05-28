'use client'

import Image from 'next/image'
import { useUser, useClerk } from '@clerk/clerk-react'
import { useRouter } from 'next/navigation'

export default function ClickDontPrint() {
  const { isSignedIn } = useUser()
  const { openSignIn } = useClerk()
  const router = useRouter()
  return (
    <section className="banner-wrapper">
      <section className="cdp">
        <div className="cdp-top">
          <div className="cdp-top-l">
            <span className="cdp-pulse"></span>
            #CLICKDONTPRINT CAMPAIGN · FUSIONEDGE
          </div>
          <div className="cdp-top-r">JUNE 1–15, 2026</div>
        </div>

        <div className="cdp-main">
          <div className="cdp-left">
            <div className="cdp-eyebrow">
              <span className="cdp-pulse"></span>
              WORLD ENVIRONMENT DAY 2026
            </div>
            <h1 className="cdp-hashtag">#ClickDontPrint</h1>
            <p className="cdp-headline">
              100 Companies. Free Digital Checklist Access. Zero Excuses Left to Stay on Paper.
            </p>
            <div className="cdp-chips">
              <span className="cdp-chip chip-red">Applications: June 1–15, 2026</span>
              <span className="cdp-chip chip-green">100 Slots Only</span>
              <span className="cdp-chip chip-green">3 Months Free Access</span>
            </div>
            <div className="cdp-cta">
              <button className="cdp-btn" onClick={() => isSignedIn ? router.push('/already-signed-up') : openSignIn()}>Claim Your Free Slot</button>
              <span className="cdp-note">No credit card · Live in days</span>
            </div>
          </div>

          <div className="cdp-right">
            <Image src="/image.png" alt="Eco Sustainability" width={500} height={380} style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>

        <div className="cdp-stats">
          <div className="cdp-stat">
            <h3>500K+</h3>
            <p>Sheets eliminated</p>
          </div>
          <div className="cdp-stat">
            <h3>~60</h3>
            <p>Trees preserved</p>
          </div>
          <div className="cdp-stat">
            <h3>3–8 hrs</h3>
            <p>Saved / team / week</p>
          </div>
          <div className="cdp-progress">
            <span className="progress-label">Slots filling</span>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <div className="badge-progress">
              <span className="dot"></span>
              100 total
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
