export const GA_ID = 'G-4J046JXWVC';

export function trackPageView(path) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('config', GA_ID, { page_path: path });
  window.gtag('event', 'page_view', { page_path: path });
}

export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', name, params);
}

export function updateConsent(granted) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('consent', 'update', {
    ad_storage: granted ? 'granted' : 'denied',
    ad_user_data: granted ? 'granted' : 'denied',
    ad_personalization: granted ? 'granted' : 'denied',
    analytics_storage: granted ? 'granted' : 'denied',
  });
}
