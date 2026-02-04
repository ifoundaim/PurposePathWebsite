import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container grid grid-2">
        <div className="fade-in">
          <p className="eyebrow">Talk to the Founder</p>
          <h1 className="title">Contact</h1>
          <p className="subtitle">
            Matthew Reese is eager to speak to potential creative partners,
            distributors, and investors.
          </p>
        </div>
        <div className="card fade-in fade-delay-1">
          <h2 style={{ marginBottom: "16px" }}>Submit an inquiry</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
