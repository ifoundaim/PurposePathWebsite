import ScrollReveal, { StaggerContainer } from "@/components/ScrollReveal";

export default function ServicesPage() {
  return (
    <section className="section section-prism-cool">
      <div className="container">
        <StaggerContainer staggerDelay={100}>
          <p className="eyebrow stagger-item fall">Studio &amp; build partnerships</p>
          <h1 className="title stagger-item fall">Capabilities</h1>
          <p className="subtitle stagger-item">
            PurposePath builds its own portfolio and selectively helps aligned
            founders move from concept to shipped product. We combine product
            direction, software development, design, and AI-native creative
            production with a growing network of specialist partners.
          </p>
        </StaggerContainer>

        <ScrollReveal className="fall" delay={100}>
          <p className="eyebrow" style={{ marginTop: "48px" }}>Development &amp; Design</p>
        </ScrollReveal>
        <StaggerContainer className="grid grid-2" staggerDelay={120} style={{ marginTop: "12px" }}>
          <div className="card card-soft service-offer-card stagger-item">
            <h3>Founder Launch Site</h3>
            <p className="service-offer-price">Starting investment — $4,997</p>
            <ul style={{ marginTop: "16px", color: "var(--muted)" }}>
              <li>Positioning and conversion-focused page architecture</li>
              <li>Custom responsive design and development</li>
              <li>Core pages, CMS, and analytics setup</li>
              <li>Technical SEO and launch support</li>
              <li>Two focused revision rounds</li>
            </ul>
          </div>
          <div className="card card-soft service-offer-card stagger-item">
            <h3>Product Validation Sprint</h3>
            <p className="service-offer-price">Starting investment — $2,500</p>
            <ul style={{ marginTop: "16px", color: "var(--muted)" }}>
              <li>One-week discovery and decision sprint</li>
              <li>Customer problem and core workflow definition</li>
              <li>Lean prototype of the critical experience</li>
              <li>Technical approach and delivery roadmap</li>
              <li>A clear build, test, or pause recommendation</li>
            </ul>
          </div>
          <div className="card card-soft service-offer-card stagger-item">
            <h3>Production MVP</h3>
            <p className="service-offer-price">Starting investment — $14,997</p>
            <ul style={{ marginTop: "16px", color: "var(--muted)" }}>
              <li>Product scope and implementation plan</li>
              <li>Lean UX/UI for the highest-value flows</li>
              <li>Full-stack web or mobile development</li>
              <li>Required auth, payments, and analytics</li>
              <li>QA, deployment, and handoff documentation</li>
            </ul>
          </div>
        </StaggerContainer>

        <ScrollReveal className="fall" delay={100}>
          <p className="eyebrow" style={{ marginTop: "48px" }}>Marketing &amp; Content</p>
        </ScrollReveal>
        <StaggerContainer className="grid grid-2" staggerDelay={120} style={{ marginTop: "12px" }}>
          <div className="card card-soft service-offer-card stagger-item">
            <h3>Founder Content System</h3>
            <p className="service-offer-price">Starting investment — $1,497/month</p>
            <ul style={{ marginTop: "16px", color: "var(--muted)" }}>
              <li>Narrative and positioning direction</li>
              <li>Four designed social assets each month</li>
              <li>Two short-form videos each month</li>
              <li>Monthly content plan and creative review</li>
              <li>Consistent execution across your brand system</li>
            </ul>
          </div>
          <div className="card card-soft service-offer-card stagger-item">
            <h3>Paid Growth Management</h3>
            <p className="service-offer-price">Starting investment — $1,500/month</p>
            <ul style={{ marginTop: "16px", color: "var(--muted)" }}>
              <li>Campaign and audience strategy</li>
              <li>Meta campaign setup and management</li>
              <li>Budget pacing and ongoing optimization</li>
              <li>Monthly reporting and decision review</li>
              <li>Advertising media spend billed separately</li>
            </ul>
          </div>
        </StaggerContainer>

      </div>
    </section>
  );
}
