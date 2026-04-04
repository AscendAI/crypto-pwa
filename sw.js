const CACHE_NAME = 'cryptofolio-v3';
const ASSETS = ['/', '/index.html'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Network-first for API calls
  // Skip caching for Firebase and Google auth
  if (url.hostname.includes('firebaseapp') || url.hostname.includes('googleapis.com') || url.hostname.includes('gstatic.com') || url.hostname.includes('firestore.googleapis.com') || url.hostname.includes('identitytoolkit') || url.hostname.includes('accounts.google')) {
    e.respondWith(fetch(e.request));
    return;
  }
  if (url.hostname.includes('coingecko') || url.hostname.includes('coincap') || url.hostname.includes('binance')) {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    );
    return;
  }
  // Cache-first for app shell
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
