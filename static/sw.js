importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "chronoski",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.83f769921402e12585a4.js",
    "revision": "383b0ee7207a07c2972a20e538d72a70"
  },
  {
    "url": "/_nuxt/layouts/default.0f97b1c5093b51887d9b.js",
    "revision": "0bbe5d5c6fea1fce421675d6022019a8"
  },
  {
    "url": "/_nuxt/manifest.b9be453807cb68d5c695.js",
    "revision": "6e5617bf78ee02f6c6a600412581ec4a"
  },
  {
    "url": "/_nuxt/pages/competitions/_id.e26b3bc1e434d70741ba.js",
    "revision": "99d7178b6aeecab7484943573fd52299"
  },
  {
    "url": "/_nuxt/pages/competitions/_id/_uid.781cb73c7c122f3c2b95.js",
    "revision": "8cc4dc6c302581f668ded37da31dfbdc"
  },
  {
    "url": "/_nuxt/pages/competitions/_id/edit.e10ab6097b5e296e8235.js",
    "revision": "26b8d2cbe0d19c48f539b6e84d914c76"
  },
  {
    "url": "/_nuxt/pages/competitions/_id/index.7c986ecf6bac766f8fa4.js",
    "revision": "4d170dd685d11a5b543d853e37e90df9"
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
    "url": "/_nuxt/pages/index.a6d8b1b46651ac838cb9.js",
    "revision": "737c5b70bd5220a5ef6d88b31ed60f34"
  },
  {
    "url": "/_nuxt/pages/users/_id.5c118110815d690921eb.js",
    "revision": "06fce1c9ea25738ce670031c315444f9"
  },
  {
    "url": "/_nuxt/pages/users/create.4f2d404d04c459db7595.js",
    "revision": "d59ef32abe3e62afed9af90209317c4b"
  },
  {
    "url": "/_nuxt/pages/users/index.f782a0529a84b106b137.js",
    "revision": "acc77c7544d091c61441d9c167e91342"
  },
  {
    "url": "/_nuxt/vendor.741b7893163f28e17892.js",
    "revision": "c2425edbfac92f8d4ac37bad0cb7a50b"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

