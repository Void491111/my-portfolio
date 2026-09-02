export type Project = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  href: string;
};

export const PROJECT_SLOTS = 6;

function createSlot(index: number): Project {
  return { id: `slot-${index + 1}`, title: "", summary: "", tags: [], href: "" };
}

export const projects: Project[] = Array.from({ length: PROJECT_SLOTS }, createSlot);