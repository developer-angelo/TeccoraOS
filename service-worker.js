const CACHE_NAME = 'teccora-os-v1.01';
const urlsToCache = [
  './',
  './index.html',
  './home.html',
  './about.html',
  './manifest.json',
  './icon_web.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
