self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
  });
   
  self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
  });
   
  // サービスワーカー有効化に必須
  self.addEventListener('fetch', function(event) {});