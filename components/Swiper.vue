<template>
  <section class="About_App">
    <div
      class="text-center d-flex align-items-center flex-column"
      data-aos="fade-up"
    >
      <h2 class="section-title mb-3 w-75">What We Make</h2>
      <p class="section-description w-75 m-sm-auto">
        Discover our innovative solutions crafted to meet your needs. We pride
        ourselves on delivering exceptional quality and service in every
        project.
      </p>
    </div>

    <!-- Swiper Component -->
    <swiper
      :slidesPerView="1"
      :spaceBetween="0"
      :pagination="{ clickable: true }"
      :breakpoints="{
        '320': { slidesPerView: 3, spaceBetween: 10 }, // For small mobile screens
        '640': { slidesPerView: 4, spaceBetween: 10 }, // For larger mobile screens
        '768': { slidesPerView: 4, spaceBetween: 15 }, // For tablets
        '1024': { slidesPerView: 5, spaceBetween: 20 }, // For desktops
      }"
      class="about-app-slider"
    >
      <!-- Render SwiperSlide for each image -->
      <SwiperSlide v-for="(image, index) in images" :key="index" class="slide">
        <figure class="image-container">
          <img
            :src="image.src"
            :alt="image.alt"
            data-aos="flip-left"
            class="rounded-4"
          />
        </figure>
      </SwiperSlide>
    </swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

// Image data
const images = [
  { src: "/images/index/About_App_img1.webp", alt: "About_App_img1" },
  { src: "/images/index/About_App_img2.webp", alt: "About_App_img2" },
  { src: "/images/index/About_App_img3.webp", alt: "About_App_img3" },
  { src: "/images/index/About_App_img4.webp", alt: "About_App_img4" },
  { src: "/images/index/About_App_img5.webp", alt: "About_App_img5" },
  { src: "/images/index/About_App_img1.webp", alt: "About_App_img1" },
  { src: "/images/index/About_App_img2.webp", alt: "About_App_img2" },
  { src: "/images/index/About_App_img3.webp", alt: "About_App_img3" },
  { src: "/images/index/About_App_img4.webp", alt: "About_App_img4" },
  { src: "/images/index/About_App_img5.webp", alt: "About_App_img5" },
  { src: "/images/index/About_App_img1.webp", alt: "About_App_img1" },
  { src: "/images/index/About_App_img2.webp", alt: "About_App_img2" },
  { src: "/images/index/About_App_img3.webp", alt: "About_App_img3" },
  { src: "/images/index/About_App_img4.webp", alt: "About_App_img4" },
  { src: "/images/index/About_App_img5.webp", alt: "About_App_img5" },
];
</script>

<style scoped>
.About_App {
  background: url("../images/bg/circle.webp");
  background-position: center;
  background-repeat: no-repeat;
}

@media (max-width: 640px) {
  .About_App {
    background: none;
  }
}

.About_App h2,
.About_App p {
  color: #1b1117;
}

.about-app-slider {
  padding: 50px 10px;
}

.about-app-slider .image-container {
  width: 100%;
  padding: 0;
}

.about-app-slider .image-container img {
  /* border-radius: 40px; */
  width: 100%;
  height: auto;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
}

.swiper-pagination-bullet {
  background: #e85838;
}

.swiper-pagination-bullet-active {
  background: #001851;
}
</style>
