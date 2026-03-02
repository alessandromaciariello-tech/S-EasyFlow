"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";

export const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

export const FadeIn = ({
    children,
    delay = 0,
    duration = 0.5,
    direction = "up",
    distance = 30,
    className = "",
}: {
    children: ReactNode;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right";
    distance?: number;
    className?: string;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    const yOffsets = {
        up: distance,
        down: -distance,
        left: 0,
        right: 0,
    };
    const xOffsets = {
        up: 0,
        down: 0,
        left: distance,
        right: -distance,
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{
                opacity: 0,
                y: yOffsets[direction],
                x: xOffsets[direction]
            }}
            animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : yOffsets[direction],
                x: isInView ? 0 : xOffsets[direction],
            }}
            transition={{
                duration,
                delay,
                type: "spring",
                stiffness: 100,
                damping: 20
            }}
        >
            {children}
        </motion.div>
    );
};

export const ParallaxWrapper = ({
    children,
    speed = 0.2,
    className = "",
}: {
    children: ReactNode;
    speed?: number;
    className?: string;
}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    );
};
