const PILLS = [
  'Facilities', 'Manufacturing', 'Healthcare', 'Hospitality',
  'Education', 'Energy', 'Logistics', 'Property Management',
  'Government', 'Retail',
]

export default function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="trust-inner">
        <div className="trust-label">Trusted by operations teams across industries</div>
        <div className="logos-row">
          {PILLS.map((pill) => (
            <span className="logo-pill" key={pill}>{pill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
