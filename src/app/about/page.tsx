import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const credentials = [
  "NBPA Certified Agent",
  "2025 Top 80 Most Influential Person in NIL",
  "Graduate Assistant Coach, Vanderbilt University",
  "Team Captain, Lehigh University",
];

const stats = [
  { value: "100+", label: "Athletes Served" },
  { value: "$10M+", label: "Structured in Client Compensation" },
  { value: "2025", label: "Top 80 Most Influential in NIL" },
];

export default function About() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      {/* Page hero */}
      <section className="relative flex min-h-[45vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Diagonal accent */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute left-[62%] top-[-10%] h-[120%] w-[1.5px] bg-linear-to-b from-transparent via-[#72B8E2]/20 to-transparent"
            style={{ transform: "rotate(22deg)", transformOrigin: "top center" }}
          />
        </div>

        <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
          We are
          <br />
          <span className="text-[#72B8E2]">Fraction.</span>
        </h1>
      </section>

      {/* Founder section */}
      <section className="border-t border-[#72B8E2]/50 px-6 py-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">

          {/* Left — photo + name */}
          <div className="flex flex-col items-start gap-8">
            <div className="relative w-full max-w-sm overflow-hidden">
              {/* Blue accent line on left edge */}
              <div className="absolute left-0 top-0 h-full w-0.75 bg-linear-to-b from-[#72B8E2] to-transparent" />
              <Image
                src="/jack-lieb.png"
                alt="Jack Lieb — Founder & CEO of Fraction LLC"
                width={480}
                height={560}
                className="w-full object-cover grayscale"
                priority
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Jack Lieb</h2>
              <p className="mt-1 text-sm tracking-widest uppercase text-[#72B8E2]">
                Founder &amp; CEO
              </p>
            </div>
          </div>

          {/* Right — bio + credentials */}
          <div className="flex flex-col justify-center gap-10">
            <div className="flex flex-col gap-5 text-sm leading-8 text-white/55">
              <p>
                Jack Lieb is the Founder and CEO of Fraction. A former collegiate athlete 
                and coach, Jack understands and cares deeply about his players.
                He built Fraction on the belief that athletes deserve precise, 
                trusted representation — not just at the negotiating table, but throughout 
                their entire career arc.
              </p>
              <p>
                Jack has experience as a Graduate Assistant Coach at Vanderbilt
                University, where he worked under NBA legend Jerry Stackhouse and coached NBA player Scotty Pippen Jr.
                He was also a Team Captain at Lehigh University, where he graduated with a finance degree and honors distinction. 
                Jack brings a rare combination of on-court knowledge and business acumen; he has served
                over 100 athletes and structured more than $10 million in compensation for his clients.
              </p>
              <p>
                Recognized as one of the 2025 Top 80 Most Influential People in
                NIL, Jack continues to shape the future of athlete representation
                through Fraction&apos;s valuation, marketing, and analytics services.
              </p>
            </div>

            {/* Credentials list */}
            <ul className="flex flex-col gap-3">
              {credentials.map((c) => (
                <li key={c} className="flex items-center gap-4 text-sm text-white/70">
                  <span className="text-[#72B8E2] text-base leading-none">/</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-[#72B8E2]/50 px-6 py-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-px sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="border border-white/10 p-10 text-center transition-colors hover:border-[#72B8E2]/30 hover:bg-[#72B8E2]/5"
            >
              <p className="text-4xl font-semibold tracking-tight text-[#72B8E2] md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-xs tracking-widest uppercase text-white/40">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#72B8E2]/50 px-6 py-24 text-center">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to work together?
          </h2>
          <p className="mb-10 text-sm leading-7 text-white/50">
            Whether you&apos;re an athlete exploring NIL or an organization
            seeking strategic guidance, Fraction is ready.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="border border-[#72B8E2] text-[#72B8E2] px-8 py-3.5 text-sm tracking-widest uppercase transition-all hover:bg-[#72B8E2] hover:text-black"
            >
              Get in Touch
            </a>
            <Link
              href="/"
              className="px-8 py-3.5 text-sm tracking-widest uppercase text-white/50 transition-colors hover:text-[#72B8E2]"
            >
              ← Back Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
