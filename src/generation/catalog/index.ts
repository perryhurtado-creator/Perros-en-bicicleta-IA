export const MODELS = [
  { id: "seedance-2.5", label: "Seedance 2.5", surface: "video", roles: { start: 1, end: 1, reference: 3, video: 2, audio: 1 }, settings: { aspectRatio: { type: "enum", values: ["16:9", "9:16", "1:1"], default: "16:9" }, resolution: { type: "enum", values: ["720p", "1080p"], default: "720p" }, duration: { type: "range", min: 4, max: 10, default: 5 } } },
  { id: "seedance-2.0", label: "Seedance 2.0", surface: "video", roles: { start: 1, end: 1, reference: 3 }, settings: { aspectRatio: { type: "enum", values: ["16:9", "9:16", "1:1"], default: "16:9" }, resolution: { type: "enum", values: ["720p", "1080p"], default: "720p" }, duration: { type: "range", min: 4, max: 10, default: 5 } } },
  { id: "flux-2", label: "Flux 2", surface: "image", roles: { reference: 4 }, settings: { aspectRatio: { type: "enum", values: ["auto", "1:1", "4:3", "3:4", "16:9", "9:16"], default: "1:1" }, resolution: { type: "enum", values: ["1k", "2k", "4k"], default: "1k" } } },
  { id: "wan-3", label: "Wan 3", surface: "video", roles: { start: 1, end: 1, reference: 3 }, settings: { aspectRatio: { type: "enum", values: ["16:9", "9:16", "1:1"], default: "16:9" }, resolution: { type: "enum", values: ["720p", "1080p"], default: "720p" }, duration: { type: "range", min: 4, max: 10, default: 5 } } },
  { id: "kling-3-turbo", label: "Kling 3 Turbo", surface: "video", roles: { start: 1, end: 1 }, settings: { aspectRatio: { type: "enum", values: ["16:9", "9:16", "1:1"], default: "16:9" }, resolution: { type: "enum", values: ["720p", "1080p"], default: "720p" }, duration: { type: "range", min: 4, max: 10, default: 5 } } },
];

export type Surface = "image" | "video";
export type ModelEntry = (typeof MODELS)[number];
