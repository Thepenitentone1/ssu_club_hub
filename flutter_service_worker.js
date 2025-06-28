'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b8f4b898f389afa981579cc56f7546ea",
"assets/AssetManifest.bin.json": "ed0130a8d82b53f4e615441aa1ce0149",
"assets/AssetManifest.json": "f3faa1fb977b8a47cc115cda44f3f983",
"assets/assets/animations/Animation_check.json": "4f052988ef78c567589a328eb185ef91",
"assets/assets/animations/Animation_intro.json": "6cf041cd49d3aa339587b3ba0e75fc20",
"assets/assets/animations/Animation_load.json": "5f16dd2b81e0fa7c2a96000dfaedeeda",
"assets/assets/animations/Animation_wave.json": "37661c9b4f7b8f79a71196d82b315301",
"assets/assets/animations/loading.json": "217d5d8845e39a69a907daad4fef2000",
"assets/assets/animations/welcome_animation.json": "3f27a2888a528307dbbfb1f311f6a708",
"assets/assets/fonts/Poppins-Black.ttf": "005bf0ac0e3d80eac4c5514de280ae83",
"assets/assets/fonts/Poppins-Bold.ttf": "92934d92f57e49fc6f61075c2aeb7689",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "12fa32ab93fb44850f24fc1da0d6004d",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "66292bc2ab55b992b6efd4a63b950d67",
"assets/assets/fonts/Poppins-Light.ttf": "7c448dffabdec11c8a24e013e87d9a7e",
"assets/assets/fonts/Poppins-Medium.ttf": "20aaac2ef92cddeb0f12e67a443b0b9f",
"assets/assets/fonts/Poppins-Regular.ttf": "09acac7457bdcf80af5cc3d1116208c5",
"assets/assets/fonts/Poppins-SemiBold.ttf": "2c63e05091c7d89f6149c274971c7c23",
"assets/assets/fonts/Poppins-Thin.ttf": "9b3fd4fadb0a6be3e3cd9075fd2a1e5b",
"assets/assets/images/clubs/delta.png": "0e3a4e9ac675aedc9ef565d362fb3dd0",
"assets/assets/images/clubs/educators.png": "c9bc0eb75c9595c708f5cbad36f0d85b",
"assets/assets/images/clubs/elem.png": "5911bfba810b6397129e283906833db8",
"assets/assets/images/clubs/eng.png": "9e8ee953a3327989592842d3e264b35c",
"assets/assets/images/clubs/kaupod.png": "f102379b334cd39b291b7097f7b3bd3d",
"assets/assets/images/clubs/math.png": "2d18d524160e3cdb033c1f8dde6f47d0",
"assets/assets/images/clubs/ministry.png": "78943b065a1bfd46e8f448c3ec1fed84",
"assets/assets/images/clubs/pschy.png": "916e0cea3faccbbb274823a6cf75f4b9",
"assets/assets/images/clubs/redcross.png": "d2b962cbf003c7a378fe994558353cd4",
"assets/assets/images/clubs/system.png": "059534047f6d053e760297efb53f379e",
"assets/assets/images/clubs/united.png": "71d3daeeaf891d14d7a9d5da58d3e728",
"assets/assets/images/ssulg.png": "cb7540cc314c2684e4b77af51a4beab4",
"assets/FontManifest.json": "f477ffc5a4f1828ffbe010aa4eb65b6b",
"assets/fonts/MaterialIcons-Regular.otf": "912caf961fa991c3af6c826cfa4ba43b",
"assets/NOTICES": "41916741705dfdfc87b7ae26acae74b6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-config.js": "f098fbfb5ca3658e619a19a2f3dded66",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "477d27a43bf7a1e7d44c54c8358b25ec",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2b7063261a6e24ef6895d6ffc81c592f",
"/": "2b7063261a6e24ef6895d6ffc81c592f",
"main.dart.js": "2f364b84a3564a150cd50fee739f3603",
"manifest.json": "56a52f33215ace90fb23cb9381f866a6",
"version.json": "764b27601824a6eb5ba42ec0a8e616f9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
