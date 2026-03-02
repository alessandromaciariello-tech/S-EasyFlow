"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { fadeUpVariants } from "../ui/motion-wrappers";
import { Star } from "@phosphor-icons/react";

const testimonials = [
    {
        text: "We went from 4 different tools to one. EasyFlow unified our calendar, Gantt, and restock planning — our team finally sees the same timeline.",
        author: "Marco Bianchi",
        role: "Founder, ComponentHQ",
    },
    {
        text: "The Micro-Gantt logic alone saved us. Knowing exactly which component delays the whole order, broken down by fixed and variable lead times — that's a game changer.",
        author: "Sarah Kim",
        role: "Operations Lead, Artisan Goods Co.",
    },
    {
        text: "I used to restock by gut feeling and spreadsheets. Now the AI advisor tells me when and how much, and one click generates every task across our supply chain.",
        author: "David Okonkwo",
        role: "Supply Chain Director, PackRight",
    },
];

export function TestimonialsSection() {
    const [activeIdx, setActiveIdx] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const advance = useCallback(() => {
        setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(advance, 5000);
        return () => clearInterval(timer);
    }, [isPaused, advance]);

    return (
        <section className="py-24 bg-slate-50 border-y border-slate-200/50 overflow-hidden relative">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                            Built for operators who ship.
                        </h2>
                        <p className="text-lg text-slate-600">
                            E-commerce founders who replaced spreadsheets and fragmentation with one unified system.
                        </p>
                    </motion.div>
                </div>

                {/* Swipe Stack Carousel (Tinder-like) */}
                <div
                    className="relative h-[400px] flex items-center justify-center max-w-2xl mx-auto perspective-1000"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {testimonials.map((t, index) => {
                        const isFront = index === activeIdx;
                        const diff = (index - activeIdx + testimonials.length) % testimonials.length;
                        const yOffset = isFront ? 0 : diff * 15;
                        const scaleOffset = isFront ? 1 : 1 - (diff * 0.05);
                        const zIndexOffset = 10 - diff;
                        const opacity = diff > 2 ? 0 : 1;

                        return (
                            <motion.div
                                key={index}
                                className="absolute w-full px-4"
                                initial={false}
                                animate={{
                                    y: yOffset,
                                    scale: scaleOffset,
                                    zIndex: zIndexOffset,
                                    opacity: opacity,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 150,
                                    damping: 15,
                                }}
                                style={{
                                    transformOrigin: "top center",
                                }}
                            >
                                <div
                                    className="bento-card cursor-grab active:cursor-grabbing bg-white shadow-xl shadow-slate-200/50 flex flex-col items-center text-center p-8 md:p-12"
                                    onClick={() => {
                                        if (!isFront) {
                                            setActiveIdx(index);
                                        } else {
                                            setActiveIdx((prev) => (prev + 1) % testimonials.length);
                                        }
                                    }}
                                >
                                    <div className="flex gap-1 mb-6 text-amber-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} weight="fill" className="w-6 h-6" />
                                        ))}
                                    </div>
                                    <p className="text-xl md:text-2xl font-serif text-slate-800 mb-8 leading-relaxed max-w-xl">
                                        &ldquo;{t.text}&rdquo;
                                    </p>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{t.author}</h4>
                                        <span className="text-sm text-slate-500">{t.role}</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
