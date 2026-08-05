import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ScrollReveal, { StaggerContainer } from "@/components/ScrollReveal";
import founderPortrait from "@/READY 2 GO.jpg";

export default function ContactPage() {
  return (
    <section className="section section-prism-lilac">
      <div className="container grid grid-2">
        <StaggerContainer staggerDelay={120}>
          <p className="eyebrow stagger-item fall">Talk to the Founder</p>
          <h1 className="title stagger-item fall">Contact</h1>
          <p className="subtitle stagger-item">
            Matthew Reese is eager to speak to potential creative partners,
            distributors, and investors.
          </p>
          <Image
            className="stagger-item"
            src={founderPortrait}
            alt="Founder portrait"
            style={{
              width: "550px",
              maxWidth: "100%",
              height: "auto",
              objectFit: "contain",
              borderRadius: "14px",
              marginTop: "12px",
            }}
          />
        </StaggerContainer>
        <ScrollReveal className="from-right" delay={200}>
          <div className="card card-soft">
            <h2 style={{ marginBottom: "16px" }}>Submit an inquiry</h2>
            <ContactForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
