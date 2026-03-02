"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "@phosphor-icons/react";

const faqs = [
    {
        question: "How long does the Shopify integration take?",
        answer: "Less than three minutes. Our deep integration pulls your products, variants, and stock levels immediately. It then maps your Shopify data to your Bill of Materials (BOM) automatically, including variants and stock levels.",
    },
    {
        question: "What is 'Micro-Gantt' logic?",
        answer: "Unlike static project management, Micro-Gantt models the production timeline for every individual component. It distinguishes between fixed lead times (like setup and tooling) and variable lead times (manufacturing speed that scales with order volume), giving you an exact ETA based on real order size.",
    },
    {
        question: "Does the AI Restock Advisor place orders automatically?",
        answer: "At the MVP stage, it provides 'Confirm Restock' recommendations based on sales velocity, BOM lead times, and MOQs. Once you confirm, EasyFlow auto-generates the necessary supply chain tasks across your project Gantt and daily team calendars.",
    },
    {
        question: "Can I manage 15+ suppliers for a single product?",
        answer: "Yes. EasyFlow is built specifically for high-complexity goods. You can link dozens of suppliers to a single product's components, each with their own lead times, MOQs, costs, and communication channels — email, portals, or WhatsApp.",
    },
    {
        question: "How does the AI Task Inbox work?",
        answer: "Speak or type your task in natural language. EasyFlow parses it, assigns a duration, and auto-schedules it into your Google Calendar based on existing priority and team capacity. No manual dragging required.",
    },
    {
        question: "Is my data secure?",
        answer: "Yes. All data is encrypted in transit and at rest. Your Shopify credentials are handled via official OAuth — we never store your passwords. We follow industry-standard security practices.",
    },
];

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-[var(--background)] px-4">
            <div className="container mx-auto max-w-[800px]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                        No ambiguity.
                    </h2>
                    <p className="text-lg text-slate-600">
                        Clear answers to how EasyFlow fundamentally changes your operations.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = index === openIndex;

                        return (
                            <motion.div
                                key={index}
                                initial={false}
                                animate={{
                                    backgroundColor: isOpen ? "rgba(255,255,255,1)" : "rgba(248,250,252,0)",
                                    borderColor: isOpen ? "rgba(226,232,240,1)" : "rgba(226,232,240,0.5)",
                                }}
                                className="border rounded-2xl overflow-hidden transition-colors"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="flex w-full items-center justify-between p-6 text-left"
                                >
                                    <span className="font-semibold text-lg text-slate-900 pr-8">
                                        {faq.question}
                                    </span>
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center bg-slate-50 text-slate-500">
                                        {isOpen ? <Minus weight="bold" /> : <Plus weight="bold" />}
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial="collapsed"
                                            animate="open"
                                            exit="collapsed"
                                            variants={{
                                                open: { opacity: 1, height: "auto" },
                                                collapsed: { opacity: 0, height: 0 },
                                            }}
                                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                        >
                                            <div className="px-6 pb-6 text-slate-600 leading-relaxed max-w-[65ch]">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
