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
  MICROSOFT_CLARITY_ID: 'kso8ok34uv',
  devtools: { enabled: true },
  modules: ['@nuxt/content','nuxt-clarity-analytics']
})
