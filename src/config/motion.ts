export const EASE = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
    fast: 0.25,
    base: 0.45,
} as const;

export const STAGGER = 0.07;
export const OFFSET_Y = 14;
export const HOVER_LIFT = -4;

export const fadeUp = {
    hidden: { opacity: 0, y: OFFSET_Y },
    shown: { opacity: 1, y: 0, transition: { duration: DURATION.base, ease: EASE } },
};

export const stagger = {
    hidden: {},
    shown: { transition: { staggerChildren: STAGGER} },
};

