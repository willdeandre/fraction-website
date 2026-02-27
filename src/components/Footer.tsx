import Image from "next/image";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/fraction__/" },
  { label: "X", href: "https://x.com/fraction___?s=11" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/fractionllc/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#72B8E2]/50 px-6 py-10">
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="bg-white rounded-sm p-1.5">
          <Image
            src="/logo.png"
            alt="Fraction LLC"
            width={32}
            height={32}
            className="block object-contain"
          />
        </div>
        <div className="flex gap-8 text-xs tracking-widest uppercase text-white/25">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#72B8E2] transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
        <span className="text-xs text-white/25">
          © {new Date().getFullYear()} Fraction LLC
        </span>
      </div>
    </footer>
  );
}
