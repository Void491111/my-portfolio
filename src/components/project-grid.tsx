"use client";

import { motion } from "motion/react";
import { projects, type Project } from "@/config/projects";
import { stagger } from "@/config/motion";
import { ProjectCard } from "./project-card";

export function ProjectGrid() {
  function renderCard(project: Project) {
    return <ProjectCard key={project.id} project={project} />;
  }

  return (
    <motion.div
      className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3"
      variants={stagger}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "-60px" }}
    >
      {projects.map(renderCard)}
    </motion.div>
  );
}