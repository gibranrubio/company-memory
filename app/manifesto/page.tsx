import type { Metadata } from "next";
import styles from "./manifesto.module.css";

export const metadata: Metadata = {
  title: "Why This Helped My $3.6M Business | The Knowledge",
  description:
    "The founder manifesto behind The Knowledge: why a business becomes stronger when its context no longer lives in one person's head.",
};

const checkoutUrl = "https://buy.stripe.com/00weVd1txg4x8BO6aj4Ni06";

export default function Manifesto() {
  return (
    <main id="top" className={styles.page}>
      <div className="announcement">
        <span>A founder manifesto from inside a real $3.6M business.</span>
      </div>

      <header>
        <a className="brand" href="/">The Knowledge</a>
        <nav aria-label="Manifesto navigation">
          <a href="/">Home</a>
          <a href="/#diy">Do it yourself</a>
          <a href="/#done-for-you">Done for you</a>
        </nav>
        <a className="header-cta" href={checkoutUrl}>Build my Knowledge</a>
      </header>

      <article>
        <section className={styles.hero}>
          <p className={styles.kicker}>The Founder Context Manifesto</p>
          <h1>Why this helped my $3.6M business.</h1>
          <p className={styles.dek}>
            The business was not trapped in bad software. It was trapped in my head.
          </p>
          <div className={styles.byline}>
            <span>By Gibran Rubio</span>
            <span>Founder, Green Tech Packaging</span>
          </div>
        </section>

        <section className={styles.essay}>
          <p className={styles.lead}>
            The mistake most founders make is thinking their company is the product.
            It is not. The real company is the founder&apos;s context.
          </p>

          <p>
            It is the ten thousand tiny facts about customers, prices, vendors,
            products, promises, and who does what. Those facts let you make a good
            decision in four seconds instead of forty minutes. That context is the
            actual asset. And almost every founder keeps it in the worst possible
            place: their own head.
          </p>

          <p>
            This works fine until it does not. It does not scale because you cannot
            be in every conversation. It does not transfer because your team is
            rebuilding small pieces of what you know, separately and imperfectly.
            And it is fragile in a way founders rarely want to say out loud.
          </p>

          <blockquote>
            A business that lives in one person&apos;s head is not a company. It is a
            very stressful job you cannot quit.
          </blockquote>

          <h2>Move the context, not just the files.</h2>

          <p>
            Building a company brain means moving the business context out of your
            head and into something your team can query, preserve, and improve.
            The third part is what matters most. Most work in a business disappears.
            You fulfill an order and move on. You answer a customer and the answer
            evaporates. A useful memory keeps the lesson and makes the next answer
            better.
          </p>

          <p>
            It is the difference between earning a salary and owning equity. One is
            linear. The other compounds.
          </p>

          <h2>Compounding looks unimpressive at first.</h2>

          <p>
            In the first month, a memory that knows your SKUs can feel like a better
            search box. That is the trap. It is also what the system feels like right
            before it becomes difficult to work without.
          </p>

          <p>
            Over time it starts connecting the facts. It remembers that a customer
            is opening more locations and each one needs the same bags. It flags the
            stock-out before it happens. It helps draft the quote in your voice. It
            remembers which carrier you prefer because of a rate agreement. None of
            those facts is powerful alone. The connection between them is where the
            decision lives.
          </p>

          <blockquote>
            It is you, minus the part where you have to be personally present for
            the company to be smart.
          </blockquote>

          <h2>The sales advantage is memory.</h2>

          <p>
            I am stepping deeper into sales and chasing thirty large accounts. The
            bottleneck is not effort. It is context. A great salesperson remembers
            what every customer cares about, what was promised, what changed, and
            when to follow up.
          </p>

          <p>
            I am turning that ability into software for every account. That is not a
            productivity tweak. It is a way to clone the part of me that became good
            at this business, without cloning my calendar.
          </p>

          <h2>This is not setting up a tool.</h2>

          <p>
            It is turning a business that fits in your head into one that can outgrow
            it. The founders who win will not be the ones who work hardest at
            reassembling context. They will build the machine that assembles it for
            them, then spend their attention on the work only they can do, like
            landing the next $6,000-a-month account.
          </p>

          <p>
            That is what a company brain gives me: more room to sell, decide, and
            lead without forcing the rest of the company to wait for me.
          </p>
        </section>

        <section className={styles.result}>
          <p className={styles.kicker}>What you end up with</p>
          <h2>A private AI brain that understands the business you give it.</h2>
          <div className={styles.resultGrid}>
            <div>
              <strong>Knows the operation</strong>
              <span>Products, pricing, SOPs, customers, vendors, and decisions.</span>
            </div>
            <div>
              <strong>Finds meaning</strong>
              <span>Searches by ideas and relationships, not only exact words.</span>
            </div>
            <div>
              <strong>Speaks your language</strong>
              <span>Uses a structure built around your company and vocabulary.</span>
            </div>
            <div>
              <strong>Improves over time</strong>
              <span>Consolidates what it learns so useful context can compound.</span>
            </div>
            <div>
              <strong>Connects carefully</strong>
              <span>Can read approved business sources, one connection at a time.</span>
            </div>
            <div>
              <strong>Stays yours</strong>
              <span>Memories remain readable files in a private repository you control.</span>
            </div>
          </div>
        </section>

        <section className={styles.closing}>
          <p className={styles.kicker}>The real reason</p>
          <h2>Your business should get smarter even when you are not in the room.</h2>
          <p>
            Build it yourself with the free guide, or I will install, organize,
            test, and hand it back to you in seven days.
          </p>
          <div className={styles.actions}>
            <a className="button button-white" href={checkoutUrl}>Build my Knowledge</a>
            <a className={styles.secondaryLink} href="/#guide">Use the free guide →</a>
          </div>
        </section>
      </article>

      <footer>
        <span>The Knowledge</span>
        <span>Built from inside Green Tech Packaging</span>
        <span><a href="/">Back to the main site</a></span>
      </footer>
    </main>
  );
}
