import type { Project } from "@/config/projects";

export function isEmptySlot(project: Project): boolean {
  return project.title.trim().length === 0;
}