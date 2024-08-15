// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      APP_NAME: process.env.APP_NAME,
      APP_LOCALE: process.env.APP_LOCALE,
      APP_DEBUG: process.env.APP_DEBUG?.toLowerCase() === "true" || process.env.APP_DEBUG == "1",
      APP_ENV: process.env.APP_ENV ?? 'debug',
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
