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
  modules: ['@nuxt/content']
})
