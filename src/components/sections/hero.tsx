"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "../ui/magnetic-button";
import { ParallaxWrapper, FadeIn } from "../ui/motion-wrappers";
import { ArrowRight, Play } from "@phosphor-icons/react";

export function HeroSection() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    return (
        <section className="relative min-h-[100dvh] w-full overflow-hidden bg-[var(--background)] flex items-center pt-24 pb-12">
            {/* Background Mesh/Gradient Physics */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.div
                    style={{ y: y1, opacity }}
                    className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[var(--color-accent)]/10 blur-[120px]"
                />
                <motion.div
                    style={{ y: y2, opacity }}
                    className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-500/5 blur-[100px]"
                />
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Asymmetric Left side details - 7 Cols */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <FadeIn delay={0.1}>
                            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-slate-800 mb-8 shadow-sm">
                                <span className="flex h-2 w-2 rounded-full bg-[var(--color-accent)] mr-2" />
                                Early Access — Join the Waitlist
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2} duration={0.8}>
                            <h1 className="heading-hero text-slate-900 mb-6 lg:mb-8 pb-2">
                                Time + Supply Chain <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[var(--color-accent)] to-slate-600">
                                    orchestrated
                                </span>
                                <br /> into one system.
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.3} duration={0.8}>
                            <p className="text-body text-lg md:text-xl mb-10 text-slate-600 max-w-2xl">
                                Stop juggling spreadsheets, WhatsApp threads, and disconnected Gantt charts. EasyFlow captures every micro-task, syncs your calendar with your supply chain, and tells you exactly when to restock.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <MagneticButton onClick={() => window.open("https://easyflow-test.myshopify.com/products/easyflow-standard", "_blank")}>
                                <span className="flex items-center gap-2">
                                    Get Started <ArrowRight weight="bold" />
                                </span>
                            </MagneticButton>
                            <button className="group flex items-center gap-3 px-6 py-4 rounded-full font-medium text-slate-600 hover:text-slate-900 transition-colors">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 group-hover:bg-slate-200 transition-colors">
                                    <Play weight="fill" className="ml-1" />
                                </div>
                                View Demo
                            </button>
                        </FadeIn>
                    </div>

                    {/* Asymmetric Right Side - 5 Cols */}
                    <div className="lg:col-span-5 relative mt-12 lg:mt-0">
                        <ParallaxWrapper speed={0.1}>
                            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] glass-panel overflow-hidden p-2 flex flex-col">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 z-0 pointer-events-none" />

                                {/* Simulated dashboard lines */}
                                <div className="relative z-10 w-full h-full rounded-[2rem] bg-slate-50 border border-slate-200/60 shadow-inner flex flex-col p-6 overflow-hidden">
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
                                        className="w-full h-px bg-slate-200 mb-6 origin-left"
                                    />

                                    {/* AI Task Inbox card — typing simulation */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: [0, -8, 0] }}
                                        transition={{ opacity: { duration: 0.6, delay: 0.5 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
                                        className="w-3/4 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 mb-3 p-4 flex flex-col justify-between"
                                    >
                                        <div className="w-1/3 h-2 bg-slate-100 rounded-full" />
                                        <div className="w-full h-7 bg-[var(--color-accent)]/10 rounded-lg mt-auto flex items-center px-3 gap-2">
                                            <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                                            <motion.span
                                                className="text-[9px] font-mono text-slate-400 overflow-hidden whitespace-nowrap"
                                                initial={{ width: 0 }}
                                                animate={{ width: "auto" }}
                                                transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
                                            >
                                                Restock component X tomorrow...
                                            </motion.span>
                                        </div>
                                    </motion.div>

                                    {/* Calendar + Gantt sync card */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: [0, 8, 0] }}
                                        transition={{ opacity: { duration: 0.6, delay: 1.5 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 } }}
                                        className="w-full h-24 bg-white rounded-2xl shadow-sm border border-slate-100 mb-3 p-4 flex gap-4"
                                    >
                                        <div className="flex-1 h-full bg-slate-50 rounded-xl" />
                                        <div className="flex-1 h-full bg-slate-50 rounded-xl" />
                                    </motion.div>

                                    {/* Mini Gantt bars card */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: [0, -6, 0] }}
                                        transition={{ opacity: { duration: 0.6, delay: 2.5 }, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 } }}
                                        className="w-5/6 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex flex-col justify-between gap-2"
                                    >
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: 1.2, delay: 3, ease: "circOut" }}
                                            className="h-2 w-4/5 bg-[var(--color-accent)]/20 rounded-full origin-left"
                                        />
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: 1, delay: 3.3, ease: "circOut" }}
                                            className="h-2 w-3/5 bg-blue-500/15 rounded-full origin-left"
                                        />
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: 0.8, delay: 3.6, ease: "circOut" }}
                                            className="h-2 w-2/3 bg-[var(--color-accent)]/15 rounded-full origin-left"
                                        />
                                    </motion.div>

                                </div>
                            </div>
                        </ParallaxWrapper>
                    </div>
                </div>
            </div>
        </section>
    );
}
