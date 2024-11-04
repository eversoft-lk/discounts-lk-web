<script setup>
import CountUp from "vue-countup-v3";
</script>

<template>
  <section class="Rating">
    <div class="container">
      <div class="d-flex justify-content-around align-items-center">
        <div
          class="d-flex flex-column align-items-center justify-content-center gap-lg-3 gap-md-3 gap-2"
          data-aos="fade-up"
        >
          <h1 class="flex">
            <count-up class="number" :end-val="162">0</count-up>+
          </h1>
          <p>App Downloads</p>
        </div>
        <hr />
        <div
          class="d-flex flex-column align-items-center justify-content-center gap-lg-3 gap-md-3 gap-2"
          data-aos="fade-up"
        >
          <h1 class="flex">
            <count-up class="number" :end-val="182">0</count-up>+
          </h1>
          <p>Satisfied Clients</p>
        </div>
        <hr />
        <div
          class="d-flex flex-column align-items-center justify-content-center gap-lg-3 gap-md-3 gap-2"
          data-aos="fade-up"
        >
          <h1 class="flex">
            <count-up class="number" :end-val="188">0</count-up>+
          </h1>
          <p>Brands Joined</p>
        </div>
        <hr />
        <div
          class="d-flex flex-column align-items-center justify-content-center gap-lg-3 gap-md-3 gap-2"
          data-aos="fade-up"
        >
          <h1 class="flex">
            <count-up class="number" :end-val="166">0</count-up>+
          </h1>
          <p>Successful Campaigns</p>
        </div>
      </div>
    </div>
  </section>
</template>
