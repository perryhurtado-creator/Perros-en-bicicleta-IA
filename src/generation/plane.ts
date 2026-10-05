import { getModel } from "./catalog";

export type GenerationPlane = {
  model: string;
  prompt: { text: string };
  media: Record<string, Array<{ id: string; url: string; role: string }>>;
  settings: Record<string, unknown>;
};

export function assemblePlane(): GenerationPlane {
  const active = useActive.getState();
  const model = getModel(active.model);
  const text = active.surface === "image" ? useImagePrompt.getState().text : useVideoPrompt.getState().text;
  const items = active.surface === "image" ? useImageMedia.getState().items : useVideoMedia.getState().items;
  const media: Record<string, Array<{ id: string; url: string; role: string }>> = {};
  for (const item of items) {
    const max = model.roles[item.role as keyof typeof model.roles];
    if (!max) continue;
    const list = media[item.role] ?? [];
    if (list.length >= max) continue;
    list.push(item);
    media[item.role] = list;
  }
  return { model: model.id, prompt: { text }, media, settings: model.settings };
}

import { useActive } from "./stores/active";
import { useImageMedia, useVideoMedia } from "./stores/media";
import { useImagePrompt, useVideoPrompt } from "./stores/prompt";
