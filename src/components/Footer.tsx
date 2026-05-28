import Image from 'next/image'

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Image src="/FusionEdge_logo.png" alt="FusionEdge" className="footer-logo" width={180} height={45} />
            <p className="footer-tagline">
              FusionEdge is a unified asset management platform helping organizations track,
              manage, and optimize assets with preventive maintenance for maximum uptime and efficiency.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h5>Product</h5>
              <a href="#platform">Platform</a>
              <a href="#solutions">Solutions</a>
              <a href="#integrations">Integrations</a>
              <a href="#resources">Resources</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="footer-col">
              <h5>Company</h5>
              <a href="#">Industries</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-col">
              <h5>Legal</h5>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms &amp; Conditions</a>
              <a href="#">Security</a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copy">&copy; 2025 FusionEdge. All rights reserved.</p>
          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn" className="social-btn">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" aria-label="X (Twitter)" className="social-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
