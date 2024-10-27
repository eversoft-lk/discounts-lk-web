// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/font-awesome.min.css",
    "~/assets/css/style.css",
    "~/assets/css/responsive.css",
    "~/assets/css/slick.min.css",
  ],
  app: {
    head: {
      script: [
        {
          src: "/js/custom.js",
          defer: true,
        },
      ],
    },
  },
});
