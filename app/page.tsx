import type { Metadata } from "next";
import styles from "./manifesto/manifesto.module.css";

export const metadata: Metadata = {
  title: "The Knowledge | A working memory for your business",
  description:
    "Your company runs on what is in your head. I build it into a private AI memory your whole team can ask. Done for you in seven days, or free with the guide.",
};

const checkoutUrl = "https://buy.stripe.com/00weVd1txg4x8BO6aj4Ni06";

const bootstrapPrompt = `Read and follow every step of:
https://raw.githubusercontent.com/garrytan/gbrain/latest-stable/BOOTSTRAP_FOR_AGENTS.md
Goal: set yourself up as my persistent personal agent in this folder, with gbrain
as your memory. Interview me before writing any identity file. Never invent
answers. Ask before anything destructive. You are not done until
\`gbrain bootstrap verify\` exits 0.`;

export default function Home() {
  return (
    <main id="top" className={styles.page}>
      <header>
        <a className="brand" href="#top">The Knowledge</a>
        <nav aria-label="Main navigation">
          <a href="#guide">Free guide</a>
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

        </article>

      <section className="gbrain-credit" aria-labelledby="gbrain-credit-title">
        <div className="gbrain-credit-main">
          <div>
            <p className="eyebrow">Built on open source</p>
            <h2 id="gbrain-credit-title">Built on GBrain.</h2>
          </div>
          <p className="gbrain-credit-copy">
            GBrain is the open-source memory system created by Garry Tan, President and
            CEO of Y Combinator, with more than 28,000 GitHub stars. I do not sell the
            software. I sell the setup that turns an empty database into your company&apos;s
            Knowledge.
          </p>
        </div>

        <div className="gbrain-credit-meta">
          <a
            className="gbrain-repo-link"
            href="https://github.com/garrytan/gbrain"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View the official repository</span>
            <img
              src="https://img.shields.io/github/stars/garrytan/gbrain?style=flat-square&logo=github&label=GitHub%20stars&color=111111"
              alt="Live GitHub star count for garrytan/gbrain"
              loading="lazy"
            />
          </a>
        </div>

        <p className="gbrain-disclaimer">
          The Knowledge is an independent implementation service. It is not affiliated
          with, sponsored by, or endorsed by Garry Tan, Y Combinator, or the GBrain
          project.
        </p>
      </section>

      <section className="proof-line" aria-label="Offer highlights">
        <div><strong>7 days</strong><span>From kickoff to working Knowledge</span></div>
        <div><strong>3 sources</strong><span>Connected and organized</span></div>
        <div><strong>5 workflows</strong><span>Built around your real work</span></div>
        <div><strong>You own it</strong><span>Local-first with private backup</span></div>
      </section>

      <section className="before-after section-pad">
        <div className="section-label">The difference</div>
        <div className="comparison-list">
          <div className="comparison-row comparison-head">
            <span>Without memory</span>
            <span>With your Knowledge</span>
          </div>
          <div className="comparison-row">
            <span>Explain your business again</span>
            <span>Start with the right context</span>
          </div>
          <div className="comparison-row">
            <span>Search through old chats</span>
            <span>Ask a question and trace the source</span>
          </div>
          <div className="comparison-row">
            <span>Keep decisions in your head</span>
            <span>Turn decisions into durable memory</span>
          </div>
          <div className="comparison-row">
            <span>Lose context between sessions</span>
            <span>Let useful knowledge compound</span>
          </div>
        </div>
      </section>

      <section className="choice section-pad">
        <div className="section-label">Choose your path</div>
        <div className="choice-intro">
          <h2>Do it yourself, or have me build it.</h2>
          <p>
            The install takes about 15 minutes. Mapping your business, importing the
            right knowledge, and teaching it how you actually work is where the value
            is, and where I come in.
          </p>
        </div>

        <div className="offer-grid">
          <article className="offer" id="diy">
            <p className="offer-kicker">Path 01</p>
            <h3>Do it yourself</h3>
            <p className="price">Free</p>
            <p className="offer-summary">
              Best if you are comfortable in Terminal and want to experiment with a
              personal brain first.
            </p>
            <ul>
              <li>Follow the official GBrain bootstrap</li>
              <li>Create a local memory on your Mac</li>
              <li>Connect it to Claude Code</li>
              <li>Create a private GitHub backup</li>
              <li>Import and organize your own knowledge</li>
              <li>Troubleshoot and build workflows yourself</li>
            </ul>
            <a className="text-link" href="#guide">Go to the free guide ↓</a>
          </article>

          <article className="offer offer-featured" id="done-for-you">
            <p className="offer-kicker">Path 02</p>
            <h3>The Knowledge, done for you</h3>
            <p className="price">$2,000 <small>one time</small></p>
            <p className="offer-summary">
              Best for founders who want a working company memory without spending a
              week learning the system.
            </p>
            <ul>
              <li>Founder knowledge-mapping session</li>
              <li>Complete GBrain and Claude Code setup</li>
              <li>Private local memory and verified backup</li>
              <li>Up to three knowledge sources connected</li>
              <li>Your customers, vendors, projects, and decisions organized</li>
              <li>Five workflows built around your real questions</li>
              <li>Launch session and team handoff</li>
            </ul>
            <a className="button button-white" href={checkoutUrl}>Build my Knowledge</a>
            <div className="offer-guarantee">
              <strong>100% Money-Back Delivery Guarantee</strong>
              <p>
                If I do not deliver a working Knowledge within seven days of kickoff,
                after you provide the required access and source material, I will refund
                100% of your payment.
              </p>
            </div>
            <p className="offer-note">Delivered in seven days. You own the setup.</p>
          </article>
        </div>
      </section>

      <section className="guide section-pad" id="guide">
        <div className="section-label">The free setup guide</div>
        <div className="guide-intro">
          <h2>Build your personal AI brain in about 15 minutes.</h2>
          <p>
            This is the current recommended Claude Code path from the official GBrain
            documentation. Use a new, empty folder, not an existing project.
          </p>
        </div>

        <ol className="steps">
          <li>
            <div className="step-number">01</div>
            <div>
              <h3>Install Claude Code</h3>
              <p>Open Terminal on your Mac and run:</p>
              <pre><code>curl -fsSL https://claude.ai/install.sh | bash</code></pre>
              <p>Close and reopen Terminal, run <code>claude</code>, and sign in.</p>
            </div>
          </li>
          <li>
            <div className="step-number">02</div>
            <div>
              <h3>Create a new folder for your brain</h3>
              <pre><code>{`mkdir ~/brain\ncd ~/brain\nclaude`}</code></pre>
            </div>
          </li>
          <li>
            <div className="step-number">03</div>
            <div>
              <h3>Paste the official bootstrap prompt into Claude Code</h3>
              <pre className="prompt"><code>{bootstrapPrompt}</code></pre>
              <p>
                Claude Code will guide the installation, ask six identity questions,
                create the local memory, and connect a private GitHub repository.
                Approve each step only after reading it.
              </p>
            </div>
          </li>
          <li>
            <div className="step-number">04</div>
            <div>
              <h3>Prove that it remembers</h3>
              <p>
                Tell it one small thing to remember. Close the session, open a fresh
                session in the same folder, and ask for that fact back. If it returns
                the fact from memory, the setup is working.
              </p>
            </div>
          </li>
          <li>
            <div className="step-number">05</div>
            <div>
              <h3>Fill the brain</h3>
              <p>
                Start with notes and documents you already own. GBrain also supports
                consented imports for email, calendar, contacts, and offline archives.
                Connect one source at a time and review what is being imported.
              </p>
            </div>
          </li>
        </ol>

        <div className="guide-warning">
          <strong>Important:</strong>
          <p>
            Do not run <code>bun install -g gbrain</code>. The package named
            <code> gbrain</code> on npm is unrelated to Garry Tan&apos;s GBrain. Use the
            official bootstrap above or the documented GitHub install path.
          </p>
        </div>
      </section>

      
      <footer>
        <span>The Knowledge</span>
        <span>Built by Gibran Rubio, inside Green Tech Packaging</span>
        <span>2026</span>
      </footer>
    </main>
  );
}
