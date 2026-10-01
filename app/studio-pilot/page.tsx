import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import routeForgeArtwork from "@/public/brand/routeforge-pilot-artwork.webp";

export const metadata: Metadata = {
  title: "Founding Studio Pilot | RouteForge",
  description:
    "One production, 1-3 creators, one paid license. Test a rights-scoped AI-assisted image or video workflow with RouteForge.",
};

const details = [
  {
    title: "One scoped production",
    body: "Select one real production, 1-3 creators and one paid license. Agree on the source assets, tools, outputs, territory, term, distribution and excluded uses before work begins.",
  },
  {
    title: "Explicit permission",
    body: "Specify model training, fine-tuning, inference and derivative image or video generation separately. Additional productions or uses require a new agreement.",
  },
  {
    title: "Source-to-output evidence",
    body: "Connect creator, source asset, license and payment obligation in a provenance record. Test embedded metadata on approved derivative image and video deliverables that points back to that record.",
  },
  {
    title: "Usage and payment record",
    body: "Log approved outputs and known placements, and reconcile the creator payment. Keep an external record because embedded metadata can be removed in downstream workflows.",
  },
];

export default function StudioPilotPage() {
  return (
    <article className="pilot-page">
      <div className="pilot-shell">
        <div className="pilot-kicker">RouteForge / Founding Studio Pilot</div>
        <header className="pilot-hero">
          <div className="pilot-hero-copy">
            <h1>One production. Clear creator rights. A paid proof of workflow.</h1>
            <p>
              License creator-owned visual work for a defined AI-assisted image
              or video use, with permission, provenance, output linkage and
              compensation documented together.
            </p>
            <Link className="pilot-primary-link" href="/contact-us">
              Discuss a pilot
            </Link>
          </div>
          <div className="pilot-artwork">
            <Image
              src={routeForgeArtwork}
              alt="RouteForge emblem and the words License art. Bring worlds to life."
              priority
              sizes="(max-width: 760px) 100vw, 44vw"
            />
          </div>
        </header>

        <div className="pilot-divider" />
        <section className="pilot-detail-grid" aria-label="Pilot deliverables">
          {details.map(({ title, body }) => (
            <div className="pilot-detail" key={title}>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          ))}
        </section>

        <section className="pilot-service">
          <h2>White-glove onboarding</h2>
          <p>
            PurposePath coordinates intake, rights scoping, creator consent,
            record setup and a closing evidence packet with your production and
            business-affairs contacts. Your team approves the use before licensed
            work begins.
          </p>
        </section>

        <section className="pilot-timeline">
          <h2>Expected timeline</h2>
          <ol>
            <li><strong>Week 1</strong> Select a production, creators, assets and terms.</li>
            <li><strong>Week 2</strong> Complete agreements, approvals, payment setup and provenance intake.</li>
            <li><strong>Weeks 3-4</strong> Review approved outputs, metadata, known usage and payment records.</li>
          </ol>
          <p>Timing depends on production availability and legal review.</p>
        </section>

        <footer className="pilot-close">
          <h2>Bring one production to the table.</h2>
          <p>
            Share the project and the production or business-affairs owner. We
            will map a narrow pilot in a 20-minute call.
          </p>
          <Link className="pilot-primary-link" href="/contact-us">
            Start a conversation
          </Link>
          <small>Final scope, pricing and technical acceptance criteria are agreed in writing.</small>
        </footer>
      </div>
    </article>
  );
}
