// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/bulma.css'],
  content: {
    markdown: {
      remarkPlugins: [
        'remark-math'
      ],
      rehypePlugins: [
        'rehype-katex'
      ]
    }
  },
  app: {
    head: {
      "script": [
        {
          type:"text/javascript", body: true, src: '/clarity.js'
        }
      ]
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxt/content','nuxt-clarity-analytics','nuxt-gtag','@nuxtjs/color-mode'],
  MICROSOFT_CLARITY_ID: 'kso8ok34uv',
  nitro: { prerender: { routes: ['/rss.xml'] } },
  gtag: {
    id: 'G-ESEYFS53HH'
  }
})
