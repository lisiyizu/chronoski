module.exports = {
  mode: 'universal',
  head: {
    title: 'Chronoski',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Application Web Progressive pour enregistrer les temps des skieurs lors de compétition de ski.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: false,
  css: [
    'element-ui/lib/theme-default/index.css'
  ],
  plugins: [
    '@/plugins/element-ui'
  ],
  modules: [
    '@nuxtjs/pwa'
  ],
  build: {
    plugins: [
      new webpack.NormalModuleReplacementPlugin(/element-ui\/lib\/locale\/lang\/zh-CN/, 'element-ui/lib/locale/lang/fr')
    ],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
