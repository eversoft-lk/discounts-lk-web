<script setup>
import { ref, onMounted } from "vue";

const customers = ref(0);
const users = ref(0);
const subscribers = ref(0);

const countUp = (target, variable, duration = 2000) => {
  const start = 0;
  const increment = target / (duration / 16.67);

  const animate = () => {
    if (variable.value < target) {
      variable.value = Math.min(variable.value + increment, target);
      requestAnimationFrame(animate);
    }
  };

  animate();
};

onMounted(() => {
  countUp(200, customers, 2000);
  countUp(188, users, 2000);
  countUp(22, subscribers, 2000);
});
</script>

<template>
  <section class="Community">
    <div
      class="d-flex justify-content-center align-items-center flex-column text-center gap-3 mb-lg-5 mb-4"
      data-aos="fade-up"
    >
      <h2>Join Our Community</h2>
      <p class="w-75 m-auto">
        Connect with like-minded individuals and businesses to unlock exclusive
        deals and offers. Our community is dedicated to helping you save while
        enjoying the best services available in your area. Join us today and
        start experiencing the benefits of being part of a vibrant network!
      </p>
    </div>
    <div class="mt-lg-4">
      <div
        class="d-flex justify-content-center align-items-center text-center gap-lg-5 gap-4 w-100 position-relative"
      >
        <div class="p-5 shadow-lg rounded-5 bg-white" data-aos="flip-left">
          <h1 class="flex">{{ Math.floor(customers) }}M</h1>
          <h4>Customers</h4>
        </div>
        <div class="p-5 shadow-lg rounded-5 bg-white" data-aos="flip-left">
          <h1 class="flex">{{ Math.floor(users) }}M+</h1>
          <h4>Users</h4>
        </div>
        <div class="p-5 shadow-lg rounded-5 bg-white" data-aos="flip-left">
          <h1 class="flex">{{ Math.floor(subscribers) }}K+</h1>
          <h4>Subscribers</h4>
        </div>
      </div>
    </div>
  </section>
</template>
