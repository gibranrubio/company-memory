import type { Metadata } from "next";
import styles from "./manifesto/manifesto.module.css";

export const metadata: Metadata = {
  title: "The Knowledge | A working memory for your business",
  description:
    "Your company runs on what is in your head. I build it into a private AI memory your whole team can ask. Done for you in seven days, or free with the guide.",
};

const checkoutUrl = "https://buy.stripe.com/00weVd1txg4x8BO6aj4Ni06";

export default function Home() {
  return (
    <main id="top" className={styles.page}>
      <header>
        <a className="brand" href="#top">The Knowledge</a>
        <nav aria-label="Main navigation">
          <a href="/guide">Free guide</a>
        </nav>
        <a className="header-cta" href={checkoutUrl}>Build my Knowledge</a>
      </header>

      <article>
        <section className={styles.hero}>
          <p className={styles.kicker}>A working memory for your business</p>
          <h1>Your company runs on what is in your head.</h1>
          <p className={styles.dek}>
            That is your most valuable asset. It is also your biggest risk.
          </p>
          <div className={styles.byline}>
            <span>Gibran Rubio</span>
            <span>Founder, Green Tech Packaging</span>
          </div>
        </section>

        <section className={styles.essay}>
          <p>
            In London, you cannot drive a black cab until you have passed a test called
            The Knowledge. To pass, you memorize every one of the 25,000 streets inside
            six miles of Charing Cross, plus 20,000 landmarks, plus the fastest route
            between any two points. All of it in your head, no map. It takes most drivers
            three to four years. Scientists have studied their brains and found the
            memory part physically grows from the effort.
          </p>

          <p>
            Here is the strange part. GPS did not kill The Knowledge. The apps have the
            same streets, and the cabbies still beat them, because raw data is not
            judgment. The Knowledge is not a list of streets. It is knowing which one
            floods when it rains, which one backs up at 4pm, which fare wants the scenic
            route. It is context. And for 150 years, the only way to move it from one head
            to another was to make someone spend four years building their own.
          </p>

          <p>
            Every founder has The Knowledge of their own business. I run a company called
            Green Tech Packaging that did $3.6M last year, and for most of that time its
            most important database was my own head. Every price, every customer, which
            vendor makes what, who ships it, which SKU is about to stock out. None of it is
            worth much alone. The value is how it all connects, and that web lived in
            exactly one place.
          </p>

          <p>
            This works until it does not. It does not scale, because I cannot be in every
            conversation. It does not transfer, because my team is each rebuilding a
            fraction of what I know, separately and imperfectly. And it is fragile in a way
            founders never say out loud. If I got hit by a bus, a huge amount of the
            company would go with me.
          </p>

          <blockquote>
            A business that lives in one person&apos;s head is not a company. It is a very
            stressful job you cannot quit.
          </blockquote>

          <p>
            So I built mine somewhere else. Not a folder of documents. A memory. Something
            my team can ask, that never forgets, and, the part that matters, that
            compounds. Most work in a business does not. You fulfill an order and it is
            gone. You answer a customer and the answer evaporates. A memory keeps every one
            of them and makes the next answer better. It is the difference between a salary
            and equity. One is linear. The other bends upward.
          </p>

          <p>
            Early on it looks like nothing. A memory that knows my SKUs feels like a
            slightly better search box. That is the trap. In a year it is the thing that
            knows a customer is quietly opening more clinics and each one needs the same
            bags. It flags the stock-out before it happens. It drafts the quote in my
            voice. It remembers I always book Old Dominion because I have a rate deal. None
            of those facts is powerful alone. The connection between them is where the
            decision lives.
          </p>

          <blockquote>
            It is me, without the part where I have to be in the room for the company to be
            smart.
          </blockquote>

          <p>
            I am stepping deeper into sales now, chasing thirty accounts worth $6,000 a
            month each. The bottleneck is not effort. It is context. A great salesperson is
            just someone who never forgets what a customer cares about. I am turning that
            into software, for every account, forever. That is not a productivity tweak. It
            is cloning the one thing that made me good at this business, without cloning my
            calendar.
          </p>

          <p>
            This is the part nobody sees coming. The founders who win will not be the ones
            who work hardest at reassembling context. They will build the machine that
            assembles it for them, and spend their attention on the work only they can do.
            That is what this is. Not a better search box. A moat, and one you can stand up
            in a few evenings.
          </p>
        </section>

        <section className={styles.closing}>
          <p className={styles.kicker}>What I do</p>
          <h2>I will build your company&apos;s Knowledge in seven days.</h2>
          <p>
            I set up the same system on your machine, map your business with you, connect
            your real sources, and hand back a private memory that already knows how your
            company works. It runs locally, backs up to a private repository only you
            control, and it is yours to keep.
          </p>
          <div className={styles.actions}>
            <a className="button button-white" href={checkoutUrl}>Build my Knowledge</a>
            <a className={styles.secondaryLink} href="/guide">Or do it yourself, free &rarr;</a>
          </div>
          <p style={{ marginTop: "1.5rem", opacity: 0.7, fontSize: "0.95rem" }}>
            $2,000, one time. Delivered in seven days. 100% money-back delivery guarantee.
          </p>
        </section>
      </article>

      <footer>
        <span>The Knowledge</span>
        <span>Built by Gibran Rubio, inside Green Tech Packaging</span>
        <span>2026</span>
      </footer>
    </main>
  );
}
