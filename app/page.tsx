import Image from "next/image";
import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";
import RainbowFlowText from "@/components/RainbowFlowText";
import ScrollReveal, { StaggerContainer } from "@/components/ScrollReveal";
import purposePathMark from "@/public/brand/purposepath-mark-transparent.png";

const principles = [
  {
    number: "01",
    title: "Liberated",
    description:
      "Technology should expand human agency—not create dependence, lock-in, or quiet extraction.",
  },
  {
    number: "02",
    title: "Ultra-customizable",
    description:
      "People, teams, and imagined worlds are not defaults. Our systems are designed to adapt around them.",
  },
  {
    number: "03",
    title: "Consent-based",
    description:
      "Permissions should be explicit, information should stay under user control, and value should flow back to its source.",
  },
];

const portfolio = [
  {
    index: "01",
    eyebrow: "Creator infrastructure",
    title: "RouteForge",
    status: "In development",
    description:
      "A creator-first registry and licensing platform for protected previews, explicit AI-training permissions, provenance, and artist participation in downstream value.",
    thesis: "Creative rights become usable infrastructure.",
    href: "/illustration-market",
    cta: "Explore RouteForge",
  },
  {
    index: "02",
    eyebrow: "Consumer AI",
    title: "Angelgotchi",
    status: "Incubating",
    description:
      "A character-first AI companion experience spanning expressive hardware and software, designed around a secure, user-controlled personal information ecosystem.",
    thesis: "Powerful AI can feel personal without taking ownership of the person.",
    href: "/contact-us?subject=Angelgotchi",
    cta: "Ask about Angelgotchi",
  },
  {
    index: "03",
    eyebrow: "Venture building",
    title: "Studio & build partnerships",
    status: "Active",
    description:
      "PurposePath combines product strategy, software development, and AI-native creative production with specialist partners to turn ambitious concepts into working systems.",
    thesis: "Shared capability makes every venture faster and stronger.",
    href: "/services",
    cta: "See our capabilities",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero-grid">
          <StaggerContainer className="home-hero-copy" staggerDelay={90}>
            <p className="hero-kicker stagger-item fall">
              PurposePath Corp <span aria-hidden="true">/</span> Portfolio company
            </p>
            <h1 className="hero-manifesto stagger-item fall">
              We build <span>liberated</span>, <span>ultra-customizable</span>,
              and <span>consent-based</span> technology.
            </h1>
            <p className="hero-summary stagger-item">
              A founder-led portfolio of products and partnerships across creator
              infrastructure, consumer AI, and digital experiences—built to give
              people more authorship over the technology in their lives.
            </p>
            <div className="hero-actions stagger-item">
              <a
                className="button hero-primary-button"
                href="#portfolio"
                aria-controls="portfolio"
              >
                <RainbowFlowText className="button-label" text="Explore the portfolio" />
              </a>
              <Link className="hero-text-link" href="/contact-us">
                Build with us <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </StaggerContainer>

          <ScrollReveal className="scale-up portfolio-orbit-wrap" delay={180}>
            <div
              className="portfolio-orbit"
              role="img"
              aria-label="PurposePath principles: liberated, ultra-customizable, and consent-based"
            >
              <div className="orbit-ring orbit-ring-outer" />
              <div className="orbit-ring orbit-ring-middle" />
              <div className="orbit-ring orbit-ring-inner" />
              <div className="orbit-core">
                <Image
                  src={purposePathMark}
                  alt=""
                  width={96}
                  height={96}
                  priority
                />
                <span>PurposePath</span>
              </div>
              <span className="orbit-label orbit-label-one">Liberated</span>
              <span className="orbit-label orbit-label-two">Ultra-customizable</span>
              <span className="orbit-label orbit-label-three">Consent-based</span>
            </div>
          </ScrollReveal>
        </div>

        <div className="container hero-proof-row" aria-label="PurposePath company signals">
          <span>Founder-led</span>
          <span>Boise, Idaho</span>
          <span>AI-native</span>
          <span>Backed by LVLUP</span>
        </div>
      </section>

      <section className="section principles-section" id="principles">
        <div className="container">
          <ScrollReveal className="fall principles-heading">
            <p className="eyebrow">The standard behind every venture</p>
            <h2 className="display-title">
              Technology should become more powerful <em>and</em> more humane.
            </h2>
          </ScrollReveal>

          <StaggerContainer className="principles-grid" staggerDelay={120}>
            {principles.map((principle) => (
              <article className="principle-item stagger-item" key={principle.number}>
                <span className="principle-number">{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section portfolio-section" id="portfolio">
        <div className="container">
          <div className="portfolio-heading-grid">
            <ScrollReveal className="fall">
              <p className="eyebrow">Portfolio &amp; partnerships</p>
              <h2 className="display-title">Different products. One covenant with the user.</h2>
            </ScrollReveal>
            <ScrollReveal className="from-right" delay={120}>
              <p className="portfolio-intro">
                PurposePath is not a collection of unrelated bets. Each initiative
                explores the same question from a different frontier: how can powerful
                technology serve human agency, creative freedom, and trustworthy
                participation?
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer className="portfolio-list" staggerDelay={140}>
            {portfolio.map((venture) => (
              <article className="venture-card stagger-item" key={venture.index}>
                <div className="venture-index">{venture.index}</div>
                <div className="venture-main">
                  <div className="venture-meta">
                    <span>{venture.eyebrow}</span>
                    <span className="venture-status">{venture.status}</span>
                  </div>
                  <h3>{venture.title}</h3>
                  <p>{venture.description}</p>
                </div>
                <div className="venture-close">
                  <p>{venture.thesis}</p>
                  <Link href={venture.href}>
                    {venture.cta} <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section ecosystem-section">
        <div className="container ecosystem-grid">
          <ScrollReveal className="from-left ecosystem-copy">
            <p className="eyebrow">The portfolio advantage</p>
            <h2 className="display-title">Shared principles become shared leverage.</h2>
            <p>
              Product knowledge, development capacity, creative systems, partner
              relationships, and distribution can compound across the portfolio.
              Each venture can strengthen the others without collapsing their distinct
              missions.
            </p>
            <Link className="hero-text-link dark" href="/contact-us">
              Partner with PurposePath <span aria-hidden="true">↗</span>
            </Link>
          </ScrollReveal>

          <StaggerContainer className="ecosystem-stack" staggerDelay={110}>
            <div className="ecosystem-layer stagger-item">
              <span>01</span>
              <div>
                <strong>Human agency</strong>
                <p>The non-negotiable foundation.</p>
              </div>
            </div>
            <div className="ecosystem-layer stagger-item">
              <span>02</span>
              <div>
                <strong>Reusable capability</strong>
                <p>Product, software, creative, and distribution systems.</p>
              </div>
            </div>
            <div className="ecosystem-layer stagger-item">
              <span>03</span>
              <div>
                <strong>Portfolio momentum</strong>
                <p>Every proof point opens a path for the next.</p>
              </div>
            </div>
          </StaggerContainer>
        </div>
      </section>

      <section className="section prototype-section">
        <div className="container prototype-grid">
          <ScrollReveal className="blur-fall prototype-media">
            <HeroVideo />
          </ScrollReveal>
          <StaggerContainer className="prototype-copy" staggerDelay={110}>
            <p className="eyebrow stagger-item fall">Proof through practice</p>
            <h2 className="display-title stagger-item">We prototype the future in public.</h2>
            <p className="stagger-item">
              PurposePath works across product strategy, narrative, generative media,
              and software to test ideas as experiences—not only as decks.
            </p>
            <p className="prototype-note stagger-item">
              Featured experiment: an AI-native animation created with Suno,
              ChatGPT image generation, Vidu, and CapCut.
            </p>
          </StaggerContainer>
        </div>
      </section>

      <section className="section closing-cta-section">
        <div className="container closing-cta">
          <ScrollReveal className="fall">
            <p className="eyebrow">A future worth consenting to</p>
            <h2 className="closing-title">
              Build technology people can shape, trust, and truly call their own.
            </h2>
          </ScrollReveal>
          <ScrollReveal className="from-right closing-actions" delay={120}>
            <Link className="button hero-primary-button" href="/contact-us">
              <RainbowFlowText className="button-label" text="Start a conversation" />
            </Link>
            <Link className="hero-text-link" href="/illustration-market">
              View RouteForge <span aria-hidden="true">↗</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
