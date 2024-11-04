<script setup>
import CountUp from "vue-countup-v3";
</script>
<template>
  <section class="About_Hero">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="d-flex flex-column gap-3 pe-lg-3">
            <div class="d-flex flex-column pe-lg-5" data-aos="fade-up">
              <h2>DiscountsLK</h2>
              <h4>About</h4>
              <p class="pe-lg-5">
                Welcome to DiscountsLK, Sri Lanka’s top platform for local
                savings! Our mission is to connect you with unbeatable discounts
                from nearby stores, restaurants, and services—all within a 5KM
                radius. With just a few taps, you can discover exclusive deals
                and start saving.
              </p>
              <p class="mt-3 pe-lg-5">
                <b>Why Choose DiscountsLK?</b>
                Finding deals has never been easier. Search by category or
                location to access fantastic offers tailored to your needs.
                Whether you're dining, shopping, or exploring new experiences,
                DiscountsLK makes it easy to enjoy the best of Sri Lanka while
                saving on what you love most.
              </p>
            </div>
            <hr data-aos="fade-up" />
            <div
              class="d-flex gap-5 justify-content-lg-start justify-content-center mb-lg-0 mb-3"
              data-aos="fade-up"
            >
              <div class="d-flex flex-column text-center gap-2">
                <h2 class="d-flex">
                  <count-up class="number" :end-val="120"></count-up>M+
                </h2>
                <p>App Downloads</p>
              </div>
              <div class="d-flex flex-column text-center gap-2">
                <h2 class="d-flex">
                  <count-up class="number" :end-val="110"></count-up>M+
                </h2>
                <p>User Reviews</p>
              </div>
            </div>
            <div
              class="d-flex gap-sm-4 gap-2 mt-lg-4 justify-content-lg-start justify-content-center"
            >
              <div>
                <a href="#" class="hover1">Download</a>
              </div>
              <div>
                <NuxtLink to="/contact" class="hover2">Contact Us</NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <figure
            class="w-100 d-flex justify-content-center"
            data-aos="zoom-in-up"
            data-aos-delay="300"
          >
            <img
              src="/images/About/Benefits_Mobile.webp"
              alt="About_Mobile"
              data-aos="zoom-in-up"
            />
          </figure>
          <div
            class="d-flex align-items-center justify-content-center position-relative"
          >
            <div
              class="Price_1st d-flex flex-column gap-3"
              data-aos="zoom-in-up"
              data-aos-delay="200"
            >
              <div>
                <i class="fa-solid fa-circle-check fa-xl"></i>
              </div>
              <div>
                <p>save upto</p>
                <h2 class="d-flex">
                  $<count-up class="number" :end-val="2864">0</count-up>
                </h2>
                <p>to Find your Smart Home</p>
              </div>
            </div>
            <div
              class="credit position-absolute"
              data-aos="zoom-in-up"
              data-aos-delay="200"
            >
              <i class="fa-regular fa-credit-card"></i>
            </div>
            <div
              class="home position-absolute"
              data-aos="zoom-in-up"
              data-aos-delay="200"
            >
              <i class="fa-solid fa-house"></i>
            </div>
            <div class="Dotted_Line position-absolute">
              <img src="/images/icon/dotedLine_Stats.svg" alt="dotedLine" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="avater_Images mt-lg-4 mt-3">
      <div class="member">
        <div class="position-relative">
          <img src="/images/About/Hero_member-1.webp" alt="Hero_member" />
          <img src="/images/About/Hero_member-2.webp" alt="Hero_member" />
          <img src="/images/About/Hero_member-3.webp" alt="Hero_member" />
          <img src="/images/About/Hero_member-4.webp" alt="Hero_member" />
        </div>
        <p class="d-flex">
          Join Over <count-up class="number ms-1" :end-val="4400">0</count-up>+
          Members
        </p>
      </div>
    </div>
  </section>
  <!-- ======== End of 2.1. About_Hero section ========  -->
  <!-- ======== 1.4. Partners section ========  -->
  <Slider />
  <!-- ======== End of 1.4. Partners section ========  -->
   
  <!-- ======== 1.5. Services section ========  -->
  <section class="Services About_Services">
    <div class="container">
      <h2 data-aos="fade-up">Exclusive Offers with Sponsored Discounts</h2>
      <p class="Services_p" data-aos="fade-up">
        Our Sponsored Discounts feature highlights top deals from local
        businesses, so you never miss out on the latest offers. We curate the
        best discounts for easy access, helping you stay ahead of every exciting
        promotion right at your fingertips.
      </p>
      <div class="row d-flex gap-md-0 gap-4 mt-lg-5">
        <div class="col-lg-4 col-md-4 d-flex">
          <div class="Services_Card" data-aos="flip-left">
            <div class="mb-2">
              <img src="/images/icon/Easily_Manage.png" alt="Manage" />
            </div>
            <h4>Boost Business Visibility</h4>
            <p>
              For businesses, reach more customers and drive foot traffic with
              exclusive offers.
            </p>
            <div class="mt-2">
              <a class="hover4" href="Features.html">Learn More</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 d-flex">
          <div class="Services_Card" data-aos="flip-left">
            <div class="mb-2">
              <img src="/images/icon/Find_Easily.svg" alt="Find_Easily" />
            </div>
            <h4>Quick Local Savings</h4>
            <p>
              Easily find exclusive deals within a 5KM radius, saving you time
              and money.
            </p>
            <div class="mt-2">
              <a class="hover4" href="Features.html">Learn More</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 d-flex">
          <div class="Services_Card" data-aos="flip-left">
            <div class="mb-2">
              <img src="/images/icon/Quick_Messege.svg" alt="Quick_Messege" />
            </div>
            <h4>Top Deals Highlighted</h4>
            <p>
              Sponsored Discounts showcase the best local offers, handpicked for
              you.
            </p>
            <div class="mt-2">
              <a class="hover4" href="Features.html">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ======== End of 1.5. Services section ========  -->
  <!-- ======== 1.8. Rating section ========  -->
  <Rating />
  <!-- ======== End of 1.8. Rating section ========  -->
  <!-- ======== 1.10. GetApp section ========  -->
  <GetApp />
  <!-- ======== End of 1.10. GetApp section ========  -->
  <!-- ======== 2.2. Team section ========  -->
  <section class="Team">
    <div class="container">
      <div class="row">
        <div class="text-center mb-md-5" data-aos="fade-up">
          <h2>Our Team</h2>
          <p class="mt-3">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
          <div
            class="d-flex justify-content-center align-items-center flex-column position-relative"
            data-aos="flip-left"
          >
            <figure class="w-100">
              <img
                class="w-100"
                src="/images/About/Team_Member_1.webp"
                alt="Team_Member"
              />
            </figure>
            <div
              class="p-lg-4 p-3 position-absolute bottom-0 w-100 text-center d-flex flex-column"
            >
              <h4>Peter</h4>
              <p>Senior Developer</p>
              <div class="Team_social-icons d-flex justify-content-center">
                <a href="#" target="_blank"
                  ><i class="fab fa-facebook-f"></i
                ></a>
                <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="#" target="_blank"
                  ><i class="fab fa-linkedin-in"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
          <div
            class="d-flex justify-content-center align-items-center flex-column position-relative"
            data-aos="flip-left"
          >
            <figure class="w-100">
              <img
                class="w-100"
                src="/images/About/Team_Member_2.webp"
                alt="Team_Member"
              />
            </figure>
            <div
              class="p-lg-4 p-3 position-absolute bottom-0 w-100 text-center d-flex flex-column"
            >
              <h4>Walker</h4>
              <p>Senior Business Advisor</p>
              <div class="Team_social-icons d-flex justify-content-center">
                <a href="#" target="_blank"
                  ><i class="fab fa-facebook-f"></i
                ></a>
                <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="#" target="_blank"
                  ><i class="fab fa-linkedin-in"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
          <div
            class="d-flex justify-content-center align-items-center flex-column position-relative"
            data-aos="flip-left"
          >
            <figure class="w-100">
              <img
                class="w-100"
                src="/images/About/Team_Member_3.webp"
                alt="Team_Member"
              />
            </figure>
            <div
              class="p-lg-4 p-3 position-absolute bottom-0 w-100 text-center d-flex flex-column"
            >
              <h4>Peter</h4>
              <p>Quality Assurnce</p>
              <div class="Team_social-icons d-flex justify-content-center">
                <a href="#" target="_blank"
                  ><i class="fab fa-facebook-f"></i
                ></a>
                <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="#" target="_blank"
                  ><i class="fab fa-linkedin-in"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
          <div
            class="d-flex justify-content-center align-items-center flex-column position-relative"
            data-aos="flip-left"
          >
            <figure class="w-100">
              <img
                class="w-100"
                src="/images/About/Team_Member_4.webp"
                alt="Team_Member"
              />
            </figure>
            <div
              class="p-lg-4 p-3 position-absolute bottom-0 w-100 text-center d-flex flex-column"
            >
              <h4>Devako</h4>
              <p>Designer</p>
              <div class="Team_social-icons d-flex justify-content-center">
                <a href="#" target="_blank"
                  ><i class="fab fa-facebook-f"></i
                ></a>
                <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="#" target="_blank"
                  ><i class="fab fa-linkedin-in"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ======== End of 2.2. Team section ========  -->
  <!-- ======== 1.14. Community section ========  -->
  <Community />
  <!-- ======== End of 1.14. Community section ========  -->
  <!-- ======== 1.15. Register section ========  -->
  <Register />
</template>
