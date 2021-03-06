module.exports = {
  css: ['github-markdown-css/github-markdown.css'],
  /*
  ** Headers of the page
  */
  head: {
    title: 'home',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport'
        , content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'home' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#66CCFF' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: ['~plugins/iview']
}
