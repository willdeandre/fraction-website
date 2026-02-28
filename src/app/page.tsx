import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    label: "NIL",
    description:
      "Guiding athletes through Name, Image, and Likeness opportunities with strategic counsel and long-term development frameworks.",
  },
  {
    label: "Player Development",
    description:
      "Providing precise, actionable guidance to organizations and individuals navigating high-stakes decisions while facing extreme uncertainty.",
  },
  {
    label: "FIBA",
    description:
      "Building brand narratives that resonate — from positioning strategy to campaign execution — with clarity and conviction.",
  },
  {
    label: "Marketing",
    description:
      "Translating data into decisions. We surface the insights that drive performance and inform every strategic move.",
  },
  {
    label: "Analytics",
    description:
      "Translating data into decisions. We surface the insights that drive performance and inform every strategic move.",
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden">
        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Diagonal accent — echoes the logo slash */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute left-[58%] top-[-10%] h-[120%] w-[1.5px] bg-linear-to-b from-transparent via-[#72B8E2]/20 to-transparent"
            style={{ transform: "rotate(22deg)", transformOrigin: "top center" }}
          />
        </div>

        <h1 className="max-w-4xl text-6xl font-semibold leading-[1.1] tracking-tight md:text-8xl">
          Precision.
          <br />
          <span className="text-[#72B8E2]">Trust.</span>
          <br />
          Execution.
        </h1>

        <p className="mt-8 max-w-md text-base leading-7 text-white/50">
          Fraction is a full service firm built for athletes and brands looking to grow 
          — sharper strategy, stronger execution, and results that hold up.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#services"
            className="border border-[#72B8E2] text-[#72B8E2] px-8 py-3.5 text-sm tracking-widest uppercase transition-all hover:bg-[#72B8E2] hover:text-black"
          >
            Our Services
          </a>
          <a
            href="/contact"
            className="px-8 py-3.5 text-sm tracking-widest uppercase text-white/50 transition-colors hover:text-[#72B8E2]"
          >
            Contact Us →
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs tracking-[0.35em] uppercase text-[#72B8E2]/70">
            What We Do
          </p>
          <h2 className="mb-16 max-w-md text-4xl font-semibold tracking-tight md:text-5xl">
            Built for the work that matters.
          </h2>

          <div className="grid grid-cols-1 gap-px md:grid-cols-2">
            {services.map((service, i) => (
              <div
                key={i}
                className="group border border-white/10 p-10 transition-colors hover:border-[#72B8E2]/30 hover:bg-[#72B8E2]/5"
              >
                <span className="mb-6 block text-xs tracking-[0.3em] uppercase text-[#72B8E2]/60">
                  0{i + 1}
                </span>
                <h3 className="mb-4 text-xl font-medium tracking-tight text-white">
                  {service.label}
                </h3>
                <p className="text-sm leading-7 text-white/50">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-[#72B8E2]/50 px-6 py-32">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-32">
          <div>
            <p className="mb-4 text-xs tracking-[0.35em] uppercase text-[#72B8E2]/70">
              About
            </p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              A firm built on{" "}
              <span className="text-[#72B8E2]">trust.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-6 text-white/50 text-sm leading-8">
            <p>
              Fraction is a Chicago-based professional services firm dedicated
              to delivering precise, trusted, and expertly executed strategies
              for athletes, brands, and organizations.
            </p>
            <p>
              We operate at the intersection of sport, business, and strategy —
              bringing the same rigor to every engagement regardless of size.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-[#72B8E2]/50 px-6 py-32 text-center"
      >
        <div className="mx-auto max-w-2xl">
          <p className="mb-4 text-xs tracking-[0.35em] uppercase text-[#72B8E2]/70">
            Contact
          </p>
          <h2 className="mb-6 text-4xl font-semibold tracking-tight md:text-5xl">
            Let&apos;s talk.
          </h2>
          <p className="mb-10 text-white/50 text-sm leading-7">
            Whether you&apos;re an athlete, a brand, or an organization ready
            to level up — reach out and we&apos;ll get to work.
          </p>
          <a
            href="/contact"
            className="inline-block border border-[#72B8E2] text-[#72B8E2] px-10 py-4 text-sm tracking-widest uppercase transition-all hover:bg-[#72B8E2] hover:text-black"
          >
            contact@fractionllc.com
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
