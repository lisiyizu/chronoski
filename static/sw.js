importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "chronoski",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.53615adf4475087cd616.js",
    "revision": "d2eeb72acb9daf59c82eed2900ba2b50"
  },
  {
    "url": "/_nuxt/layouts/default.88cfed2fa6fd3dc18e30.js",
    "revision": "5d51c0fea223263bd8f53ccaee8ca0a4"
  },
  {
    "url": "/_nuxt/manifest.1ac81cf6963e4682770e.js",
    "revision": "aa8e126aa5df69783a5deda1abf35033"
  },
  {
    "url": "/_nuxt/pages/competitions/_id.e26b3bc1e434d70741ba.js",
    "revision": "99d7178b6aeecab7484943573fd52299"
  },
  {
    "url": "/_nuxt/pages/competitions/_id/_uid.9eba53fcd0ca72fff00f.js",
    "revision": "512c21604e41c5e26b9e2cf10fe6dd8e"
  },
  {
    "url": "/_nuxt/pages/competitions/_id/edit.e10ab6097b5e296e8235.js",
    "revision": "26b8d2cbe0d19c48f539b6e84d914c76"
  },
  {
    "url": "/_nuxt/pages/competitions/_id/index.0685e74346fc76d09b1e.js",
    "revision": "466a05fa211c2fcb03bbdd31909c50f8"
  },
  {
    "url": "/_nuxt/pages/competitions/create.7edbd4ea056e21bce337.js",
    "revision": "b51f0e62bc9af16ad6d27a7cd851cc34"
  },
  {
    "url": "/_nuxt/pages/competitions/index.ca99a5afa97d837ffecc.js",
    "revision": "e237ca14ece12b5add11d7be54b2557a"
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

