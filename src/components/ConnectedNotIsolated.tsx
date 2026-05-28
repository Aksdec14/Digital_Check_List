export default function ConnectedNotIsolated() {
  return (
    <section id="integrations" className="connected-section">
      <div className="connected-inner">
        <div className="connected-header">
          <div className="badge" style={{ marginBottom: 14 }}>
            <span className="badge-dot"></span>
            Seamless Integrations
          </div>
          <h2 className="connected-heading">Connected, <span className="gradient-text">Not Isolated</span></h2>
          <p className="connected-sub">
            FusionEdge Digital Checklists work seamlessly with other core modules — so your
            workflows stay unified across every team.
          </p>
        </div>

        <div className="connected-cards">
          {/* Helpdesk */}
          <div className="conn-card">
            <div className="conn-card-top">
              <div className="conn-icon-wrap conn-icon-purple">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div className="conn-module-tag">Helpdesk Module</div>
            </div>
            <h3 className="conn-title">Auto-raise tickets from failed checklist items</h3>
            <p className="conn-desc">
              When a checklist item fails, FusionEdge instantly creates a helpdesk ticket —
              routing the issue to the right team for faster resolution with full audit context attached.
            </p>
            <div className="conn-flow">
              <span className="conn-step">Checklist Fails</span>
              <span className="conn-arrow">→</span>
              <span className="conn-step">Ticket Created</span>
              <span className="conn-arrow">→</span>
              <span className="conn-step">Team Notified</span>
              <span className="conn-arrow">→</span>
              <span className="conn-step">Resolved</span>
            </div>
            <a href="#" className="conn-cta conn-cta-purple">Explore FusionEdge Helpdesk →</a>
          </div>

          {/* Asset Management */}
          <div className="conn-card">
            <div className="conn-card-top">
              <div className="conn-icon-wrap conn-icon-teal">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  <line x1="12" y1="12" x2="12" y2="16" />
                  <line x1="10" y1="14" x2="14" y2="14" />
                </svg>
              </div>
              <div className="conn-module-tag">Asset Management Module</div>
            </div>
            <h3 className="conn-title">Link inspections directly to assets</h3>
            <p className="conn-desc">
              Tie preventive maintenance checklists and inspections directly to specific
              assets — so every check is logged against the asset&apos;s lifecycle, service history, and compliance record.
            </p>
            <div className="conn-flow">
              <span className="conn-step">Asset Linked</span>
              <span className="conn-arrow">→</span>
              <span className="conn-step">Inspection Done</span>
              <span className="conn-arrow">→</span>
              <span className="conn-step">Log Updated</span>
              <span className="conn-arrow">→</span>
              <span className="conn-step">PM Scheduled</span>
            </div>
            <a href="#" className="conn-cta conn-cta-teal">Explore FusionEdge Asset Management →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
