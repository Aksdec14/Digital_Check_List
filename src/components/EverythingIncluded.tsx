const TILES = [
  { icon: '📋', name: 'Custom Templates', detail: 'Daily, weekly, monthly & event-based', color: 'fi-purple' },
  { icon: '🔐', name: 'Role-Based Access', detail: 'Granular permissions & approvals', color: 'fi-teal' },
  { icon: '🏢', name: 'Multi-Site Deployment', detail: 'Push checklists across all locations', color: 'fi-green' },
  { icon: '📷', name: 'Image Verification', detail: 'Photo proof per checklist item', color: 'fi-blue' },
  { icon: '📶', name: 'Offline + Auto-Sync', detail: 'Works without internet, syncs on reconnect', color: 'fi-orange' },
  { icon: '⏱️', name: 'SLA & Missed-Task Alerts', detail: 'Real-time escalations & notifications', color: 'fi-red' },
  { icon: '🗂️', name: 'Audit-Ready Logs', detail: 'Tamper-proof digital records', color: 'fi-indigo' },
  { icon: '📊', name: 'Dashboards & Reports', detail: 'Live dashboards + downloadable exports', color: 'fi-teal' },
  { icon: '🔗', name: 'API & Webhooks', detail: 'Plug into your existing tech stack', color: 'fi-purple' },
]

export default function EverythingIncluded() {
  return (
    <section id="solutions" className="included-section">
      <div className="included-inner">
        <div className="included-left">
          <div className="badge" style={{ marginBottom: 16 }}>
            <span className="badge-dot"></span>
            All-in-One Platform
          </div>
          <h2 className="included-heading">
            Everything Included with<br />
            <span className="gradient-text">FusionEdge Digital Checklists</span>
          </h2>
          <p className="included-sub">
            No add-ons. No hidden tiers. Every feature ships with every plan — so your team
            can start without friction and scale without surprises.
          </p>
        </div>

        <div className="included-grid">
          {TILES.map((tile, i) => (
            <div className={`fi-tile ${tile.color}`} key={i}>
              <div className="fi-icon">{tile.icon}</div>
              <div className="fi-text">
                <div className="fi-name">{tile.name}</div>
                <div className="fi-detail">{tile.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
