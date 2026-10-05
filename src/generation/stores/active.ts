import { create } from "zustand";
import { persist } from "zustand/middleware";

import { browserStorage } from "./browser-storage";

export const MAX_BATCH = 4;

type ActiveState = {
  surface: "image" | "video";
  model: string;
  batch: number;
  setModel: (id: string) => void;
  setBatch: (count: number) => void;
};

export const useActive = create<ActiveState>()(
  persist(
    (set) => ({
      surface: "video",
      model: "seedance-2.5",
      batch: 1,
      setModel: (id) => set((state) => ({ model: id, surface: state.surface })),
      setBatch: (count) => set((state) => ({ batch: Math.min(MAX_BATCH, Math.max(1, Math.round(count))) })),
    }),
    {
      name: "openhiggsfield.active.v2",
      storage: browserStorage(),
      partialize: (state) => ({ surface: state.surface, model: state.model, batch: state.batch }),
    },
  ),
);
