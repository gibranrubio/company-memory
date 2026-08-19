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
        <a className="brand" href="#top">Company Memory</a>
        <nav aria-label="Main navigation">
          <a href="#diy">Do it yourself</a>
          <a href="#done-for-you">Done for you</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="header-cta" href={checkoutUrl}>Build mine</a>
      </header>

      <section className="hero">
        <p className="eyebrow">A persistent AI brain for your business</p>
        <h1>Your AI is brilliant.<br />Then it forgets everything.</h1>
        <p className="hero-copy">
          Give Claude Code a private memory that survives every new conversation.
          It can remember your customers, vendors, projects, decisions, and the
          connections between them.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href={checkoutUrl}>Build it for me</a>
          <a className="button button-light" href="#diy">I will do it myself</a>
        </div>
        <p className="microcopy">$2,000 done-for-you setup. Free instructions below.</p>
      </section>

      <section className="proof-line" aria-label="Offer highlights">
        <div><strong>7 days</strong><span>From kickoff to working brain</span></div>
        <div><strong>3 sources</strong><span>Connected and organized</span></div>
        <div><strong>5 workflows</strong><span>Built around your real work</span></div>
        <div><strong>You own it</strong><span>Local-first with private backup</span></div>
      </section>

      <section className="story section-pad">
        <div className="section-label">Why I built this</div>
        <div className="story-body">
          <h2>I run a $4 million company. The most important database was still my brain.</h2>
          <div className="story-copy">
            <p>
              At Green Tech Packaging, I know which customer buys which product,
              which vendor makes it, what margin we earn, which broker ships it,
              and when it is about to stock out.
            </p>
            <p>
              None of those facts is especially valuable alone. The value is in
              the connection between them. That connection was trapped in my head,
              so every important question eventually came back to me.
            </p>
            <p>
              I set up GBrain with Claude Code so those relationships could live
              somewhere else. Now my AI can carry context from one session to the
              next instead of starting from zero every morning.
            </p>
          </div>
        </div>
      </section>

      <section className="before-after section-pad">
        <div className="section-label">The difference</div>
        <div className="comparison-list">
          <div className="comparison-row comparison-head">
            <span>Without memory</span>
            <span>With Company Memory</span>
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
          <h2>You can install the software yourself. Or I can make it useful.</h2>
          <p>
            The basic installation takes about 15 minutes. Building the structure,
            importing the right knowledge, and teaching it how your company works
            is where the real work begins.
          </p>
        </div>

        <div className="offer-grid">
          <article className="offer" id="diy">
            <p className="offer-kicker">Path 01</p>
            <h3>Do it yourself</h3>
            <p className="price">Free</p>
            <p className="offer-summary">
              Best if you are comfortable in Terminal and want to experiment with
              a personal brain first.
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
            <h3>I build it for you</h3>
            <p className="price">$2,000 <small>one time</small></p>
            <p className="offer-summary">
              Best for founders who want a working company brain without spending
              a week learning the system.
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
            <a className="button button-white" href={checkoutUrl}>Build my Company Memory</a>
            <p className="offer-note">Delivered in seven days. You own the setup.</p>
          </article>
        </div>
      </section>

      <section className="value section-pad">
        <div className="section-label">What you are buying</div>
        <div className="value-body">
          <h2>This is not $2,000 to paste five commands.</h2>
          <div>
            <p>
              GBrain is open-source. I am not selling you the software. I am selling
              the implementation.
            </p>
            <p>
              You are paying to skip the blank-database problem and leave with a
              memory that already understands the shape of your business, knows
              where important information lives, and can help with the questions
              you ask every week.
            </p>
            <p className="value-callout">
              An empty brain is a database.<br />A filled brain is leverage.
            </p>
          </div>
        </div>
      </section>

      <section className="outcomes section-pad">
        <div className="section-label">What it can help you answer</div>
        <div className="question-list">
          <p>“Which customers buy this SKU, and what did we quote them?”</p>
          <p>“Why did we choose this vendor instead of the other one?”</p>
          <p>“What did I promise this customer the last time we spoke?”</p>
          <p>“Which products are at risk of stocking out?”</p>
          <p>“What decisions keep coming back to me?”</p>
        </div>
        <p className="outcome-note">
          The exact answers depend on the information you choose to connect. The
          system shows its sources and can tell you when it does not know.
        </p>
      </section>

      <section className="guide section-pad" id="guide">
        <div className="section-label">The free setup guide</div>
        <div className="guide-intro">
          <h2>Build your personal AI brain in about 15 minutes.</h2>
          <p>
            This is the current recommended Claude Code path from the official
            GBrain documentation. Use a new, empty folder, not an existing project.
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
              create a private GitHub repository for durable backup. Any AI provider
              or outside source you connect has its own data policy. I explain those
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
              No. GBrain is open-source software created by Garry Tan. I sell the
              setup, knowledge architecture, source connection, workflow design,
              training, and implementation around it.
            </p>
          </details>
          <details>
            <summary>What happens after seven days?</summary>
            <p>
              You leave with a working setup, a trained first set of workflows, and a
              clear handoff. The brain belongs to you and becomes more useful as you
              continue adding decisions, notes, projects, and source material.
            </p>
          </details>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Stop re-explaining your company to your AI</p>
        <h2>By next week, your business can have a memory.</h2>
        <p>
          I will build the first version, connect the important sources, and show
          you how to use it on the questions that already slow you down.
        </p>
        <a className="button button-white" href={checkoutUrl}>Build my Company Memory</a>
        <span>$2,000 one time. Delivered in seven days.</span>
      </section>

      <footer>
        <span>Company Memory</span>
        <span>Implementation by Gibran Rubio</span>
        <span>2026</span>
      </footer>
    </main>
  );
}
