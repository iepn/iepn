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
  devtools: { enabled: true },
  modules: ['@nuxt/content','nuxt-clarity-analytics','nuxt-gtag'],
  MICROSOFT_CLARITY_ID: 'kso8ok34uv',
  gtag: {
    id: 'G-ESEYFS53HH'
  }
})
