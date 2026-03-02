"use client";

import { motion } from "framer-motion";
import { fadeUpVariants } from "../ui/motion-wrappers";
import { Package, Truck, Warehouse, FlowArrow, ChartLineUp, ShieldCheck } from "@phosphor-icons/react";

const logos = [
    { icon: Package, name: "ShipStack" },
    { icon: Truck, name: "FreightOS" },
    { icon: Warehouse, name: "StoreLink" },
    { icon: FlowArrow, name: "LogiFlow" },
    { icon: ChartLineUp, name: "VelocityMetric" },
    { icon: ShieldCheck, name: "SecureChain" },
];

export function LogoTicker() {
    return (
        <section className="py-20 bg-[var(--background)] border-b border-slate-200/50 overflow-hidden isolate relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="container mx-auto px-4 text-center mb-10">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">
                    Designed for complex supply chains
                </p>
            </div>

            <div className="relative w-full max-w-[1400px] mx-auto overflow-hidden">
                {/* Fading Edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[var(--background)] to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[var(--background)] to-transparent" />

                {/* Marquee Animation */}
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        ease: "linear",
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    className="flex gap-16 md:gap-24 w-max items-center pr-16 md:pr-24"
                >
                    {/* Double array for infinite scroll illusion */}
                    {[...logos, ...logos].map((logo, i) => (
                        <div key={i} className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                            <logo.icon weight="duotone" className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-accent)]" />
                            <span className="text-xl md:text-2xl font-bold font-sans text-slate-800 tracking-tight">{logo.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
