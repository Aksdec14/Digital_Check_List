export default function Blogs() {
  return (
    <section id="resources" className="blogs-section">
      <div className="blogs-inner">
        <div className="blogs-header">
          <div>
            <div className="badge" style={{ marginBottom: 12 }}><span className="badge-dot"></span>Resources</div>
            <h2 className="blogs-heading">Explore More Blogs on <span className="gradient-text">Digital Checklists</span></h2>
          </div>
          <a href="#" className="blogs-all-link">Explore More Blogs →</a>
        </div>

        <div className="blogs-grid">
          <a href="#" className="blog-card">
            <div className="blog-img blog-img-1"></div>
            <div className="blog-body">
              <span className="blog-tag">Operations</span>
              <h3 className="blog-title">Why Paper Checklists Are Costing Your Facility More Than You Think</h3>
              <p className="blog-excerpt">Manual processes hide inefficiencies. Discover how digital checklists cut costs, reduce errors, and improve team accountability across complex facilities.</p>
              <div className="blog-meta">
                <span>5 min read</span>
                <span className="blog-read-more">Read More →</span>
              </div>
            </div>
          </a>

          <a href="#" className="blog-card">
            <div className="blog-img blog-img-2"></div>
            <div className="blog-body">
              <span className="blog-tag">Compliance</span>
              <h3 className="blog-title">How to Build an Audit-Ready Facility Inspection Programme</h3>
              <p className="blog-excerpt">From daily walkthroughs to annual audits — learn how structured digital checklists keep your operations compliant and inspection-ready at all times.</p>
              <div className="blog-meta">
                <span>7 min read</span>
                <span className="blog-read-more">Read More →</span>
              </div>
            </div>
          </a>

          <a href="#" className="blog-card">
            <div className="blog-img blog-img-3"></div>
            <div className="blog-body">
              <span className="blog-tag">Preventive Maintenance</span>
              <h3 className="blog-title">Checklists vs. Spreadsheets: What Operations Teams Are Switching To</h3>
              <p className="blog-excerpt">Spreadsheets feel familiar but break at scale. See why operations teams across industries are moving to purpose-built digital checklist platforms.</p>
              <div className="blog-meta">
                <span>4 min read</span>
                <span className="blog-read-more">Read More →</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
