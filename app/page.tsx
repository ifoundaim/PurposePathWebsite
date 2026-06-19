import Link from "next/link";
import ScrollReveal, { StaggerContainer } from "@/components/ScrollReveal";
import HeroVideo from "@/components/HeroVideo";
import RainbowFlowText from "@/components/RainbowFlowText";

export default function HomePage() {
  return (
    <>
      <HeroVideo />

      <section className="section section-prism-warm">
        <div className="container">
          <StaggerContainer staggerDelay={120}>
            <p className="eyebrow stagger-item fall">About Us</p>
            <p className="subtitle stagger-item">
              PurposePath is building creator infrastructure for the AI media era.
            </p>
            <p className="subtitle stagger-item">
              Our introductory product is <strong>RouteForge</strong>, a creator-first registry and licensing platform that helps illustrators protect their work, define usage permissions, and license AI training rights with clearer provenance, consent, and compensation.
            </p>
            <p className="subtitle stagger-item">
              We are starting with the problem artists are facing right now: creative work can be shared, scraped, copied, trained on, and detached from the person who made it. RouteForge is being built to give artists stronger leverage through protected previews, licensing workflows, evidence records, and artist-owned style permissions.
            </p>
            <p className="subtitle stagger-item">
              For producers and creative teams, RouteForge creates a cleaner path to build with licensed visual styles instead of relying on unclear rights or scraped material.
            </p>
            <p className="subtitle stagger-item">
              PurposePath is the larger vision behind the product: a future production ecosystem where small teams can move from story concept to worldbuilding, licensed style selection, concept art, storyboarding, animation, music, publishing, and distribution.
            </p>
            <p className="subtitle stagger-item">
              RouteForge is the foundation. PurposePath is the way forward.
            </p>
            <p className="subtitle stagger-item">
              PurposePath / RouteForge is now backed by <strong>LVLUP</strong>, giving us momentum as we build the MVP, work with early artists, and create infrastructure where creation, consent, and compensation can work together.
            </p>
          </StaggerContainer>
        </div>
      </section>

      <section className="section section-prism-cool">
        <div className="container">
          <div className="mvp-grid">
            <ScrollReveal className="blur-fall mvp-media">
              <div className="video-frame">
                <video
                  src="https://videosbucketpurposepath.s3.us-east-2.amazonaws.com/gentle+to+give.mov"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label="PurposePath MVP animation reel"
                />
              </div>
            </ScrollReveal>
            <StaggerContainer className="card card-soft mvp-copy" staggerDelay={120}>
              <p className="eyebrow stagger-item fall">MVP animation</p>
              <h2 className="title stagger-item">
                Made using Suno, ChatGPT image gen, Vidu video gen, &amp; CapCut.
              </h2>
              <p className="subtitle stagger-item">
                Experienced with story & lyric writing, video editing, & image/video gen on a variety of APIs.
              </p>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <section className="section section-prism-lilac home-founder-support">
        <div className="container">
          <StaggerContainer staggerDelay={150}>
            <p className="eyebrow stagger-item fall">Support the Founder on Throne</p>
            <div
              className="stagger-item"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <h2 className="title" style={{ flex: "1 1 320px", margin: 0 }}>
                I&apos;m scrappy. I will gratefully &amp; humbly accept all the
                help I can receive to keep up with my health as I lock-in to
                founder mode.
              </h2>
              <img
                src="https://raw.githubusercontent.com/ifoundaim/PurposePathWebsite/main/IMG_9746%202.jpg"
                alt="Support the founder on Throne"
                style={{
                  width: "min(550px, 100%)",
                  height: "auto",
                  maxHeight: "550px",
                  objectFit: "contain",
                  borderRadius: "14px",
                  display: "block",
                }}
              />
            </div>
            <div className="stagger-item" style={{ marginTop: "24px" }}>
              <Link className="button secondary" href="https://throne.com/ifoundaim" target="_blank" rel="noreferrer">
                <RainbowFlowText className="button-label" text="Throne" />
              </Link>
            </div>
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
