// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxt/icon",
    "@nuxthq/studio",
    "@nuxtjs/color-mode",
    "@nuxtjs/seo",
    "@nuxt/scripts",
    "@nuxt/image",
    "@nuxt/fonts",
    'nuxt-gtag',
  ],
  gtag: {
    id: "G-W7J0F10993"
  },

  colorMode: {
    classSuffix: "",
  },

  // https://content.nuxt.com/
  content: {
    documentDriven: {
      injectPage: false,
    },
    highlight: false,
  },

  ogImage: {
    defaults: {
      component: "OgImage",
    },
  },

  runtimeConfig: {

    
    public: {
      // todo posthog re-enable
      // posthogPublicKey: "placeholder",
      // posthogHost: 'https://us.i.posthog.com',
      mdc: {
        useNuxtImage: true,
      },
    },
  },
  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: ["/", "/sitemap.xml"],
    },
  },
  site: {
    url: "filtersfound.com",
  },
  compatibilityDate: "2024-09-20",
});