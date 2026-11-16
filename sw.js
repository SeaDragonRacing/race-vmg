const CACHE_NAME = "race-vmg-v3";
const APP_FILES = [
  "./",
  "./index.html",
  "./courses.js"
];
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      // cache: "reload" bypasses the browser HTTP cache, so a new
      // version never gets installed with a stale courses.js
      return cache.addAll(
        APP_FILES.map(function(url) {
          return new Request(url, { cache: "reload" });
        })
      );
    })
  );
  self.skipWaiting();
});
self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(cachedFile) {
      if (cachedFile) {
        return cachedFile;
      }
      return fetch(event.request);
    })
  );
});
