import ScrollReveal, { StaggerContainer } from "@/components/ScrollReveal";

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <StaggerContainer staggerDelay={100}>
          <p className="eyebrow stagger-item fall">Skill Offers</p>
          <h1 className="title stagger-item fall">Skill Offers</h1>
          <p className="subtitle stagger-item">
            From website and app development to content creation and ad
            management, PurposePath brings a range of skills to help
            purpose-driven founders build and grow.
          </p>
        </StaggerContainer>

        <ScrollReveal className="fall" delay={100}>
          <p className="eyebrow" style={{ marginTop: "48px" }}>Development &amp; Design</p>
        </ScrollReveal>
        <StaggerContainer className="grid grid-2" staggerDelay={120} style={{ marginTop: "12px" }}>
          <div className="card card-soft stagger-item">
            <h3>Website Design &amp; Development (starting at $1,997)</h3>
            <ul style={{ marginTop: "16px", color: "var(--muted)" }}>
              <li>Custom Webflow design</li>
              <li>Mobile-responsive build</li>
              <li>Core pages + blog setup</li>
              <li>Basic SEO optimization</li>
              <li>2 revision rounds</li>
            </ul>
          </div>
          <div className="card card-soft stagger-item">
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
          <div className="card card-soft stagger-item">
            <h3>Content Creation Bundle ‍ (starting at $797/mo)</h3>
            <ul style={{ marginTop: "16px", color: "var(--muted)" }}>
              <li>4 social media designs/mo</li>
              <li>2 short-form videos/mo</li>
              <li>Basic content strategy</li>
              <li>Brand style adherence</li>
              <li>Monthly planning call</li>
            </ul>
          </div>
          <div className="card card-soft stagger-item">
            <h3>Targeted Ad Management ‍ (starting at $997/mo)</h3>
            <ul style={{ marginTop: "16px", color: "var(--muted)" }}>
              <li>Facebook/Instagram setup</li>
              <li>Custom audience building</li>
              <li>Monthly budget management</li>
              <li>Performance reporting</li>
            </ul>
          </div>
        </StaggerContainer>

        <ScrollReveal className="fall" delay={100}>
          <h2 className="title" style={{ marginTop: "48px" }}>Hear what our clients are saying</h2>
        </ScrollReveal>

        <ScrollReveal className="scale-up" delay={200}>
          <div
            className="card card-holo review-card"
            style={{ marginTop: "24px" }}
          >
            <div className="review-header">
              <img
                className="review-avatar"
                src="https://raw.githubusercontent.com/ifoundaim/PurposePathWebsite/main/scale%20joel.png"
                alt="Joel Camacho"
                loading="lazy"
              />
              <div>
                <p className="review-name">Joel Camacho</p>
                <p className="review-role">Founder, PCMX</p>
              </div>
            </div>
            <p className="review-quote">
              &quot;Working with Matthew to build my website for PCMX was great and a
              learning experience&quot;
            </p>
            <p className="review-body">
              &quot;Not only was Matthew able to build my website in less than two
              weeks, but he also had a positive attitude throughout the entire
              process. Any business owner / founder is in great hands with
              Matthew.&quot;
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
