// Service Worker for MECC website caching
const CACHE_NAME = 'mecc-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/lib/bootstrap/css/bootstrap.min.css',
  '/lib/font-awesome/css/font-awesome.min.css',
  '/js/main.js',
  '/lib/jquery/jquery.min.js',
  '/lib/bootstrap/js/bootstrap.min.js',
  '/img/favicon.png',
  '/img/apple-touch-icon.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('mecc-') && cacheName !== CACHE_NAME;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});