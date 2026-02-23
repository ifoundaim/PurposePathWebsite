import Link from "next/link";
import ScrollReveal, { StaggerContainer } from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <section className="hero-video">
        <video
          src="https://videosbucketpurposepath.s3.us-east-2.amazonaws.com/0820.mov"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="PurposePath story reel"
        />
      </section>

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
          <ScrollReveal className="blur-fall">
            <p className="eyebrow">MVP animation</p>
            <h2 className="title">Made using Suno, ChatGPT image gen, Vidu video gen, &amp; CapCut.</h2>
            <p className="subtitle">
              Experienced with story & lyric writing, video editing, & image/video gen on a variety of APIs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <StaggerContainer staggerDelay={150}>
            <p className="eyebrow stagger-item fall">Support the Founder on Throne</p>
            <h2 className="title stagger-item">
              I&apos;m scrappy. I will gratefully &amp; humbly accept all the help
              I can receive to keep up with my health as I lock-in to founder
              mode.
            </h2>
            <div className="stagger-item" style={{ marginTop: "24px" }}>
              <Link className="button" href="https://throne.com/ifoundaim" target="_blank" rel="noreferrer">
                Throne
              </Link>
            </div>
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
