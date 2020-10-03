'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d7596e5f8de7332c796f97504a322c89",
"google72f709a14a0a23c6.html": "d4182dca99226def2ca68c0e4931afc3",
"index.html": "a070694b24843b17dd9f2391166f798f",
"/": "a070694b24843b17dd9f2391166f798f",
"main.dart.js": "cdb6529cc5f05da0be24a36a043e6274",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bf764f9555b034482339a873abe75cba",
".git/config": "5da3a0cf9aee474d3c5f36f53d01c24b",
".git/objects/95/104adbd5c30e1e5827de1af20541aa52f4a6d8": "ca77cdb570a65dc44cdd3df3e8e1f770",
".git/objects/50/1de92400eeacad172014bdf2c53975d0c310af": "9c8b8c81bef12635797126e216724c31",
".git/objects/6f/0ab6b184f470ae118b2fd58797f801838eff32": "33912bc2512b0dff523bdb85b07f4ccb",
".git/objects/35/7e9fae732b558afe2d0ddbf3e1a9bd8a257167": "988b47c2eb766d7fe017bbeb33b61a91",
".git/objects/56/e673fd3d5d7350f4bf8a6a1d409a216cb79312": "083d12b85192dd7949013dc2c224927b",
".git/objects/3d/290aa375a9d75b4e4e6f69fa2bb1a0dc8b9126": "50d1d8a95f032e2e1352e9ae14d8a0c6",
".git/objects/94/a912d65d740e711cd499eb8ebf7e123a36a4e0": "abc96a58abcbf86c41da71cabbbea1e7",
".git/objects/9c/9be2b32fb32d3e473fd66d6936029cf770c993": "a59e21f672c6f5b9d7d410a786dd70fe",
".git/objects/9c/4723fcb36ee094dd542b28d47c338dd4261a31": "9045752d12bc5ff47b85406373ba24c4",
".git/objects/ad/95df3928462a254a051aec9c835d90ccf67e0d": "705b2ca126c4254b298a5d0523c66a29",
".git/objects/a5/f4222c68b7a392a7744a4a97c30b33f730a5a7": "784b52d79b4f803aebc899e9858a147c",
".git/objects/c0/52ed5aeb86ce0f6685cadc0f62251c75bb0eba": "2bcc15e2efc63131e14e7020a9ec1b58",
".git/objects/c9/befafe2e2d920f8e096fc026a1ea08b00dbeb0": "d56e810ca19fbfd645d3e78464046185",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/c8/d286afeca5654c26ce5a65d0b749c58f1e3f5d": "954c12fa4b31d3891368fd854f207baa",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/7d/6a63cac19cd6f28d002f04d16de861faf43822": "7c1046bbe24c82054c1542a19e4856b4",
".git/objects/42/00050880f39395b4b8be5216269a465ffa815b": "52a80b1345047b04c1786ffc3341459d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/357cb9c97408f7904bdc0a73bb937b2a4041e4": "2affc5f764f2b8ab79c72f94c283b42c",
".git/objects/9a/94b848f5cefb1ee5b30470fbdea408b96777ba": "d96e20df5610b72400631328d9ebf025",
".git/objects/09/d5dfcae5323915dae3e863abd949b5c0644e63": "fd5f44f8f109a035c39913cf014c9fa7",
".git/objects/5d/39988e027eb2814a79cd13a47ac973c1e19f5c": "75b1270cb5769338be4cf5efb1db31d5",
".git/objects/3a/7babf76127e3b535cad331a94d90730f708b29": "ae6f29e710fc36d6784c678458fb4afc",
".git/objects/98/6c46d0fd1279801487e4bc2af3b6519adcdaa1": "ad78185fbe14d7a824c09a8497fca80d",
".git/objects/53/012fdfe5a58a39169888aea4878c5b195558c3": "70f39097f7fcf0be22c8b4c046b0e51d",
".git/objects/5e/66c13d1de97d4526d48f5d2b7baf42b06203fd": "fad63a65558f3f51a65437b3d47b8fd1",
".git/objects/06/f71772d0d84e07c26b39fd000cf4e0a5a49e4e": "7fc12d37c507554a372e4b405f108571",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/64/b2cab5aada8be6a52cd2a5534768d312df591e": "703dc4ef98e0fdab32010eab33d37664",
".git/objects/dc/6a2015645132035f21be11e79636007f314f26": "87d71c7dbdee1f3604a6cd0d404d0acd",
".git/objects/b6/71975e21cffa7b3ac913b6a54ea2c4b54b0336": "ae5eeb763acc29071af7db0b10c8fba3",
".git/objects/d5/514b191cc3b9f9516b96af27ef655d1caff811": "2ca23fa3d1ba21b2bfe65ca41a7b3620",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/de/05ec02387eb532aaac3c8aaf3d8c9f0c302143": "9f54ada3b39d212a4e23c2ceaac484c6",
".git/objects/a1/9fbde24c1f83447704e8a8813d53b45ee7f3e3": "a8da5712daf90a1143ca952727d02838",
".git/objects/e6/392712216e264edb371fa8d944720e68208ef8": "d2044a5a59b497168735df7a07ff606d",
".git/objects/f9/10a5842a7f158b3063bb99687ae7d82e1179e7": "6fd11b6e980e9e8bee1a6334764e333a",
".git/objects/cb/c677d5c96e9d8fdeb08e15cdfc7f18f7307285": "aa9702f06417d59d9e96cbb162fecf46",
".git/objects/cb/9c07788ed27754a5a954c70b1ce4476e695efd": "3d3c73136ececba992caece4e98db0a2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/854ec8c87d07a84bfa2391820e40b1272c0720": "8954f818db374f031c3dd4c4107cf1a7",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/78/cf054fdfa36f4a5cfbf1362b72b97627c96ea0": "0c922c416f49feeeaee823c4b1f4e747",
".git/objects/14/fe94db5b9e5e1e3ac5088044d1dba3591b18e2": "cb8f4c1f7722346266452377c57c2295",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "dfdf4c6b75bda1d08f53624b3e6cac39",
".git/logs/refs/heads/master": "dfdf4c6b75bda1d08f53624b3e6cac39",
".git/logs/refs/remotes/origin/master": "ba24a1e13fea67e033eeb10e30cc19f4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "c289f1519af013b3339ea835bd7b3f2b",
".git/refs/remotes/origin/master": "c289f1519af013b3339ea835bd7b3f2b",
".git/index": "ccb62722b36c553014d493ff38f0c2f1",
".git/COMMIT_EDITMSG": "360ce4f2da1c89fd28a9d978fe0fd686",
"assets/AssetManifest.json": "38e1c55a7f16f3f32ccbbd1ec458771e",
"assets/NOTICES": "cef642602995c89ed78dd3d7bd59685a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_google_maps/assets/images/marker_a.png": "9b687e681fcc41298dfab9c1304b66d0",
"assets/packages/flutter_google_maps/assets/images/marker_b.png": "bb8df73622307b582f89602743f4f02f",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
