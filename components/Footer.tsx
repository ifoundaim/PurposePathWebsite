import Link from "next/link";
import SubscribeForm from "@/components/SubscribeForm";
import ScrollReveal, { StaggerContainer } from "@/components/ScrollReveal";

export default function Footer() {
  return (
    <footer className="footer" id="waitlist-subscribe">
      <div className="container grid grid-2">
        <StaggerContainer staggerDelay={100}>
          <p className="eyebrow stagger-item fall">Stay in the loop</p>
          <h2 className="title stagger-item fall">Subscribe</h2>
          <p className="subtitle stagger-item">
            Notes from the PurposePath portfolio: new products, experiments,
            partnerships, and ways to participate.
          </p>
          <div className="stagger-item" style={{ marginTop: "20px" }}>
            <SubscribeForm />
          </div>
        </StaggerContainer>
        <ScrollReveal className="from-right" delay={150}>
          <p className="eyebrow">Links</p>
          <div className="footer-links" style={{ marginTop: "16px" }}>
            <Link href="/">Home</Link>
            <Link href="/#portfolio">Portfolio</Link>
            <Link href="/#hymn">Hymn</Link>
            <Link href="/#principles">Principles</Link>
            <Link href="/contact-us">Contact</Link>
            <Link href="https://throne.com/ifoundaim" target="_blank" rel="noreferrer">
              Support the founder
            </Link>
            <Link href="/illustration-market">RouteForge</Link>
            <Link href="https://suno.com/@ifoundaim" target="_blank" rel="noreferrer">
              Hymn on Suno
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
