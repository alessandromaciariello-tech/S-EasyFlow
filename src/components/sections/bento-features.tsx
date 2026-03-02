"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { fadeUpVariants } from "../ui/motion-wrappers";
import { Lightning, ArrowsMerge, ChartBar, Robot } from "@phosphor-icons/react";

export function FeaturesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    return (
        <section className="py-24 bg-[var(--background)] px-4">
            <div className="container mx-auto max-w-[1400px]">
                <div className="flex justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                            One ecosystem. Zero fragmentation.
                        </h2>
                        <p className="text-lg text-slate-600">
                            EasyFlow bridges the gap between daily micro-tasks, long-term project management, and automated supply chain restocking — all in one timeline.
                        </p>
                    </div>
                </div>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } },
                    }}
                >
                    <BentoGrid>
                        {/* Bento Item 1: AI Task Inbox */}
                        <motion.div variants={fadeUpVariants} className="md:col-span-2">
                            <BentoGridItem
                                title="AI Task Inbox"
                                description="Voice-and-text capture integrated with Google Calendar. It parses natural language, assigns durations, and auto-schedules tasks based on existing priority."
                                header={
                                    <div className="flex flex-1 w-full h-full min-h-[12rem] bg-slate-50 rounded-xl rounded-b-none border border-slate-200 overflow-hidden relative p-6">
                                        <div className="flex flex-col gap-3 w-full">
                                            <motion.div
                                                animate={{ opacity: [0.5, 1, 0.5] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="h-8 w-2/3 bg-white rounded-lg border border-slate-100 px-3 flex items-center text-[10px] font-mono text-slate-400"
                                            >
                                                Move component X restock to tomorrow morning...
                                                <motion.span
                                                    animate={{ opacity: [1, 0] }}
                                                    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                                                    className="inline-block w-[2px] h-3 bg-slate-400 ml-0.5"
                                                />
                                            </motion.div>
                                            <div className="flex gap-2">
                                                <div className="h-16 flex-1 bg-[var(--color-accent)]/5 rounded-lg border border-[var(--color-accent)]/10" />
                                                <div className="h-16 flex-1 bg-white rounded-lg border border-slate-100" />
                                            </div>
                                        </div>
                                    </div>
                                }
                                icon={<Robot className="w-5 h-5 text-[var(--color-accent)]" />}
                            />
                        </motion.div>

                        {/* Bento Item 2: Unified Timeline */}
                        <motion.div variants={fadeUpVariants} className="md:col-span-1">
                            <BentoGridItem
                                title="Unified Timeline"
                                description="A living Gantt chart that syncs bidirectionally with your daily calendar. Changes in the Gantt reflect in the calendar and vice versa."
                                header={
                                    <div className="flex flex-1 w-full h-full min-h-[12rem] bg-slate-50 rounded-xl rounded-b-none border border-slate-200 items-center justify-center relative overflow-hidden">
                                        <div className="flex flex-col gap-2 w-full px-4">
                                            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                                <motion.div
                                                    animate={{ scaleX: [0, 1, 0.6, 1] }}
                                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                                    className="h-full w-full bg-[var(--color-accent)] origin-left"
                                                />
                                            </div>
                                            <div className="h-2 w-2/3 bg-slate-100 rounded-full overflow-hidden">
                                                <motion.div
                                                    animate={{ scaleX: [0, 0.7, 0.4, 0.7] }}
                                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                                    className="h-full w-full bg-blue-500/30 origin-left"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                }
                                icon={<ArrowsMerge className="w-5 h-5 text-[var(--color-accent)]" />}
                            />
                        </motion.div>

                        {/* Bento Item 3: Micro-Gantt Logic */}
                        <motion.div variants={fadeUpVariants} className="md:col-span-1">
                            <BentoGridItem
                                title="Micro-Gantt Logic"
                                description="Every component has its own timeline. The system distinguishes between fixed tasks (setup) and variable tasks (time scales based on order volume)."
                                header={
                                    <div className="flex flex-1 w-full h-full min-h-[12rem] bg-slate-50 rounded-xl rounded-b-none border border-slate-200 p-4">
                                        <div className="grid grid-cols-4 gap-2 w-full">
                                            {[...Array(8)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    animate={{ opacity: [0.3, 0.9, 0.3] }}
                                                    transition={{ duration: 1.8, delay: i * 0.15, repeat: Infinity }}
                                                    className={`h-8 rounded border ${i % 3 === 0 ? "bg-[var(--color-accent)]/10 border-[var(--color-accent)]/20" : "bg-blue-50 border-blue-100"}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                }
                                icon={<ChartBar className="w-5 h-5 text-[var(--color-accent)]" />}
                            />
                        </motion.div>

                        {/* Bento Item 4: AI Restock Advisor */}
                        <motion.div variants={fadeUpVariants} className="md:col-span-2">
                            <BentoGridItem
                                title="AI Restock Advisor"
                                description="Predicts when and how much to order by analyzing sales velocity against complex component lead times and MOQs."
                                header={
                                    <div className="flex flex-1 w-full h-full min-h-[12rem] bg-slate-50 rounded-xl rounded-b-none border border-slate-200 items-center justify-center p-6 pb-0">
                                        <div className="w-full h-full bg-white rounded-t-lg shadow-sm border border-slate-200 border-b-0 p-4 flex flex-col gap-4">
                                            <div className="flex justify-between items-center">
                                                <div className="h-4 w-24 bg-slate-100 rounded" />
                                                <motion.div
                                                    animate={{ scale: [1, 1.08, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                                    className="h-6 w-12 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded flex items-center justify-center"
                                                >LOW RISK</motion.div>
                                            </div>
                                            <div className="h-2 w-full bg-slate-50 rounded-full" />
                                            <div className="h-2 w-3/4 bg-slate-50 rounded-full" />
                                        </div>
                                    </div>
                                }
                                icon={<Lightning className="w-5 h-5 text-[var(--color-accent)]" />}
                            />
                        </motion.div>
                    </BentoGrid>
                </motion.div>
            </div>
        </section>
    );
}
