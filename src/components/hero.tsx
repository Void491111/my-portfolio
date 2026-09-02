"use client";

import { motion } from "motion/react";
import { site } from "@/config/site";
import { fadeUp, stagger } from "@/config/motion";

export function Hero() {
  return (
    <motion.header className="py-24" variants={stagger} initial="hidden" animate="shown">
      <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.2em] text-muted">
        {site.role}
      </motion.p>

      <motion.h1 variants={fadeUp} className="mt-4 text-5xl font-medium tracking-tight sm:text-6xl">
        {site.name}
      </motion.h1>

      <motion.p variants={fadeUp} className="mt-6 max-w-xl leading-relaxed text-muted">
        {site.intro}
      </motion.p>
    </motion.header>
  );
}