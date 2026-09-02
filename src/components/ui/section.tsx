import type { ReactNode } from "react";

type SectionProps = {
    title: string;
    children: ReactNode;
};

export function Section({ title, children }: SectionProps) {
    return (
        <section className="border-t border-line py-16">
            <h2 className="mb-8 text-xs uppercase tracking-[0.2em] text-muted">{title}</h2>
            {children}
        </section>
    );
}