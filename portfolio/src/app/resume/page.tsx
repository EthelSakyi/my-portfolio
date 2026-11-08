export default function Resume() {
  return (
    <div className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center justify-center min-h-[80vh] text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
          Resume
        </h1>
        <p className="mt-6 text-neutral-700 max-w-xl leading-relaxed">
          My resume is tailored for each opportunity. If you&apos;d like a copy, reach out
          directly or connect with me on LinkedIn.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a
            href="https://www.linkedin.com/in/ethel-sakyi/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-2xl bg-black text-white text-sm font-medium hover:opacity-90 transition"
          >
            Connect on LinkedIn
          </a>
          <a
            href="mailto:ethelasakyi@gmail.com"
            className="px-5 py-3 rounded-2xl border border-black/15 text-sm text-neutral-800 hover:bg-black/5 transition"
          >
            Send an Email
          </a>
        </div>
      </div>
    </div>
  );
}
