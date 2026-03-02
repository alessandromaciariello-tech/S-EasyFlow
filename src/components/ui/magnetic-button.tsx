"use client";

import { useRef, useState, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    intensity?: number;
    onClick?: () => void;
}

export function MagneticButton({
    children,
    className,
    intensity = 50,
    onClick,
}: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Use framer motion values outside react state cycle for performance
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Add heavy physics per SKILL.md specs
    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        // Magnetic logic: Calculate distance from center
        const hx = rect.left + rect.width / 2;
        const hy = rect.top + rect.height / 2;

        const moveX = (e.clientX - hx) / (rect.width / 2);
        const moveY = (e.clientY - hy) / (rect.height / 2);

        x.set(moveX * intensity);
        y.set(moveY * intensity);
    };

    const reset = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={reset}
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            whileTap={{ scale: 0.95 }}
            style={{
                x: mouseXSpring,
                y: mouseYSpring,
            }}
            className={cn(
                "relative flex items-center justify-center rounded-full bg-[var(--color-accent)] px-8 py-4 font-medium text-white shadow-lg transition-colors hover:bg-[var(--color-accent)]/90 overflow-hidden",
                className
            )}
        >
            {/* Ripple/Glow effect on hover */}
            <motion.div
                className="pointer-events-none absolute inset-0 rounded-full bg-white/20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
}
