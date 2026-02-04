import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <p className="eyebrow fade-in">About Us</p>
          <h1 className="title fade-in fade-delay-1">
            PurposePath is an AI-native multimedia studio and product venture
            building the tools—and the worlds—that let small teams create big
            stories.
          </h1>
          <p className="subtitle fade-in fade-delay-2">
            Born from the vision of a scrappy solo founder with an ambition to
            ship meaningful media, we merge story, design, and technology for
            creators who want to move fast without losing soul.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          <div className="fade-in">
            <p className="eyebrow">MVP animation</p>
            <h2 className="title">Made using ChatGPT image gen &amp; Canva.</h2>
            <p className="subtitle">
              Currently experimenting with Fauna &amp; ElevenLabs for a more
              robust production toolkit.
            </p>
          </div>
          <div className="video-frame fade-in fade-delay-1">
            <video
              src="https://videosbucketpurposepath.s3.us-east-2.amazonaws.com/0820.mov"
              controls
              playsInline
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow fade-in">Support the Founder on Throne</p>
          <h2 className="title fade-in fade-delay-1">
            I&apos;m scrappy. I will gratefully &amp; humbly accept all the help
            I can receive to keep up with my health as I lock-in to founder
            mode.
          </h2>
          <div className="fade-in fade-delay-2" style={{ marginTop: "24px" }}>
            <Link className="button" href="https://throne.com/ifoundaim" target="_blank" rel="noreferrer">
              Throne
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
