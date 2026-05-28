'use client'

const FAQS_COL1 = [
  { q: 'What is digital checklist software?',
    a: 'Digital checklist software replaces paper or Excel-based checklists with a system that tracks tasks, assigns ownership, captures proof, and provides real-time visibility.' },
  { q: 'How is FusionEdge different from a checklist app?',
    a: 'FusionEdge is built for enterprise facility operations, offering audit trails, SLA tracking, reporting, integrations, and role-based workflows — beyond basic task lists.' },
  { q: 'Is FusionEdge a connected worker platform?',
    a: 'Yes. FusionEdge connects frontline teams, supervisors, and management on a single platform for better visibility and coordination.' },
  { q: 'Can I create custom inspection or audit templates?',
    a: 'Yes. FusionEdge allows fully customizable templates aligned with your operational and compliance needs.' },
  { q: 'How does AI support digital checklists?',
    a: 'AI helps identify recurring failures, missed tasks, and performance trends — enabling preventive actions instead of reactive fixes.' },
  { q: 'Does FusionEdge provide reporting and dashboards?',
    a: 'Yes. Real-time dashboards and downloadable reports support audits, compliance, and performance tracking.' },
]

const FAQS_COL2 = [
  { q: 'Does FusionEdge work offline?',
    a: 'Yes. Teams can complete checklists offline, with automatic syncing once connectivity is restored.' },
  { q: 'Is FusionEdge compliant with industry standards?',
    a: 'FusionEdge supports compliance across facility management, safety, and operational audits by maintaining structured digital records.' },
  { q: 'How does FusionEdge support audits and compliance?',
    a: 'Time-stamped logs, image proof, and historical records make audits faster, cleaner, and stress-free.' },
  { q: 'Does FusionEdge support corrective actions (CAPA)?',
    a: 'Yes. Failed checklist items can trigger corrective actions or raise helpdesk tickets automatically.' },
  { q: 'Can I replace Excel-based inspections with FusionEdge?',
    a: 'Completely. FusionEdge eliminates manual tracking while improving accuracy and accountability.' },
  { q: 'Can I use FusionEdge for preventive maintenance and work orders?',
    a: 'Yes. Digital checklists integrate directly with maintenance and asset workflows.' },
  { q: 'Can FusionEdge integrate with other systems?',
    a: 'Yes. FusionEdge offers flexible APIs and webhooks to integrate with ERP, HRMS, BMS, and other systems.' },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="faq-item">
      <button className="faq-q" onClick={(e) => {
        const btn = e.currentTarget
        const item = btn.closest('.faq-item')!
        const answer = item.querySelector('.faq-a') as HTMLElement
        const col = btn.closest('.faq-col')!
        col.querySelectorAll('.faq-q.open').forEach((q) => {
          q.classList.remove('open')
          ;(q.closest('.faq-item')!.querySelector('.faq-a') as HTMLElement).classList.remove('open')
        })
        const isOpen = btn.classList.contains('open')
        if (!isOpen) {
          btn.classList.add('open')
          answer.classList.add('open')
        }
      }}>
        <span>{q}</span>
        <span className="faq-chevron">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div className="faq-a">
        <p>{a}</p>
      </div>
    </div>
  )
}

export default function Faq() {
  return (
    <section id="faq" className="faq-section">
      <div className="faq-inner">
        <div className="faq-header">
          <div className="badge" style={{ marginBottom: 14 }}><span className="badge-dot"></span>Got Questions?</div>
          <h2 className="faq-heading">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="faq-sub">Everything you need to know about FusionEdge Digital Checklists.</p>
        </div>

        <div className="faq-layout">
          <div className="faq-col">
            {FAQS_COL1.map((faq, i) => <FaqItem key={i} {...faq} />)}
          </div>
          <div className="faq-col">
            {FAQS_COL2.map((faq, i) => <FaqItem key={i} {...faq} />)}
          </div>
        </div>

        <div style={{ marginTop: 80, paddingTop: 64, borderTop: '2px dashed var(--border-light)' }}>
          <div className="light-cta">
            <div className="light-cta-inner">
              <div className="light-cta-content">
                <div className="light-cta-icon">✦</div>
                <h2 className="light-cta-heading">Whether you&apos;re exploring options or ready for a demo — <span className="gradient-text">our team can help.</span></h2>
                <p className="light-cta-sub">Take the next step with FusionEdge at your own pace.</p>
                <div className="light-cta-btns">
                  <button className="btn-primary" onClick={() => window.location.href = '#contact'}>Request a Demo</button>
                  <button className="btn-secondary" onClick={() => window.location.href = '#contact'}>Contact Us →</button>
                </div>
              </div>
              <div className="light-cta-deco" aria-hidden="true">
                <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                  <line x1="320" y1="-20" x2="520" y2="200" stroke="#5D1F73" strokeWidth="1.5" opacity="0.12" />
                  <line x1="290" y1="-20" x2="490" y2="200" stroke="#5D1F73" strokeWidth="1" opacity="0.09" />
                  <line x1="260" y1="-20" x2="460" y2="200" stroke="#5D1F73" strokeWidth="0.8" opacity="0.07" />
                  <line x1="360" y1="-20" x2="160" y2="260" stroke="#1ABC9C" strokeWidth="1.5" opacity="0.15" />
                  <line x1="390" y1="-20" x2="190" y2="260" stroke="#1ABC9C" strokeWidth="1" opacity="0.10" />
                  <line x1="420" y1="-20" x2="220" y2="260" stroke="#1ABC9C" strokeWidth="0.8" opacity="0.07" />
                  <polygon points="340,30 400,120 340,210 280,120" fill="none" stroke="#5D1F73" strokeWidth="1.5" opacity="0.12" />
                  <polygon points="360,50 400,120 360,190 320,120" fill="none" stroke="#5D1F73" strokeWidth="1" opacity="0.10" />
                  <polygon points="370,10 440,120 370,230 300,120" fill="none" stroke="#1ABC9C" strokeWidth="1.2" opacity="0.13" />
                  <polygon points="350,40 405,120 350,200 295,120" fill="url(#ctaGrad)" opacity="0.07" />
                  <defs>
                    <linearGradient id="ctaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#5D1F73" />
                      <stop offset="100%" stopColor="#1ABC9C" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
