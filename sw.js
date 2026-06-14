self.addEventListener('install', (event) => {
    console.log('Service Worker 安裝成功！');
});

self.addEventListener('fetch', (event) => {
    // 這裡暫時不做離線快取，單純讓瀏覽器判定我們符合 App 資格
});
