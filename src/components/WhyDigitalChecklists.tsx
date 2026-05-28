export default function WhyDigitalChecklists() {
  return (
    <section id="why" className="why-section">
      <div className="why-inner">
        <div className="why-header">
          <div className="badge" style={{ marginBottom: 16 }}>
            <span className="badge-dot"></span>
            Built for Modern Operations
          </div>
          <h2 className="why-heading">
            Why Digital Checklists Are<br />
            <span className="gradient-text">No Longer Optional</span>
          </h2>
          <p className="why-subtext">
            The shift from paper to digital isn&apos;t just about convenience — it&apos;s about building
            operations that are traceable, scalable, and audit-ready from day one.
          </p>
        </div>

        <div className="why-bento">
          {/* Card 1 */}
          <div className="wb-card wb-wide wbc-purple">
            <div className="wb-content">
              <span className="wb-tag">01 — Management</span>
              <h3 className="wb-title">Centralized Checklist Management</h3>
              <p className="wb-desc">Create, manage, and deploy checklists from a single platform — across
                locations, departments, and teams. Standardize operations without losing site-level flexibility.</p>
              <div className="wb-pills">
                <span className="wb-pill">Single Platform</span>
                <span className="wb-pill">Multi-location</span>
                <span className="wb-pill">Site Flexibility</span>
              </div>
            </div>
            <div className="wb-icon-display">
              <div className="wbd-mockup wbdm-purple">
                <div className="wbdm-row"><span className="wbdm-check done-purple">✓</span><span className="wbdm-label">Morning walkthrough</span></div>
                <div className="wbdm-row"><span className="wbdm-check done-purple">✓</span><span className="wbdm-label">Equipment verified</span></div>
                <div className="wbdm-row"><span className="wbdm-check pend-purple">–</span><span className="wbdm-label">Photo uploaded</span></div>
                <div className="wbdm-row"><span className="wbdm-check pend-purple">–</span><span className="wbdm-label">Sign-off complete</span></div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="wb-card wb-tall wbc-teal">
            <div className="wb-inline-img">
              <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80" alt="Proof-based completion" />
            </div>
            <div className="wb-content">
              <span className="wb-tag">02 — Proof</span>
              <h3 className="wb-title">Proof-Based Task Completion</h3>
              <p className="wb-desc">Each checklist item captures verifiable proof — ensuring transparency,
                accountability, and complete audit readiness at every step.</p>
              <div className="wb-proof-list">
                <div className="wb-proof-row proof-teal"><span className="wb-proof-icon">🕐</span><span>Timestamps</span></div>
                <div className="wb-proof-row proof-teal"><span className="wb-proof-icon">📷</span><span>Image Uploads</span></div>
                <div className="wb-proof-row proof-teal"><span className="wb-proof-icon">📝</span><span>Notes & Exceptions</span></div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="wb-card wbc-green wb-imgcard">
            <div className="wb-inline-img">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" alt="Team visibility" />
            </div>
            <div className="wb-content">
              <span className="wb-tag">03 — Visibility</span>
              <h3 className="wb-title">Real-Time Visibility & Ownership</h3>
              <p className="wb-desc">Track checklist status live. Role-based assignments eliminate confusion and
                ensure clear ownership across every team and site.</p>
              <div className="wb-status-row">
                <div className="wb-status wb-s-green"><span className="wb-sdot sd-green"></span>Completed</div>
                <div className="wb-status wb-s-orange"><span className="wb-sdot sd-orange"></span>Pending</div>
                <div className="wb-status wb-s-red"><span className="wb-sdot sd-red"></span>Missed</div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="wb-card wbc-orange wb-imgcard">
            <div className="wb-inline-img">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Analytics dashboard" />
            </div>
            <div className="wb-content">
              <span className="wb-tag">04 — Insights</span>
              <h3 className="wb-title">Reporting, Compliance & Insights</h3>
              <p className="wb-desc">Generate reports instantly for audits, compliance reviews, and performance
                analysis. Identify gaps and improvement areas — without manual effort.</p>
              <div className="wb-pills">
                <span className="wb-pill">Audits</span>
                <span className="wb-pill">Compliance Reviews</span>
                <span className="wb-pill">Performance Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
