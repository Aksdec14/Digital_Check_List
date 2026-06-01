'use client'

import { useState } from 'react'

export default function Contact() {
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const res = await fetch(form.action, { method: 'POST', body: data })
    const json = await res.json()
    if (json.success) {
      form.reset()
      setSuccess(true)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="contact-grid">
          <div className="contact-left">
            <p className="contact-eyebrow">Get In Touch</p>
            <h2 className="contact-heading">Ready to Transform Your<br />Maintenance Strategy?</h2>
            <p className="contact-desc">
              Have questions about preventive maintenance, asset tracking, or compliance?
              Our team is here to understand your needs and guide you toward the right solution.
            </p>
            <div className="contact-info">
              <div className="contact-info-row">
                <div className="contact-info-icon">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="contact-info-text">rana@fusionedge.io</span>
              </div>
              <div className="contact-info-row">
                <div className="contact-info-icon">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="contact-info-text">+91-9015122212</span>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <h3 className="contact-form-title">Request a Demo</h3>
            <p className="contact-form-sub">Tell us about your organization and maintenance challenges.</p>
            <form id="contact-form" action="https://api.web3forms.com/submit" method="POST" className="contact-form" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="3f951b76-ae31-4fcf-9b95-c6c507352a96" />
              <input type="hidden" name="subject" value="New Contact Request - FusionEdge Digital Checklists" />
              <input type="hidden" name="from_name" value="FusionEdge Website" />
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input name="name" required className="form-input" placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label className="form-label">Company</label>
                  <input name="company" className="form-input" placeholder="Your Company" />
                </div>
              </div>
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Work Email</label>
                  <input type="email" name="email" required className="form-input" placeholder="you@company.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input name="phone" className="form-input" placeholder="+91 90000 00000" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea name="message" rows={4} required className="form-input form-textarea" placeholder="Tell us about your maintenance needs"></textarea>
              </div>
              <button type="submit" className="form-submit">Submit Request</button>
              {success && <p className="form-success">✅ Request sent successfully. Our team will contact you shortly.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
