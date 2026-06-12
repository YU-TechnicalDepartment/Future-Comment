const CACHE_NAME = 'spacetimelog-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// インストール処理
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// デバイスがオフラインでも動くようにするキャッシュ制御
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
