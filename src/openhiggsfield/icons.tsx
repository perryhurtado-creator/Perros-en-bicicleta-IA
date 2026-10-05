export function IconBase({ children }: { children: React.ReactNode }) {
  return <span aria-hidden>{children}</span>;
}

export function CloseIcon({ size = 13 }: { size?: number }) { return <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 3l10 10M13 3L3 13" /></svg>; }
export function ImageIcon() { return <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="2.5" y="2.5" width="11" height="11" rx="2"/><path d="M5 10l2-2 2 2 3-4 2 4" /></svg>; }
export function VideoIcon() { return <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="2" y="3" width="9" height="10" rx="2"/><path d="M11 6l3-2v8l-3-2" /></svg>; }
export function AssetsIcon() { return <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="2" y="2" width="5" height="5" rx="1"/><rect x="9" y="2" width="5" height="3" rx="1"/><rect x="9" y="7" width="5" height="7" rx="1"/><rect x="2" y="9" width="5" height="5" rx="1"/></svg>; }
export function HeartIcon({ size = 15 }: { size?: number }) { return <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 13.5s-5.5-3.4-5.5-7a2.8 2.8 0 0 1 4.8-2.1L8 4.4l.7-.9A2.8 2.8 0 0 1 13.5 6.5c0 3.6-5.5 7-5.5 7Z" /></svg>; }
export function KeyIcon() { return <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="6.5" cy="7.5" r="2.8"/><path d="M9.4 7.5H13.5v2.2H9.4" /></svg>; }
export function SearchIcon({ size = 15 }: { size?: number }) { return <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="7" r="4.3"/><path d="M10.5 10.5L14 14" /></svg>; }
export function CheckIcon({ size = 12 }: { size?: number }) { return <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 8.3l3 3 7-7" /></svg>; }
