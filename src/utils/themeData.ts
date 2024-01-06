export const themeValues = ["theme-type-1", "theme-type-2"] as const;
export const modeValues = ["mode-light", "mode-dark"] as const;

export type ThemeValues = (typeof themeValues)[number];
export type ModeValues = (typeof modeValues)[number];
