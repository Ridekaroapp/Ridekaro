const CACHE_NAME = "ridekaro-cache-v1";

const urlsToCache = [
  "/Ridekaro/",
  "/Ridekaro/index.html",
  "/Ridekaro/logo.png",
  "/Ridekaro/manifest.json"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
