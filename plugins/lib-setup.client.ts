import { defineNuxtPlugin } from "nuxt/app";
import AOS from "aos";

import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "/js/slick.min.js";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== "undefined") {
    nuxtApp.AOS = AOS.init();
  }
});