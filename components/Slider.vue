<template>
  <!-- ======== 1.4. Partners section ========  -->
  <section class="Partners">
    <h2 class="d-none">Lorem, ipsum dolor</h2>
    <div class="container">
      <hr />
      <div class="Partners_Slider">
        <!-- Scrolling logos in a seamless loop -->
        <div class="scroll-track">
          <div v-for="i in 6" :key="'first-' + i" class="logo">
            <img
              :src="`/images/index/Partners_logo${i}.webp`"
              :alt="`logo${i}`"
            />
          </div>
          <!-- Duplicate logos for seamless scrolling -->
          <div v-for="i in 6" :key="'second-' + i" class="logo">
            <img
              :src="`/images/index/Partners_logo${i}.webp`"
              :alt="`logo${i}`"
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  </section>
  <!-- ======== End of 1.4. Partners section ========  -->
</template>