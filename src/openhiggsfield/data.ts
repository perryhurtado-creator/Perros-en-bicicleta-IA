export const VIEWS = ["image", "video", "assets", "favorites"] as const;
export type GalleryView = (typeof VIEWS)[number];
export const VIEW_LABELS: Record<GalleryView, string> = {
  image: "Images",
  video: "Videos",
  assets: "Assets",
  favorites: "Favorites",
};

export function describeModel(model: { id: string; label: string; surface: string; roles: Record<string, number>; settings: Record<string, unknown> }) {
  return `${model.label} ${model.surface} ${Object.keys(model.roles).join(" ")}`.trim();
}

export function ratioBox(value: string): string {
  return value === "auto" ? "auto" : value;
}
