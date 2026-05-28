'use client'

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="cta-blob cta-blob-1"></div>
      <div className="cta-blob cta-blob-2"></div>
      <div className="cta-banner-inner">
        <div className="cta-left">
          <div className="cta-eyebrow">✦ Ready to Go Paperless?</div>
          <h2 className="cta-heading">Build reliable, compliant, and scalable operations — without manual effort.</h2>
        </div>
        <div className="cta-right">
          <button className="cta-btn-main" onClick={() => window.location.href = '#contact'}>Get Started – Free Demo</button>
          <p className="cta-note">No credit card required · Setup in minutes</p>
        </div>
      </div>
    </section>
  )
}
