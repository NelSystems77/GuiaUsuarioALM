/* ============================================================
   Mi Manual ALM — Service Worker
   NelSystems | Cache-first + Network fallback strategy
   ============================================================ */

const CACHE_NAME   = 'manual-alm-v1.3';
const STATIC_CACHE = 'manual-alm-static-v1.2';
const DATA_CACHE   = 'manual-alm-data-v1.2';

const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/styles.css',
  './js/app.js',
  './js/data.js',
  './icons/icon-64.png',
  './icons/icon-128.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap'
];

// ── INSTALL ────────────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ── ACTIVATE ───────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== STATIC_CACHE && k !== DATA_CACHE)
          .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH ──────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Google Fonts — network first, cache fallback
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(networkFirst(request, DATA_CACHE));
    return;
  }

  // Static assets — cache first
  event.respondWith(cacheFirst(request, STATIC_CACHE));
});

// ── STRATEGIES ─────────────────────────────────────────────
async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('<h1>Offline</h1><p>Contenido no disponible sin conexión.</p>', {
      headers: { 'Content-Type': 'text/html' }
    });
  }
}

async function networkFirst(request, cacheName) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    return cached || new Response('', { status: 503 });
  }
}

// ── BACKGROUND SYNC ────────────────────────────────────────
self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
  if (event.data?.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});
