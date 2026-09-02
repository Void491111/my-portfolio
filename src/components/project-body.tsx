import type { Project } from "@/config/projects";

type ProjectBodyProps = { project: Project };

export function ProjectBody({ project }: ProjectBodyProps) {
  function renderTag(tag: string) {
    return (
      <li key={tag} className="border border-line px-2 py-0.5 text-[10px] uppercase tracking-wider">
        {tag}
      </li>
    );
  }

  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <h3 className="text-lg font-medium">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
      </div>
      <ul className="mt-4 flex flex-wrap gap-1.5 text-muted">{project.tags.map(renderTag)}</ul>
    </div>
  );
}