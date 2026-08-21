const checkoutUrl = "https://buy.stripe.com/00weVd1txg4x8BO6aj4Ni06";

const bootstrapPrompt = `Read and follow every step of:
https://raw.githubusercontent.com/garrytan/gbrain/latest-stable/BOOTSTRAP_FOR_AGENTS.md
Goal: set yourself up as my persistent personal agent in this folder, with gbrain
as your memory. Interview me before writing any identity file. Never invent
answers. Ask before anything destructive. You are not done until
\`gbrain bootstrap verify\` exits 0.`;

export default function Home() {
  return (
    <main id="top">
      <div className="announcement">
        <span>Built for founders whose business still lives in their head.</span>
      </div>

      <header>
        <a className="brand" href="#top">The Knowledge</a>
        <nav aria-label="Main navigation">
          <a href="/manifesto">Why it matters</a>
          <a href="#diy">Do it yourself</a>
          <a href="#done-for-you">Done for you</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="header-cta" href={checkoutUrl}>Build my Knowledge</a>
      </header>

      <section className="hero">
        <p className="eyebrow">A working memory for your business</p>
        <h1>The most important database in<br />your company is still your head.</h1>
        <p className="hero-copy">
          I know, because I run one. At Green Tech Packaging I keep every price, every
          customer, which vendor makes what, who ships it, and which SKU is about to
          stock out. None of it is worth much alone. The value is how it all connects,
          and that web lived in one place: my head. It took years to build, and if I
          got hit by a bus most of it would go with me. London cab drivers spend four
          years memorizing every street of the city and call it The Knowledge. I built
          mine into something my whole team can ask, that never forgets, and gets
          sharper every day. I will build yours in seven days.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href={checkoutUrl}>Build my Knowledge</a>
          <a className="button button-light" href="#diy">I will do it myself</a>
        </div>
        <p className="microcopy">$2,000 done for you. Free guide below. 100% money-back delivery guarantee.</p>
      </section>

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

      <section className="value section-pad">
        <div className="section-label">What you are buying</div>
        <div className="value-body">
          <h2>You are paying to skip the empty database.</h2>
          <div>
            <p>
              You leave with a memory that already knows the shape of your business,
              where the important information lives, and how to answer the questions you
              ask every week.
            </p>
            <p className="value-callout">
              An empty database is just software.<br />Your Knowledge is leverage.
            </p>
          </div>
        </div>
      </section>

      <section className="outcomes section-pad">
        <div className="section-label">What it can help you answer</div>
        <div className="question-list">
          <p>&ldquo;Which customers buy this SKU, and what did we quote them?&rdquo;</p>
          <p>&ldquo;Why did we choose this vendor instead of the other one?&rdquo;</p>
          <p>&ldquo;What did I promise this customer the last time we spoke?&rdquo;</p>
          <p>&ldquo;Which products are at risk of stocking out?&rdquo;</p>
          <p>&ldquo;What decisions keep coming back to me?&rdquo;</p>
        </div>
        <p className="outcome-note">
          It shows its sources and tells you when it does not know.
        </p>
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

      <section className="fit section-pad">
        <div className="section-label">Who this is for</div>
        <div className="fit-grid">
          <div>
            <h3>A strong fit</h3>
            <ul>
              <li>You run a founder-led business</li>
              <li>Your team repeatedly asks you the same questions</li>
              <li>Knowledge is spread across documents, email, and people</li>
              <li>You already use Claude Code or want to start</li>
              <li>You want to own your memory instead of renting another SaaS tool</li>
            </ul>
          </div>
          <div>
            <h3>Probably not a fit</h3>
            <ul>
              <li>You only want a generic chatbot</li>
              <li>You are unwilling to organize or connect any source material</li>
              <li>You need enterprise-wide deployment on day one</li>
              <li>You expect the local version to run while your Mac is asleep</li>
              <li>You need a finished SaaS dashboard instead of an agent workflow</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="faq section-pad" id="faq">
        <div className="section-label">Frequently asked questions</div>
        <div className="faq-list">
          <details>
            <summary>Is my information private?</summary>
            <p>
              The core database runs locally on your computer, and the bootstrap can
              create a private GitHub repository for durable backup. Any AI provider or
              outside source you connect has its own data policy. I explain those
              boundaries before we connect anything, and you approve every source.
            </p>
          </details>
          <details>
            <summary>Does it work while my Mac is asleep?</summary>
            <p>
              No. The local setup is awake when Claude Code is running. True 24/7
              ingestion and overnight processing require a separate hosted setup with
              additional server and API costs.
            </p>
          </details>
          <details>
            <summary>Do I need to be technical?</summary>
            <p>
              Not for the done-for-you path. I handle the installation and guide you
              through the decisions. The DIY path is best for someone comfortable
              opening Terminal and following technical prompts carefully.
            </p>
          </details>
          <details>
            <summary>Are there ongoing fees?</summary>
            <p>
              My $2,000 fee is one time. Your Claude subscription, optional API usage,
              third-party connectors, and any future hosting are separate and paid
              directly to those providers.
            </p>
          </details>
          <details>
            <summary>Are you selling GBrain?</summary>
            <p>
              No. GBrain is open-source software created by Garry Tan. I sell the setup,
              knowledge architecture, source connection, workflow design, training, and
              implementation around it.
            </p>
          </details>
          <details>
            <summary>What is the 100% money-back guarantee?</summary>
            <p>
              If I do not deliver a working Knowledge within seven days of kickoff, after
              you provide the required access and source material, I will refund 100% of
              your payment. Working means GBrain is installed, the private backup is
              configured, the agreed sources are connected, five workflows are delivered,
              and the memory round-trip test passes.
            </p>
          </details>
          <details>
            <summary>What happens after seven days?</summary>
            <p>
              You leave with a working setup, a trained first set of workflows, and a
              clear handoff. Your Knowledge belongs to you and gets more useful as you
              keep adding decisions, notes, projects, and source material.
            </p>
          </details>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Stop re-explaining your company to your AI</p>
        <h2>By next week, your business can have a memory.</h2>
        <p>
          I will build the first version, connect the important sources, and show you
          how to use it on the questions that already slow you down.
        </p>
        <a className="button button-white" href={checkoutUrl}>Build my Knowledge</a>
        <span>$2,000 one time. Delivered in seven days. 100% money-back delivery guarantee.</span>
      </section>

      <footer>
        <span>The Knowledge</span>
        <span>Built by Gibran Rubio</span>
        <span>2026</span>
      </footer>
    </main>
  );
}
