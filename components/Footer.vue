<script setup>
let currentYear = new Date().getFullYear();
</script>

<template>
  <footer>
    <div
      class="d-flex justify-content-center align-items-center flex-column gap-lg-5 gap-4"
    >
      <figure>
        <a href="index.html">
          <img src="/images/footer_Logo.svg" alt="footer_Logo" />
        </a>
      </figure>
      <ul class="d-flex gap-lg-5 gap-4">
        <li>
          <p>
            <a href="index.html">Home</a>
          </p>
        </li>
        <li>
          <p>
            <a href="Features.html">Features</a>
          </p>
        </li>
        <li>
          <p>
            <a href="Pricing.html">Pricing</a>
          </p>
        </li>
        <li>
          <p>
            <a href="About.html">About</a>
          </p>
        </li>
        <li>
          <p>
            <a href="Contact.html">Contact</a>
          </p>
        </li>
      </ul>
    </div>
    <div
      class="d-flex justify-content-center align-items-center flex-column gap-lg-4 gap-4 mt-lg-4 mt-3"
    >
      <div
        class="d-flex justify-content-center align-items-center gap-lg-5 gap-4"
      >
        <figure class="d-flex justify-content-center align-items-center">
          <a href="#">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </figure>
        <figure class="d-flex justify-content-center align-items-center">
          <a href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </figure>
        <figure class="d-flex justify-content-center align-items-center">
          <a href="#">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
        </figure>
      </div>
      <div class="text-center">
        <h5 class="mb-2">
          Copyright &copy; <span id="year">{{ currentYear }}</span> Appific By
          Evonicmedia. All Rights Reserved.
        </h5>
      </div>
    </div>
    <button class="scrollToTopButton">
      <svg class="progress-ring" width="69" height="69">
        <circle
          stroke="#E85838"
          stroke-width="5"
          fill="transparent"
          r="30.5"
          cx="34.5"
          cy="34.5"
        ></circle>
        <circle
          class="progress-ring__circle"
          stroke="white"
          stroke-width="4"
          fill="transparent"
          r="30.5"
          cx="34.5"
          cy="34.5"
        />
      </svg>
      <span class="icon"></span>
    </button>
  </footer>
</template>
