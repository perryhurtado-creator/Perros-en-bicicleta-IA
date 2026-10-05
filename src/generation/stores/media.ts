import { create } from "zustand";
import { persist } from "zustand/middleware";

import { browserStorage } from "./browser-storage";

type MediaState = {
  items: Array<{ id: string; url: string; role: string }>;
  add: (item: { id: string; url: string; role: string }) => void;
  remove: (id: string) => void;
};

function createMediaStore(name: string) {
  return create<MediaState>()(
    persist(
      (set) => ({
        items: [],
        add: (item) => set((state) => ({ items: [...state.items, item] })),
        remove: (id) => set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
      }),
      {
        name,
        storage: browserStorage(),
        partialize: (state) => ({ items: state.items.filter((item) => !item.url.startsWith("blob:")) }),
      },
    ),
  );
}

export const useImageMedia = createMediaStore("openhiggsfield.imageMedia.v1");
export const useVideoMedia = createMediaStore("openhiggsfield.videoMedia.v1");
