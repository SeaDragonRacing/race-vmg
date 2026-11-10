const CACHE_NAME = "race-vmg-v1";

const APP_FILES = [
  "./",
  "./index.html",
  "./courses.js"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(APP_FILES);
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