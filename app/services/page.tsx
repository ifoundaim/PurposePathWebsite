export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow fade-in">Marketing Services</p>
        <h1 className="title fade-in fade-delay-1">Marketing Services</h1>
        <p className="subtitle fade-in fade-delay-2">
          At PurposePath, we offer a suite of services designed to elevate your
          brand and connect with your audience. Our expertise in storytelling
          and digital marketing empowers purpose-driven founders to achieve
          meaningful growth.
        </p>

        <div className="grid grid-2" style={{ marginTop: "32px" }}>
          <div className="card fade-in">
            <h3>Website Design &amp; Development (starting at $1,997)</h3>
            <ul style={{ marginTop: "16px", color: "var(--muted)" }}>
              <li>Custom Webflow design</li>
              <li>Mobile-responsive build</li>
              <li>Core pages + blog setup</li>
              <li>Basic SEO optimization</li>
              <li>2 revision rounds</li>
            </ul>
          </div>
          <div className="card fade-in fade-delay-1">
            <h3>Content Creation Bundle ‍ (starting at $797/mo)</h3>
            <ul style={{ marginTop: "16px", color: "var(--muted)" }}>
              <li>4 social media designs/mo</li>
              <li>2 short-form videos/mo</li>
              <li>Basic content strategy</li>
              <li>Brand style adherence</li>
              <li>Monthly planning call</li>
            </ul>
          </div>
          <div className="card fade-in fade-delay-2">
            <h3>Targeted Ad Management ‍ (starting at $997/mo)</h3>
            <ul style={{ marginTop: "16px", color: "var(--muted)" }}>
              <li>Facebook/Instagram setup</li>
              <li>Custom audience building</li>
              <li>Monthly budget management</li>
              <li>Performance reporting</li>
            </ul>
          </div>
          <div className="card fade-in fade-delay-3">
            <h3>Fully Shippable MVVP App Development (starting at $4,997)</h3>
            <ul style={{ marginTop: "16px", color: "var(--muted)" }}>
              <li>1-week discovery + product scope</li>
              <li>Lean UX/UI for core flows</li>
              <li>Full-stack build (web or mobile)</li>
              <li>Auth, payments, and analytics setup</li>
              <li>QA, deployment, and handoff docs</li>
            </ul>
          </div>
        </div>
        <div className="fade-in" style={{ marginTop: "48px" }}>
          <h2 className="title">Hear what our clients are saying</h2>
        </div>
        <div className="card fade-in fade-delay-1" style={{ marginTop: "24px" }}>
          <h3>
            &quot;Working with Matthew to build my website for PCMX was a great and
            learning experience&quot;
          </h3>
          <p className="subtitle" style={{ marginTop: "16px" }}>
            &quot;Not only was Matthew able to build my website in less than two
            weeks, but he also had a positive attitude throughout the entire
            process. Any business owner / founder is in great hands with
            Matthew.&quot;
          </p>
          <p style={{ marginTop: "12px", fontWeight: 600 }}>Joel Camacho</p>
        </div>
      </div>
    </section>
  );
}
