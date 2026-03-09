"use client";

import Image from "next/image";

const brands = [
    { name: "AT&T", src: "/brands/att.png" },
    { name: "Clemson", src: "/brands/clemson.png" },
    { name: "Hampton", src: "/brands/hampton.png" },
    { name: "Illinois State", src: "/brands/illinois-state.png" },
    { name: "Illinois", src: "/brands/illinois.png" },
    { name: "McDonald's", src: "/brands/mcdonalds.png" },
    { name: "Minnesota", src: "/brands/minnesota.png" },
    { name: "Pancheros", src: "/brands/pancheros.png" },
    { name: "SKIMS", src: "/brands/skims.png" },
    { name: "Smoothie King", src: "/brands/smoothie-king.png" },
    // not showing { name: "Tennessee State", src: "/brands/tennessee-state.png" },
    { name: "Texas", src: "/brands/texas.png" },
    { name: "Topps", src: "/brands/topps.png" },
    { name: "UCF", src: "/brands/ucf.png" },
    { name: "USC", src: "/brands/usc.png" },
    { name: "Virginia", src: "/brands/virginia.png" },
    { name: "Washington", src: "/brands/washington.png" },
];

// duplicate for seamless looping
const loopedBrands = [...brands, ...brands];

export default function BrandsMarquee() {
    return (
        <section className="w-full overflow-hidden border-t border-[#72B8E2]/50 px-6 py-32">
            <div className="mx-auto max-w-7xl">
                <p className="mb-4 text-xs tracking-[0.35em] uppercase text-[#72B8E2]/70">
                    Clients
                </p>
                <h2 className="mb-16 max-w-md text-4xl font-semibold tracking-tight md:text-5xl">
                    Trusted by
                    <br />
                    <span className="text-[#72B8E2]">leading brands.</span>
                </h2>
            </div>

            <div className="relative overflow-hidden border-t border-b border-white/10">
                {/* edge fades */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-black to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-black to-transparent" />

                <div className="brands-marquee group flex w-max items-center gap-0 hover:[animation-play-state:paused]">
                    {loopedBrands.map((brand, i) => (
                        <div
                            key={`${brand.name}-${i}`}
                            className="flex h-24 w-44 shrink-0 items-center justify-center border-r border-white/10 px-6"
                        >
                            <Image
                                src={brand.src}
                                alt={brand.name}
                                width={120}
                                height={60}
                                className="max-h-12 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}