"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { VIEWS, VIEW_LABELS, type GalleryView } from "./data";
import { AssetsIcon, HeartIcon, ImageIcon, KeyIcon, VideoIcon } from "./icons";

const VIEW_ICONS: Record<GalleryView, () => React.ReactNode> = {
  image: () => <ImageIcon />,
  video: () => <VideoIcon />,
  assets: () => <AssetsIcon />,
  favorites: () => <HeartIcon size={15} />,
};

export function Topbar({
  view,
  onView,
  busy,
  keyConfigured,
  onKeys,
}: {
  view: GalleryView;
  onView: (next: GalleryView) => void;
  busy: boolean;
  keyConfigured: boolean;
  onKeys: () => void;
}) {
  const tabsRef = useRef<HTMLDivElement>(null);
  const [thumb, setThumb] = useState<{ x: number; w: number } | null>(null);

  useEffect(() => {
    const tabs = tabsRef.current;
    if (!tabs) return;
    const measure = () => {
      const active = tabs.querySelector<HTMLElement>('[aria-selected="true"]');
      if (active) setThumb({ x: active.offsetLeft, w: active.offsetWidth });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(tabs);
    return () => observer.disconnect();
  }, [view]);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const from = VIEWS.indexOf(view);
      const to =
        event.key === "ArrowRight"
          ? (from + 1) % VIEWS.length
          : event.key === "ArrowLeft"
            ? (from - 1 + VIEWS.length) % VIEWS.length
            : event.key === "Home"
              ? 0
              : event.key === "End"
                ? VIEWS.length - 1
                : -1;
      if (to < 0) return;
      event.preventDefault();
      onView(VIEWS[to]!);
    },
    [onView, view],
  );

  return (
    <div className="ohf-topbar">
      <div className="ohf-bar ohf-enter-1">
        <div className="ohf-tabs" role="tablist" aria-label="Gallery scope" ref={tabsRef} onKeyDown={onKeyDown}>
          <span className="ohf-thumb" data-ready={thumb !== null} aria-hidden style={{ ["--thumb-x" as string]: `${thumb?.x ?? 0}px`, ["--thumb-w" as string]: `${thumb?.w ?? 0}px` }} />
          {VIEWS.map((id) => {
            const selected = view === id;
            return (
              <button key={id} type="button" role="tab" aria-selected={selected} className="ohf-tab" onClick={() => onView(id)}>
                {VIEW_ICONS[id]()}
                <span className="ohf-tab-label">{VIEW_LABELS[id]}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="ohf-bar ohf-enter-1">
        <button type="button" className="ohf-key" data-busy={busy} data-ready={keyConfigured} onClick={onKeys}>
          <KeyIcon />
          <span className="ohf-key-text">{keyConfigured ? "Your key" : "Add key"}</span>
          <span className="ohf-lamp" />
        </button>
      </div>
    </div>
  );
}
