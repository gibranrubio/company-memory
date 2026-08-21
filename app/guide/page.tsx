import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The free setup guide | The Knowledge",
  description:
    "Build your own AI memory in about 15 minutes with the official GBrain bootstrap. The free do-it-yourself path.",
};

const checkoutUrl = "https://buy.stripe.com/00weVd1txg4x8BO6aj4Ni06";

const bootstrapPrompt = `Read and follow every step of:
https://raw.githubusercontent.com/garrytan/gbrain/latest-stable/BOOTSTRAP_FOR_AGENTS.md
Goal: set yourself up as my persistent personal agent in this folder, with gbrain
as your memory. Interview me before writing any identity file. Never invent
answers. Ask before anything destructive. You are not done until
\`gbrain bootstrap verify\` exits 0.`;

export default function Guide() {
  return (
    <main id="top">
      <header>
        <a className="brand" href="/">The Knowledge</a>
        <nav aria-label="Guide navigation">
          <a href="/">Home</a>
        </nav>
        <a className="header-cta" href={checkoutUrl}>Build my Knowledge</a>
      </header>

      <section className="guide section-pad" id="guide">
        <div className="section-label">The free setup guide</div>
        <div className="guide-intro">
          <h2>Build your own AI memory in about 15 minutes.</h2>
          <p>
            This is the current recommended Claude Code path from the official GBrain
            documentation. Use a new, empty folder, not an existing project. The install
            is the easy part. Filling it with your business and teaching it how you work
            is the real work, and it is what I do for you in the done-for-you path.
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
                create the local memory, and connect a private GitHub repository. Approve
                each step only after reading it.
              </p>
            </div>
          </li>
          <li>
            <div className="step-number">04</div>
            <div>
              <h3>Prove that it remembers</h3>
              <p>
                Tell it one small thing to remember. Close the session, open a fresh
                session in the same folder, and ask for that fact back. If it returns the
                fact from memory, the setup is working.
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

        <div className="guide-intro" style={{ marginTop: "3rem" }}>
          <h2>Would rather skip the week of learning?</h2>
          <p>
            I will install it, map your business, connect your sources, and hand back a
            working memory in seven days. $2,000, one time, 100% money-back delivery
            guarantee.
          </p>
          <a className="button button-dark" href={checkoutUrl}>Build my Knowledge</a>
        </div>
      </section>

      <footer>
        <span>The Knowledge</span>
        <span>Built by Gibran Rubio</span>
        <span><a href="/">Back to the essay</a></span>
      </footer>
    </main>
  );
}
