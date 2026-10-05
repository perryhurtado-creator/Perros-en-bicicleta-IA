"use client";

import { useState } from "react";

import { useActive } from "@/generation/stores/active";
import { MODELS } from "@/generation/catalog";

export function OpenHiggsfieldApp({ fontClassName }: { fontClassName?: string }) {
  const active = useActive();
  const [selectedId, setSelectedId] = useState(active.model);
  const model = MODELS.find((entry) => entry.id === selectedId) ?? MODELS[0];

  return (
    <div className={`ohf ${fontClassName ?? ""}`}>
      <div className="ohf-shell">
        <header className="ohf-header">
          <div className="ohf-brand">
            <span className="ohf-brand-mark" aria-hidden />
            <div>
              <div className="ohf-brand-title">OpenHiggsfield AI</div>
              <div className="ohf-brand-subtitle">Open source AI studio</div>
            </div>
          </div>
          <div className="ohf-top-actions">
            <button type="button" className="ohf-pill">{model.label}</button>
          </div>
        </header>

        <section className="ohf-composer">
          <div className="ohf-surface-toggle">
            <button type="button" className={active.surface === "image" ? "is-selected" : ""} onClick={() => active.setModel(model.id)}>Image</button>
            <button type="button" className={active.surface === "video" ? "is-selected" : ""} onClick={() => active.setModel("seedance-2.5")}>Video</button>
          </div>
          <div className="ohf-composer-box">
            <textarea placeholder="Describe your generation..." />
            <div className="ohf-composer-actions">
              <button type="button" className="ohf-btn-quiet">Clear</button>
              <button type="button" className="ohf-btn-solid">Generate</button>
            </div>
          </div>
        </section>

        <section className="ohf-panel-grid">
          <div className="ohf-panel">
            <h2>Available models</h2>
            <div className="ohf-model-list">
              {MODELS.map((entry) => (
                <button key={entry.id} type="button" className={entry.id === selectedId ? "ohf-model-row is-active" : "ohf-model-row"} onClick={() => { setSelectedId(entry.id); active.setModel(entry.id); }}>
                  <span className="ohf-model-swatch" aria-hidden />
                  <span>
                    <strong>{entry.label}</strong>
                    <small>{entry.id}</small>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
