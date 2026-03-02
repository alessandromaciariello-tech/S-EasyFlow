"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUpVariants } from "../ui/motion-wrappers";
import { Check, Info } from "@phosphor-icons/react";
import { MagneticButton } from "../ui/magnetic-button";

const plans = [
    {
        name: "Standard",
        price: "$299",
        period: "/month",
        description: "For scaling e-commerce brands unifying tasks and supply chain basics.",
        features: ["Shopify Product & Stock Sync", "BOM Builder (Up to 10 Components)", "AI Task Inbox (Voice + Text)", "Gantt ↔ Calendar Sync", "3 Team Members"],
        popular: false,
        checkoutUrl: "https://easyflow-test.myshopify.com/cart/57148864430415:1?payment=shop_pay",
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For high-complexity products with 50+ components and multi-supplier operations.",
        features: ["Unlimited BOM Components", "Micro-Gantt (Fixed + Variable Phases)", "AI Restock Advisor (When + How Much)", "Multi-Supplier Management (15+)", "Priority 24/7 Logistics Support"],
        popular: true,
        checkoutUrl: "https://easyflow-test.myshopify.com/cart/57149033906511:1?payment=shop_pay",
    },
];

export function PricingSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    return (
        <section className="py-24 bg-slate-900 text-white relative isolate overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-0 right-[-20%] w-[50vw] h-[50vw] rounded-full bg-[var(--color-accent)]/10 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeUpVariants}>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            Simple logic. No surprises.
                        </h2>
                        <p className="text-lg text-slate-400">
                            Cancel anytime. If EasyFlow isn't accelerating your operations within 14 days, you get your money back.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative"
                >
                    {plans.map((plan, i) => (
                        <motion.div key={plan.name} variants={fadeUpVariants} className="relative h-full">
                            <div
                                className={`h-full flex flex-col rounded-[2.5rem] border p-8 md:p-12 transition-all 
                  ${plan.popular ? 'bg-slate-800/80 border-[var(--color-accent)]/50 shadow-[0_0_40px_-15px_rgba(1,175,59,0.3)]' : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/60'}`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <span className="bg-[var(--color-accent)] text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg">
                                            Most Orchestrated
                                        </span>
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline gap-2 mb-4">
                                        <span className="text-5xl font-bold font-mono tracking-tighter">{plan.price}</span>
                                        <span className="text-slate-400 text-sm">{plan.period}</span>
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed">{plan.description}</p>
                                </div>

                                <div className="mb-10 flex-1">
                                    <ul className="space-y-4">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex flex-start gap-4 text-slate-300 group">
                                                <div className="mt-1 rounded-full bg-slate-700/50 p-1">
                                                    <Check className="w-3 h-3 text-[var(--color-accent)]" />
                                                </div>
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {plan.popular ? (
                                    <MagneticButton intensity={20} className="w-full text-sm" onClick={() => window.open(plan.checkoutUrl, "_blank")}>
                                        Get Enterprise
                                    </MagneticButton>
                                ) : (
                                    <button onClick={() => window.open(plan.checkoutUrl, "_blank")} className="w-full rounded-full border border-slate-600 py-4 px-8 text-sm font-medium transition duration-200 hover:bg-slate-700 hover:border-slate-500">
                                        Get Started
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
