export const SIDEBAR_OPEN_EVENT = 'tech-note:sidebar-open'
export const SIDEBAR_CLOSE_EVENT = 'tech-note:sidebar-close'

export function openSidebarDrawer(): void {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new Event(SIDEBAR_OPEN_EVENT))
}

export function closeSidebarDrawer(): void {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new Event(SIDEBAR_CLOSE_EVENT))
}
