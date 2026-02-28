"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const inquiryTypes = [
  "NIL Representation",
  "resentation",
  "Marketing",
  "Player Development",
  "Analytics",
  "General Inquiry",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget as HTMLFormElement;
    const data = {
      first: (form.elements.namedItem("first") as HTMLInputElement).value,
      last: (form.elements.namedItem("last") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      inquiryType: selected,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      setError("Something went wrong. Please try again or email us directly.");
    }

    setLoading(false);
  }

  return (
    <main className="bg-black text-white">
      <Navbar />

      {/* Page hero */}
      <section className="relative flex min-h-[40vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute left-[62%] top-[-10%] h-[120%] w-[1.5px] bg-linear-to-b from-transparent via-[#72B8E2]/20 to-transparent"
            style={{ transform: "rotate(22deg)", transformOrigin: "top center" }}
          />
        </div>

        <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
          Let&apos;s get
          <br />
          <span className="text-[#72B8E2]">to work.</span>
        </h1>
      </section>

      {/* Contact body */}
      <section className="border-t border-[#72B8E2]/50 px-6 py-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-20 md:grid-cols-[1fr_1px_1fr] md:gap-0">

          {/* Left — info */}
          <div className="flex flex-col gap-12 md:pr-16">
            <div>
              <p className="mb-5 text-xs tracking-[0.35em] uppercase text-[#72B8E2]/70">
                Reach Out
              </p>
              <p className="text-sm leading-8 text-white/50 max-w-sm">
                Whether you&apos;re an athlete navigating NIL, a brand looking
                for a strategic partner, or an organization ready to level up —
                we want to hear from you.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <p className="mb-5 text-xs tracking-[0.35em] uppercase text-[#72B8E2]/70">
                  Email
                </p>
                <a
                  href="mailto:contact@fractionllc.com"
                  className="text-sm text-white/70 transition-colors hover:text-[#72B8E2]"
                >
                  contact@fractionllc.com
                </a>
              </div>
            </div>

            {/* Divider + tagline */}
              <p className="text-4xl font-semibold tracking-tight leading-snug text-white/20">
                Precision.<br />
                <span className="text-[#72B8E2]/40">Trust.</span><br />
                Execution.
              </p>
          </div>

          {/* Vertical divider */}
          <div className="hidden md:block bg-[#72B8E2]/30 self-stretch" />

          {/* Right — form */}
          <div className="md:pl-16">
            {submitted ? (
              <div className="flex h-full min-h-100 flex-col items-start justify-center gap-4">
                <span className="text-[#72B8E2] text-3xl">/</span>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Message received.
                </h2>
                <p className="text-sm leading-7 text-white/50">
                  We&apos;ll be in touch shortly. Thanks for reaching out.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* Inquiry type */}
                <div>
                  <label className="mb-3 block text-xs tracking-[0.3em] uppercase text-white/40">
                    I&apos;m interested in
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelected(type)}
                        className={`border px-4 py-2 text-xs tracking-wider uppercase transition-all ${
                          selected === type
                            ? "border-[#72B8E2] bg-[#72B8E2]/10 text-[#72B8E2]"
                            : "border-white/15 text-white/40 hover:border-white/30 hover:text-white/70"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name row */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="first" className="text-xs tracking-[0.3em] uppercase text-white/40">
                      First Name
                    </label>
                    <input
                      id="first"
                      name="first"
                      type="text"
                      required
                      className="border-b border-white/15 bg-transparent pb-3 text-sm text-white placeholder-white/20 outline-none transition-colors focus:border-[#72B8E2]"
                      placeholder="Michael"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="last" className="text-xs tracking-[0.3em] uppercase text-white/40">
                      Last Name
                    </label>
                    <input
                      id="last"
                      name="last"
                      type="text"
                      required
                      className="border-b border-white/15 bg-transparent pb-3 text-sm text-white placeholder-white/20 outline-none transition-colors focus:border-[#72B8E2]"
                      placeholder="Jordan"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs tracking-[0.3em] uppercase text-white/40">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="border-b border-white/15 bg-transparent pb-3 text-sm text-white placeholder-white/20 outline-none transition-colors focus:border-[#72B8E2]"
                    placeholder="airjordan@goat.com"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs tracking-[0.3em] uppercase text-white/40">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="border-b border-white/15 bg-transparent pb-3 text-sm text-white placeholder-white/20 outline-none transition-colors focus:border-[#72B8E2] resize-none"
                    placeholder="Tell us who you are and how we can help!"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="self-start border border-[#72B8E2] text-[#72B8E2] px-8 py-3.5 text-sm tracking-widest uppercase transition-all hover:bg-[#72B8E2] hover:text-black disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                  {error && (
                    <p className="text-xs text-red-400">{error}</p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
