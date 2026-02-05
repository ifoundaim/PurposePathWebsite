import ContactForm from "@/components/ContactForm";
import ScrollReveal, { StaggerContainer } from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container grid grid-2">
        <StaggerContainer staggerDelay={120}>
          <p className="eyebrow stagger-item fall">Talk to the Founder</p>
          <h1 className="title stagger-item fall">Contact</h1>
          <p className="subtitle stagger-item">
            Matthew Reese is eager to speak to potential creative partners,
            distributors, and investors.
          </p>
        </StaggerContainer>
        <ScrollReveal className="from-right" delay={200}>
          <div className="card">
            <h2 style={{ marginBottom: "16px" }}>Submit an inquiry</h2>
            <ContactForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
