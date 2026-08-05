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
            <h3>Website Design &amp; Development (starting at $1,997)</h3>
            <ul style={{ marginTop: "16px", color: "var(--muted)" }}>
              <li>Custom Webflow design</li>
              <li>Mobile-responsive build</li>
              <li>Core pages + blog setup</li>
              <li>Basic SEO optimization</li>
              <li>2 revision rounds</li>
            </ul>
          </div>
          <div className="card card-soft service-offer-card stagger-item">
            <h3>Fully Shippable MVP App Development (starting at $4,997)</h3>
            <ul style={{ marginTop: "16px", color: "var(--muted)" }}>
              <li>1-week discovery + product scope</li>
              <li>Lean UX/UI for core flows</li>
              <li>Full-stack build (web or mobile)</li>
              <li>Auth, payments, and analytics setup</li>
              <li>QA, deployment, and handoff docs</li>
            </ul>
          </div>
        </StaggerContainer>

        <ScrollReveal className="fall" delay={100}>
          <p className="eyebrow" style={{ marginTop: "48px" }}>Marketing &amp; Content</p>
        </ScrollReveal>
        <StaggerContainer className="grid grid-2" staggerDelay={120} style={{ marginTop: "12px" }}>
          <div className="card card-soft service-offer-card stagger-item">
            <h3>Content Creation Bundle ‍ (starting at $797/mo)</h3>
            <ul style={{ marginTop: "16px", color: "var(--muted)" }}>
              <li>4 social media designs/mo</li>
              <li>2 short-form videos/mo</li>
              <li>Basic content strategy</li>
              <li>Brand style adherence</li>
              <li>Monthly planning call</li>
            </ul>
          </div>
          <div className="card card-soft service-offer-card stagger-item">
            <h3>Targeted Ad Management ‍ (starting at $997/mo)</h3>
            <ul style={{ marginTop: "16px", color: "var(--muted)" }}>
              <li>Facebook/Instagram setup</li>
              <li>Custom audience building</li>
              <li>Monthly budget management</li>
              <li>Performance reporting</li>
            </ul>
          </div>
        </StaggerContainer>

      </div>
    </section>
  );
}
