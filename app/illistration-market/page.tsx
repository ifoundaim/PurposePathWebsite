import { StaggerContainer } from "@/components/ScrollReveal";

export default function IllustrationMarketPage() {
  return (
    <section className="section">
      <div className="container">
        <StaggerContainer staggerDelay={130}>
          <p className="eyebrow stagger-item fall">Illustration Marketplace</p>
          <h1 className="title stagger-item fall">In Dev</h1>
          <p className="subtitle stagger-item">
            Test scanner images and curated illustration collections are coming
            soon.
          </p>
          <h2 className="title stagger-item" style={{ marginTop: "24px" }}>
            Test Scanner Images
          </h2>
        </StaggerContainer>
      </div>
    </section>
  );
}
