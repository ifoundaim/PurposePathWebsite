import RainbowFlowText from "@/components/RainbowFlowText";
import { StaggerContainer } from "@/components/ScrollReveal";

export default function IllustrationMarketPage() {
  return (
    <section className="section">
      <div className="container">
        <StaggerContainer staggerDelay={120}>
          <div className="mvp-grid">
            <div className="mvp-copy">
              <p className="eyebrow stagger-item fall">RouteForge</p>
              <h1 className="title stagger-item fall">
                License styles. Train legally. Ship faster.
              </h1>
              <p className="subtitle stagger-item">
                RouteForge is an illustrator marketplace where artists license exclusive AI
                training rights to their work-with protections against unauthorized
                scraping/training and royalty paths when productions use content generated
                from their licensed style.
              </p>
              <p className="subtitle stagger-item">
                For producers, RouteForge is the simplest way to get legitimate rights to
                train on an artist&apos;s style and use it for commercial pipelines-without
                guessing, backchannels, or legal ambiguity.
              </p>
              <p className="subtitle stagger-item">
                <a className="holo-inline-link" href="#waitlist-subscribe">
                  <RainbowFlowText className="menu-label" text="[Subscribe to join the waitlist]" />
                </a>
              </p>
            </div>
            <div className="video-frame stagger-item">
              <iframe
                src="https://www.youtube.com/embed/csNdmEslXU0"
                title="RouteForge intro video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <h2 className="title stagger-item" style={{ marginTop: "28px" }}>
            What RouteForge is for
          </h2>
          <p className="subtitle stagger-item">
            Most AI workflows ignore the two things that matter most:
          </p>
          <p className="subtitle stagger-item">Artist consent + control</p>
          <p className="subtitle stagger-item">Commercial-grade rights</p>
          <p className="subtitle stagger-item">
            RouteForge exists to make style licensing real infrastructure:
          </p>
          <ul className="subtitle stagger-item">
            <li>artists get paid for training rights and downstream usage</li>
            <li>producers get clean rights to train and create commercial assets</li>
            <li>the ecosystem keeps styles usable, trackable, and protected</li>
          </ul>

          <h2 className="title stagger-item" style={{ marginTop: "28px" }}>
            For illustrators
          </h2>
          <p className="subtitle stagger-item">
            Turn your body of work into an asset you control.
          </p>
          <p className="subtitle stagger-item">With RouteForge, you can:</p>
          <ul className="subtitle stagger-item">
            <li>
              Sell training licenses (including exclusive options) with clear terms
            </li>
            <li>
              Choose what&apos;s licensed: portfolios, collections, or specific series
            </li>
            <li>
              Earn royalties when productions generate commercial content using your
              licensed style
            </li>
            <li>Keep your work from becoming &quot;free training data&quot; by default</li>
          </ul>
          <p className="subtitle stagger-item">
            Protection systems (the point of the marketplace):
          </p>
          <ul className="subtitle stagger-item">
            <li>Controlled access to training datasets (not public scraping)</li>
            <li>
              Clear licensing contracts + audit trails for who trained what, and when
            </li>
            <li>
              Provenance/usage metadata designed for royalty accounting (No system can
              stop all misuse everywhere, but RouteForge is built to drastically reduce
              risk and make enforcement practical.)
            </li>
          </ul>

          <h2 className="title stagger-item" style={{ marginTop: "28px" }}>
            For producers
          </h2>
          <p className="subtitle stagger-item">
            Get rights to train on real styles-then produce at scale.
          </p>
          <p className="subtitle stagger-item">With RouteForge, producers can:</p>
          <ul className="subtitle stagger-item">
            <li>Browse and license artist styles with explicit commercial terms</li>
            <li>Obtain training-ready access under the license you purchased</li>
            <li>
              Build a consistent look across campaigns, series, or products
            </li>
            <li>Produce faster without sacrificing brand consistency</li>
          </ul>
          <p className="subtitle stagger-item">
            You&apos;re not &quot;inspired by&quot; a style-you&apos;re licensed to train on it.
          </p>

          <h2 className="title stagger-item" style={{ marginTop: "28px" }}>
            The ecosystem this becomes: PurposePath
          </h2>
          <p className="subtitle stagger-item">
            RouteForge is the marketplace layer. PurposePath is the pipeline.
          </p>
          <p className="subtitle stagger-item">
            PurposePath = a suite of multimedia creator tools that plug into licensed
            styles from RouteForge. So once you license a style, you can use it across
            an end-to-end production route.
          </p>
          <p className="subtitle stagger-item">
            <strong>Example: Story route</strong>
          </p>
          <p className="subtitle stagger-item">
            Story + world concept -&gt; select licensed style -&gt; generate concept
            art -&gt; storyboard/whiteboard -&gt; animate -&gt; publish &amp; distribute
          </p>
          <p className="subtitle stagger-item">
            <strong>Example: Game route</strong>
          </p>
          <p className="subtitle stagger-item">
            Game idea -&gt; select licensed style -&gt; concept art + UI moodboards
            -&gt; character/environment sets -&gt; animation/cinematics -&gt;
            build-ready exports
          </p>
          <p className="subtitle stagger-item">
            Same promise across both:
          </p>
          <ul className="subtitle stagger-item">
            <li>licensed styles are available as tools, not just a contract</li>
            <li>outputs carry metadata for usage tracking and royalties</li>
            <li>
              creators and producers share a clean rights chain from start to finish
            </li>
          </ul>

          <h2 className="title stagger-item" style={{ marginTop: "28px" }}>
            Why this matters
          </h2>
          <p className="subtitle stagger-item">
            RouteForge isn&apos;t &quot;another AI art tool.&quot; It&apos;s rights +
            revenue + production tooling-built into one system.
          </p>
          <p className="subtitle stagger-item">
            Artists get paid for the value they create. Producers get speed without
            legal uncertainty. The work moves from idea to finished media through a
            single route.
          </p>

          <h2 className="title stagger-item" style={{ marginTop: "28px" }}>
            In development
          </h2>
          <p className="subtitle stagger-item">
            We&apos;re building with illustrators and commercial teams who need this to
            be real-not theoretical.
          </p>
          <p className="subtitle stagger-item">
            <a className="holo-inline-link" href="#waitlist-subscribe">
              <RainbowFlowText className="menu-label" text="[Subscribe to join the waiting list]" />
            </a>
          </p>
        </StaggerContainer>
      </div>
    </section>
  );
}
