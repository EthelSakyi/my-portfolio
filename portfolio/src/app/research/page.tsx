import Link from 'next/link';

function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 md:px-8 py-12">
      <div className="rounded-2xl bg-white dark:bg-neutral-950 border border-black/5 dark:border-white/10 p-6 md:p-8">
        <h2 className="text-2xl md:text-2xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-4 space-y-4">{children}</div>
      </div>
    </section>
  );
}

function ResearchCard({
  title,
  type,
  context,
  status,
  date,
  description,
  pdf,
  button,
  note,
}: {
  title: string;
  type: string;
  context: string;
  status?: string;
  date: string;
  description: string;
  pdf: string;
  button: string;
  note?: string;
}) {
  return (
    <div className="relative rounded-[28px] overflow-hidden bg-white text-black ring-1 ring-black/5 dark:bg-neutral-900 dark:text-white dark:ring-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-transform duration-500 hover:-translate-y-1 flex flex-col">
      <div className="p-8 md:p-10 flex flex-col flex-1">
        <div className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">{type}</div>
        <h3 className="mt-3 text-2xl font-semibold leading-tight">{title}</h3>
        <div className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">{context}</div>
        {status && (
          <div className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{status}</div>
        )}
        <div className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{date}</div>
        <p className="mt-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 flex-1">
          {description}
        </p>
        {note && (
          <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400 italic">{note}</p>
        )}
        <div className="mt-6">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
          >
            {button}
          </a>
        </div>
      </div>
    </div>
  );
}

const RESEARCH = [
  {
    title: 'Governing the Co-Evolution of Artificial Intelligence and Post-Quantum Cryptography',
    type: 'Fellowship Proposal',
    context: 'Berkman Klein Center for Internet and Society, Harvard University',
    status: 'Under Active Review, September 2026 Cohort',
    date: 'November 2025',
    description:
      'A research proposal examining how AI and post-quantum cryptography must evolve together under coordinated governance frameworks. Analyzes the dual-use risk of AI accelerating cryptanalysis while strengthening cryptographic defenses, and proposes a Governance Framework for Secure Co-Evolution drawing on NIST PQC standards, the EU AI Act, and OECD frameworks.',
    pdf: '/EthelSakyi-ProjectProposalBKC.pdf',
    button: 'Read Proposal',
    note: 'Mitigating Challenges in Post-Quantum Cryptography Implementation was submitted as the writing sample for this application.',
  },
  {
    title: 'Linear Algebra in Post-Quantum Cryptography: The Learning with Errors (LWE) Problem',
    type: 'Research Paper',
    context: 'MATH 300 — Linear Algebra, Winthrop University',
    date: '2025',
    description:
      'Develops the mathematical foundation of the LWE problem — the basis of CRYSTALS-Kyber and modern post-quantum cryptosystems — through linear algebra, modular arithmetic, and lattice geometry. Shows how deliberately adding noise transforms a solvable algebra problem into a computationally hard geometric one that scales to hundreds of dimensions.',
    pdf: '/MATH300_Final_Draft.pdf',
    button: 'Read Paper',
  },
  {
    title: 'Mitigating Challenges in Post-Quantum Cryptography Implementation',
    type: 'Research Paper',
    context: 'CSCI 327 — Computer Security, Winthrop University',
    date: 'April 2024',
    description:
      "Examines computational, integration, and cryptanalysis challenges in deploying post-quantum cryptography. Proposes a framework covering algorithm optimization, hybrid cryptographic systems, and robust standardization. Reviews NIST's PQC initiative and explores non-mathematical approaches to key generation including quantum random number generators and atmospheric noise. Submitted as writing sample to the Berkman Klein Center fellowship application.",
    pdf: '/EthelSakyi-WorkSampleBKC.pdf',
    button: 'Read Paper',
  },
  {
    title: 'JavaScript Meets Post-Quantum Cryptography',
    type: 'Research Presentation',
    context: 'CSCI 390 — Research Presentation, Winthrop University',
    date: 'April 2025',
    description:
      'Examines the feasibility of implementing post-quantum cryptographic algorithms in JavaScript environments. Covers CRYSTALS-Kyber and SPHINCS+ algorithm overviews, performance challenges and WebAssembly as a solution, Web Cryptography API integration, and real-world applications in web security, IoT, and blockchain. Includes working code examples of post-quantum key exchange and WebAssembly-optimized PQC operations.',
    pdf: '/Post-Quantum%20Cryptography%20In%20JavaScript.pdf',
    button: 'View Slides',
  },
];

export default function ResearchPage() {
  return (
    <main className="bg-[#f5f5f7] text-black dark:bg-black dark:text-white">
      {/* HEADER */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 pt-24 md:pt-28 pb-8">
        <Link
          href="/"
          className="text-sm text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
        >
          ← Back to Home
        </Link>

        <div className="mt-10 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Research</h1>
          <p className="mt-5 text-lg text-neutral-600 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            I study the intersection of artificial intelligence, post-quantum cryptography, and
            technology governance. My research spans the mathematical foundations of
            quantum-resistant cryptography, implementation challenges, and the policy frameworks
            needed to govern these technologies responsibly. I am currently a fellowship applicant
            under active review at the Berkman Klein Center for Internet and Society at Harvard
            University for the September 2026 cohort.
          </p>
        </div>
      </section>

      {/* RESEARCH CARDS */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {RESEARCH.map((r) => (
            <ResearchCard key={r.title} {...r} />
          ))}
        </div>
      </section>

      {/* CURRENT WORK */}
      <Section title="Current Work" id="current-work">
        <p className="leading-relaxed text-neutral-700 dark:text-neutral-300">
          I am currently studying game theory and exploring its applications to multi-agent AI
          governance and mechanism design — how incentive structures can be designed to align
          autonomous agents with human values and regulatory frameworks.
        </p>
      </Section>

      <div className="h-10" />
    </main>
  );
}
