<script setup>
import CountUp from "vue-countup-v3";
const { isModalVisible, toggle, toggleBubbleVisibility, popoutChatWindow } =
  useChatWoot();
</script>
<template>
  <section class="FAQ">
    <div class="container">
      <div
        class="d-flex justify-content-center align-items-center text-center flex-column gap-3"
        data-aos="fade-up"
      >
        <h2>Frequently Asked Questions</h2>
        <p class="w-75">
          Have questions? We have answers! Explore our frequently asked
          questions to find out more about our services and how we can help you.
        </p>
      </div>
      <div class="row mt-lg-5">
        <div class="col-lg-7">
          <div class="accordion" id="accordionExample" data-aos="fade-up">
            <div class="accordion-item">
              <h4 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What services do you offer?
                  <i class="fa-solid fa-plus"></i>
                  <i class="fa-solid fa-minus"></i>
                </button>
              </h4>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <h5>
                    We offer a range of services including exclusive discounts,
                    local offers, and a user-friendly mobile app to help you
                    save on everyday purchases. Our mission is to connect you
                    with the best deals in your area.
                  </h5>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h4 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  How do I redeem discounts?
                  <i class="fa-solid fa-plus"></i>
                  <i class="fa-solid fa-minus"></i>
                </button>
              </h4>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <h5>
                    Redeeming discounts is easy! Simply browse our app or
                    website to find the deals you want, and follow the
                    instructions provided. Most discounts can be redeemed by
                    presenting a code at checkout or by clicking a link in our
                    app.
                  </h5>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h4 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Are there any fees associated with using your service?
                  <i class="fa-solid fa-plus"></i>
                  <i class="fa-solid fa-minus"></i>
                </button>
              </h4>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <h5>
                    No, our service is completely free to use! You can access
                    all discounts and offers without any hidden fees. We work
                    with local businesses to provide you with the best savings
                    possible.
                  </h5>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h4 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  How do I contact customer support?
                  <i class="fa-solid fa-plus"></i>
                  <i class="fa-solid fa-minus"></i>
                </button>
              </h4>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <h5>
                    You can reach our customer support team through the contact
                    form on our website or by emailing us directly. We are here
                    to assist you with any questions or concerns you may have.
                  </h5>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <a class="hover2" @click="toggle('open')">Chat Now</a>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <figure class="d-flex align-content-center h-100 flex-wrap">
            <img
              src="/images/index/FAQ_Img.webp"
              alt="FAQ_Img"
              data-aos="zoom-in-up"
            />
          </figure>
          <div
            class="d-flex align-items-center justify-content-center position-relative"
          >
            <div class="FAQ_Search d-flex gap-lg-4 gap-md-3 gap-2">
              <img src="/images/icon/Search.svg" alt="Search" />
              <p>Looking for? <span>Search!</span></p>
            </div>
            <div
              class="Payment d-flex align-items-center justify-content-center gap-lg-5 gap-md-3 gap-2"
            >
              <div>
                <p>Total Payment</p>
                <h5 class="d-flex">
                  $<count-up class="number" :end-val="1800">0</count-up>
                </h5>
              </div>
              <div>
                <NuxtLink to="/pricing" class="hover2">Pay Now</NuxtLink>
              </div>
            </div>
            <div class="credit">
              <i class="fa-regular fa-credit-card"></i>
            </div>
            <div class="home">
              <i class="fa-solid fa-house fa-xl"></i>
            </div>
            <div class="Dot_Lines position-absolute">
              <img src="/images/icon/dotedLine_FAQ.svg" alt="DotLine" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
