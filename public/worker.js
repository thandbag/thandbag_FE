var CACHE_NAME = 'thandbag';
var urlsToCache = [
  './index.html', //캐싱할 파일들
  './offline.html' //오프라인일때 보여줄 페이지 (네트워크가 아예 끊겼을때 새로고침하면 나오는 페이지)
];

// Install a service worker
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache); //캐싱할 파일들 전부 저장소에 저장
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Update a service worker
self.addEventListener('activate', event => {//업데이트용
  let cacheWhitelist = []; // 여기에 들어간 캐시파일들이 업데이트 되는 파일들
  cacheWhitelist.push(CACHE_NAME);
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName); //화이트리스트에 들어가지않은 캐싱된 파일들은 전부 삭제
          }
        })
      );
    })
  );
});