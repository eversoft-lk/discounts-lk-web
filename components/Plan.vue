<script setup>
import CountUp from "vue-countup-v3";
</script>
<template>
  <section class="Plan">
    <div class="container">
      <h2 class="text-center" data-aos="fade-up">
        Simple Pricing For Everyone
      </h2>
      <p class="Plan-p" data-aos="fade-up">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div class="row gap-lg-0 gap-md-0 gap-4 p-3">
        <div class="col-lg-4 col-md-4 p-0 py-md-5 py-0 d-flex">
          <div
            class="plan-Card d-flex flex-column gap-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="mt-0 d-flex position-relative">
              <h3>Basic Plan</h3>
            </div>
            <div class="d-flex flex-column gap-lg-4 gap-3 mt-5">
              <div class="d-flex align-items-center">
                <h2 class="d-flex">
                  $<count-up class="number" :end-val="24">0</count-up>
                </h2>
                <p class="pt-lg-2 pt-md-2 pt-1">&nbsp; /Per Month</p>
              </div>
            </div>
            <hr />
            <div class="d-flex flex-column pt-md-3 pt-3 gap-lg-3 gap-3">
              <div class="d-flex gap-2">
                <i class="fa-solid fa-check"></i>
                <p>SEO Audits</p>
              </div>
              <div class="d-flex gap-2">
                <i class="fa-solid fa-check"></i>
                <p>SEO Managements</p>
              </div>
              <div class="d-flex gap-2">
                <i class="fa-solid fa-check"></i>
                <p>Digital Marketing</p>
              </div>
              <div class="d-flex gap-2">
                <i class="fa-solid fa-check"></i>
                <p>Site Managment</p>
              </div>
            </div>
            <div class="mt-4">
              <NuxtLink class="hover1" to="/pricing">Get Started</NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 p-0 d-flex">
          <div
            class="plan-Card d-flex flex-column gap-md-4 gap-3"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <div class="mt-0 d-flex position-relative">
              <h3>Premium</h3>
            </div>
            <div class="d-flex flex-column gap-md-4 gap-3 mt-5">
              <div class="d-flex align-items-center pb-lg-3 mt-md-4">
                <h2 class="d-flex">
                  $<count-up class="number" :end-val="35">0</count-up>
                </h2>
                <p class="pt-lg-2 pt-md-2 pt-1">&nbsp; /Per Month</p>
              </div>
            </div>
            <hr />
            <div class="d-flex flex-column gap-md-4 gap-3">
              <div class="d-flex gap-2">
                <i class="fa-solid fa-check"></i>
                <p>SEO Audits</p>
              </div>
              <div class="d-flex gap-2">
                <i class="fa-solid fa-check"></i>
                <p>SEO Managements</p>
              </div>
              <div class="d-flex gap-2">
                <i class="fa-solid fa-check"></i>
                <p>Digital Marketing</p>
              </div>
              <div class="d-flex gap-2">
                <i class="fa-solid fa-check"></i>
                <p>Site Managment</p>
              </div>
            </div>
            <div class="mt-4">
              <NuxtLink class="hover1" to="/pricing">Get Started</NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 p-0 py-md-5 py-0 d-flex">
          <div
            class="plan-Card d-flex flex-column gap-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="mt-0 d-flex position-relative">
              <h3>Standard</h3>
            </div>
            <div class="d-flex flex-column gap-lg-4 gap-3 mt-5">
              <div class="d-flex align-items-center">
                <h2 class="d-flex">
                  $<count-up class="number" :end-val="50">0</count-up>
                </h2>
                <p class="pt-lg-2 pt-md-2 pt-1">&nbsp; /Per Month</p>
              </div>
            </div>
            <hr />
            <div class="d-flex flex-column pt-md-3 pt-3 gap-lg-3 gap-3">
              <div class="d-flex gap-2">
                <i class="fa-solid fa-check"></i>
                <p>SEO Audits</p>
              </div>
              <div class="d-flex gap-2">
                <i class="fa-solid fa-check"></i>
                <p>SEO Managements</p>
              </div>
              <div class="d-flex gap-2">
                <i class="fa-solid fa-check"></i>
                <p>Digital Marketing</p>
              </div>
              <div class="d-flex gap-2">
                <i class="fa-solid fa-check"></i>
                <p>Site Managment</p>
              </div>
            </div>
            <div class="mt-4">
              <NuxtLink class="hover1" to="/pricing">Get Started</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>