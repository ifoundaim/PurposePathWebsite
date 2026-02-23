import Link from "next/link";
import ScrollReveal, { StaggerContainer } from "@/components/ScrollReveal";
import HeroVideo from "@/components/HeroVideo";

export default function HomePage() {
  return (
    <>
      <HeroVideo />

      <section className="section">
        <div className="container">
          <StaggerContainer staggerDelay={120}>
            <p className="eyebrow stagger-item fall">About Us</p>
            <p className="subtitle stagger-item">
              PurposePath is an AI-native multimedia studio and product venture building the tools—and the worlds—that let small teams create big stories. Born from the vision of a scrappy solo founder with an ambition to change how audiences interact with media forever, we're making storytelling more accessible and less dependent on traditional production gatekeepers.
            </p>
            <p className="subtitle stagger-item">
              We're building the PurposePath Story Engine to help creators move from idea to finished experience—concept art, animation, voice, music composition, editing, and beyond—without needing a giant studio behind them. This isn't just content creation. It's experience design: narratives that can evolve into interactive worlds where audiences shape outcomes through their choices.
            </p>
            <p className="subtitle stagger-item">
              Alongside the Story Engine, RouteForge is our creator-first IP registry and licensing marketplace—designed for an AI era where provenance, permissions, and fair value exchange must be built in from the start. Our goal is to help founders, artists, and small teams collaborate with confidence and monetize original work through clear usage rights and licensing pathways. We believe the future of entertainment will be participatory—bridging animation, games, and community-driven story evolution. Audience choices don't just enrich the narrative; they create a feedback loop that helps us refine stories, find niche communities, and expand the worlds that resonate most.
            </p>
            <p className="subtitle stagger-item">
              We're early, lean, and obsessed with iteration. But our direction is long-term: democratize world-class storytelling, honor creators, and build hybrid IP that can thrive across games, streaming, and the next mediums still being invented. Join us as we redefine storytelling, one choice at a time.
            </p>
          </StaggerContainer>
        </div>
      </section>

      <section className="section">
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
            <StaggerContainer className="card mvp-copy" staggerDelay={120}>
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

      <section className="section">
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
                  width: "550px",
                  height: "550px",
                  objectFit: "cover",
                  borderRadius: "14px",
                }}
              />
            </div>
            <div className="stagger-item" style={{ marginTop: "24px" }}>
              <Link className="button secondary" href="https://throne.com/ifoundaim" target="_blank" rel="noreferrer">
                <span className="button-label">Throne</span>
              </Link>
            </div>
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
