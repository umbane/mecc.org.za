// Service Worker for MECC website caching
const CACHE_NAME = 'mecc-v1';
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

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});