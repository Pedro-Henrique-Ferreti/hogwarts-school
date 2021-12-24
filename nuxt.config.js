export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    host: '0.0.0.0',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'School of Witchcraft and Wizardry | Hogwarts',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#ffffff'},
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
      { rel:'apple-touch-icon', sizes:'57x57', href: '/icons/apple-icon-57x57.png' },
      { rel:'apple-touch-icon', sizes:'60x60', href: '/icons/apple-icon-60x60.png' },
      { rel:'apple-touch-icon', sizes:'72x72', href: '/icons/apple-icon-72x72.png' },
      { rel:'apple-touch-icon', sizes:'76x76', href: '/icons/apple-icon-76x76.png' },
      { rel:'apple-touch-icon', sizes:'114x114', href: '/icons/apple-icon-114x114.png' },
      { rel:'apple-touch-icon', sizes:'120x120', href: '/icons/apple-icon-120x120.png' },
      { rel:'apple-touch-icon', sizes:'144x144', href: '/icons/apple-icon-144x144.png' },
      { rel:'apple-touch-icon', sizes:'152x152', href: '/icons/apple-icon-152x152.png' },
      { rel:'apple-touch-icon', sizes:'180x180', href: '/icons/apple-icon-180x180.png' },
      { rel:'icon', type:'image/png', sizes:'192x192', href: '/icons/android-icon-192x192.png' },
      { rel:'icon', type:'image/png', sizes:'32x32', href: '/icons/favicon-32x32.png' },
      { rel:'icon', type:'image/png', sizes:'96x96', href: '/icons/favicon-96x96.png' },
      { rel:'icon', type:'image/png', sizes:'16x16', href: '/icons/favicon-16x16.png' },
      { rel:'manifest', href: '/icons/manifest.json' },
    ],
    script: [
      { src: '/scrollreveal.min.js' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [
      '@/assets/scss/_variables.scss',
      '@/assets/scss/_mixins.scss',
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
