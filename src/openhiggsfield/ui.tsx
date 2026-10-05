import type { ReactNode } from "react";

export function Field({ label, value, children }: { label: string; value?: string; children: ReactNode }) {
  return (
    <div className="ohf-field">
      {value === undefined ? <div className="ohf-field-label">{label}</div> : (
        <div className="ohf-field-row">
          <div className="ohf-field-label">{label}</div>
          <div className="ohf-field-value">{value}</div>
        </div>
      )}
      {children}
    </div>
  );
}
