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
          <img
            className="stagger-item"
            src="https://raw.githubusercontent.com/ifoundaim/PurposePathWebsite/main/IMG_4570.heic"
            alt="Founder portrait"
            style={{
              width: "550px",
              height: "550px",
              objectFit: "cover",
              borderRadius: "14px",
              marginTop: "12px",
            }}
          />
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
