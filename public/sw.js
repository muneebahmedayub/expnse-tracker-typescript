var CACHE_NAME = 'website';
var urlsToCache = [
    '/static/js/bundle.js',
    '/static/js/0.chunk.js',
    '/static/js/main.chunk.js',
    '/static/media/2822.2a22610c.jpg',
    '/logo192.png',
    '/sockjs-node',
    '/manifest.json',
    '/favicon.ico',
    'index.html',
    '/',
];

this.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});

self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (cachesName) {
            return Promise.all(
                cachesName
                    .filter(function (cacheName) {
                        return cacheName.startsWith("Offline-") && cacheName != StaticCache;
                    })
                    .map(function (cacheName) {
                        return caches.delete(cacheName);
                    })
            );
        })
    );
});