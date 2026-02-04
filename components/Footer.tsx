import Link from "next/link";
import SubscribeForm from "@/components/SubscribeForm";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid-2">
        <div>
          <p className="eyebrow">Stay in the loop</p>
          <h2 className="title">Subscribe</h2>
          <p className="subtitle">
            PurposePath updates on new products, services, and collaborations.
          </p>
          <div style={{ marginTop: "20px" }}>
            <SubscribeForm />
          </div>
        </div>
        <div>
          <p className="eyebrow">Links</p>
          <div className="footer-links" style={{ marginTop: "16px" }}>
            <Link href="/">Home</Link>
            <Link href="/contact-us">Contact</Link>
            <Link href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </Link>
            <Link href="https://throne.com/ifoundaim" target="_blank" rel="noreferrer">
              Throne
            </Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Use</Link>
            <Link href="#">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
