importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "chronoski",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.384de948ed00eb8e3ec9.js",
    "revision": "91cc760174bbdd7a4a5d5d170fbe1aa8"
  },
  {
    "url": "/_nuxt/layouts/default.911e76822251e7d5c700.js",
    "revision": "f0c0622fc79cd039a9f7814a8467c42b"
  },
  {
    "url": "/_nuxt/manifest.42a8a79bd27b96ea0759.js",
    "revision": "2b1e11915f7f19f713d1e59dddad4902"
  },
  {
    "url": "/_nuxt/pages/competitions/_id.3abac328d55ee04f3c43.js",
    "revision": "a4889021f0fad813d4ccb621a6f61542"
  },
  {
    "url": "/_nuxt/pages/competitions/_id/_uid.9eba53fcd0ca72fff00f.js",
    "revision": "512c21604e41c5e26b9e2cf10fe6dd8e"
  },
  {
    "url": "/_nuxt/pages/competitions/_id/edit.be76408af1200d396ece.js",
    "revision": "704d9a70b7ddbd0a2ce0d9ec3ec0815c"
  },
  {
    "url": "/_nuxt/pages/competitions/_id/index.0685e74346fc76d09b1e.js",
    "revision": "466a05fa211c2fcb03bbdd31909c50f8"
  },
  {
    "url": "/_nuxt/pages/competitions/create.f8186fc37d7c966c27a6.js",
    "revision": "d941ee6ff5d1353feaa10a4290461bef"
  },
  {
    "url": "/_nuxt/pages/competitions/index.0684ccb65fe003267105.js",
    "revision": "01638dc1bfaef0361c92cd5adf2d95fa"
  },
  {
    "url": "/_nuxt/pages/index.3f2420832179b2ed6c64.js",
    "revision": "d6b24917a57ae36c7a91fe7672366f38"
  },
  {
    "url": "/_nuxt/pages/users/_id.e313416a209613fadbe8.js",
    "revision": "2c4e24cabe654d5e9ae0c20fea322fd9"
  },
  {
    "url": "/_nuxt/pages/users/create.1e0ea62e818dafd70785.js",
    "revision": "9945bf8751ed5b642e0d80e96158e24e"
  },
  {
    "url": "/_nuxt/pages/users/index.40e75afec72b1c56634b.js",
    "revision": "2765548eadd279ac8b73117444f27a81"
  },
  {
    "url": "/_nuxt/vendor.741b7893163f28e17892.js",
    "revision": "c2425edbfac92f8d4ac37bad0cb7a50b"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

