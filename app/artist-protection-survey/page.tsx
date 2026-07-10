import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RainbowFlowText from "@/components/RainbowFlowText";
import { StaggerContainer } from "@/components/ScrollReveal";
import surveyFlyer from "@/public/artist-protection-survey.jpg";

const SURVEY_URL =
  "https://docs.google.com/forms/d/1BPTD9KeAlXDSL6ogXB-cltEoX5fhj-FTCL3B7uhJ2nc/viewform";

export const metadata: Metadata = {
  title: "Artist Protection Survey | PurposePath",
  description:
    "A short creator survey on AI scraping, artist protection technologies, and licensing opportunities.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ArtistProtectionSurveyPage() {
  return (
    <section className="section section-prism-warm">
      <div className="container" style={{ maxWidth: "720px", textAlign: "center" }}>
        <StaggerContainer staggerDelay={120}>
          <p className="eyebrow stagger-item fall">Private invite</p>
          <h1 className="title stagger-item fall">Artist Protection Survey</h1>
          <p className="subtitle stagger-item">
            Help shape tools for art protection, AI consent, and licensing
            pathways. This short survey is for illustrators, artists, and
            creators — about 2 minutes.
          </p>

          <div className="stagger-item" style={{ marginTop: "28px" }}>
            <Image
              src={surveyFlyer}
              alt="Artist Protection Survey flyer for PurposePath and RouteForge"
              width={1587}
              height={2245}
              priority
              style={{
                width: "100%",
                maxWidth: "520px",
                height: "auto",
                borderRadius: "14px",
                boxShadow: "0 18px 48px rgba(14, 15, 17, 0.16)",
              }}
            />
          </div>

          <p className="subtitle stagger-item" style={{ marginTop: "28px" }}>
            Click below to participate in the creator survey about AI, artist
            protection technologies, and licensing opportunities.
          </p>

          <div className="stagger-item" style={{ marginTop: "20px" }}>
            <Link
              className="button menu-surface"
              href={SURVEY_URL}
              target="_blank"
              rel="noreferrer"
            >
              <RainbowFlowText
                className="button-label"
                text="TAKE THE 2-MINUTE SURVEY"
              />
            </Link>
          </div>

          <p
            className="subtitle stagger-item"
            style={{ marginTop: "16px", fontSize: "0.95rem", opacity: 0.85 }}
          >
            Optional contact info. Your perspective matters.
          </p>
        </StaggerContainer>
      </div>
    </section>
  );
}
