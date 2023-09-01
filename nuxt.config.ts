// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@storyblok/nuxt"],

  storyblok: {
    accessToken: "Nbrm0soKR2MvQ9B6DMsR7wtt",
  },

  nitro: {
    static: true,
  },
});
