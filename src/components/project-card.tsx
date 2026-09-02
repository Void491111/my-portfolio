"use client";

import { motion } from "motion/react";
import { DURATION, EASE, HOVER_LIFT, fadeUp } from "@/config/motion";
import { isEmptySlot } from "@/lib/project";
import { EmptySlot } from "./empty-slot";
import type { Project } from "@/config/projects";
import { ProjectBody } from "./project-body";

type ProjectCardProps = { project: Project };

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: HOVER_LIFT }}
      transition={{ duration: DURATION.fast, ease: EASE }}
      className="aspect-[4/3] bg-paper p-6"
    >
      {isEmptySlot(project) ? <EmptySlot /> : <ProjectBody project={project} />}
    </motion.article>
  );
}