<script setup>
import CountUp from "vue-countup-v3";
</script>

<template>
  <section class="Hero">
    <div class="container">
      <div>
        <div class="Dots_lines position-relative">
          <img src="/images/icon/doted-line1.svg" alt="Dashed_Line" />
          <img src="/images/icon/doted-line2.svg" alt="Dashed_Line" />
        </div>
        <div
          class="d-flex align-items-center justify-content-center text-center flex-column"
          data-aos="fade-up"
        >
          <h1>Discover Incredible Local Discounts in Sri Lanka</h1>
          <p>
            Welcome to DiscountsLK, your ultimate destination for finding
            amazing local discounts right at your fingertips. Download our app
            today and start saving on your favorite stores within a 5KM radius!
          </p>
          <div class="d-flex">
            <form action="#" id="Subscribe-massage">
              <input
                class="Email me-2"
                name="Email"
                type="Email"
                placeholder="Enter your email for registration"
                required
                autocomplete="on"
              />
              <button class="hover2" type="submit">Submit</button>
            </form>
            <div id="Succes-box" class="validation"></div>
          </div>
        </div>
        <div
          class="d-flex align-items-center justify-content-center position-relative"
        >
          <div
            class="mobile_circle position-relative d-flex align-items-center justify-content-center"
          >
            <img
              data-aos="zoom-in-up"
              src="/images/index/Hero_Phone.webp"
              alt="Mobile_Images"
            />
            <img
              data-aos="zoom-in-up"
              data-aos-delay="200"
              src="/images/bg/circle.webp"
              alt="Circle_Images"
            />
          </div>
          <div
            data-aos="zoom-in"
            class="Price_1st d-flex flex-column gap-lg-4 gap-md-3 gap-2"
          >
            <div>
              <i class="fa-solid fa-circle-check fa-xl"></i>
            </div>
            <div>
              <p>Monthly</p>
              <span class="flex"
                >$<count-up
                  :end-val="2000"
                  class="number"
                  data-final-value="2864"
                ></count-up>
              </span>
            </div>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 40%"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            class="Price_2nd d-flex align-items-center justify-content-center gap-lg-3 gap-md-2 gap-2"
          >
            <div><i class="fa-solid fa-bolt fa-lg"></i></div>
            <div>
              <p>Minimum Premium</p>
              <span class="flex"
                >$<count-up class="number" :end-val="2500"></count-up
                >/Month</span
              >
            </div>
          </div>
          <div class="credit" data-aos="zoom-in" data-aos-delay="500">
            <i class="fa-regular fa-credit-card"></i>
          </div>
          <div class="home" data-aos="zoom-in" data-aos-delay="500">
            <i class="fa-solid fa-house fa-xl"></i>
          </div>
          <div class="paypal" data-aos="zoom-in">
            <i class="fa-brands fa-paypal fa-2xl"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="avater_Images">
      <div class="carver">
        <img src="/images/index/hero_corve.webp" alt="Carve" />
      </div>
      <div class="member">
        <div class="position-relative">
          <img src="/images/index/Hero_member-1.webp" alt="Hero_member" />
          <img src="/images/index/Hero_member-2.webp" alt="Hero_member" />
          <img src="/images/index/Hero_member-3.webp" alt="Hero_member" />
          <img src="/images/index/Hero_member-4.webp" alt="Hero_member" />
        </div>
        <p class="flex gap-1">
          Join Over <count-up class="number" :end-val="50000">0</count-up>+
          Members
        </p>
      </div>
    </div>
  </section>
  <!-- ======== End of 1.2. Hero section ========  -->
  <!-- ========  1.3. Advantages section ========  -->
  <section class="Advantages">
    <div class="container">
      <h2 data-aos="fade-up">Discover Local Discounts at Your Fingertips</h2>
      <p class="Advantages-p" data-aos="fade-up">
        With the DiscountsLK app, finding local discounts has never been easier.
        Search by category or location to unlock amazing savings!
      </p>
      <div class="position-relative">
        <img src="/images/icon/doted-line1.svg" alt="Dots_lines1" />
      </div>
      <div class="position-relative m-0">
        <img src="/images/icon/doted-line2.svg" alt="Dots_lines2" />
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-5">
          <div
            class="d-flex gap-lg-4 gap-md-3 gap-2 justify-content-center"
            data-aos="fade-up"
          >
            <div>
              <figure>
                <img src="/images/icon/setting.svg" alt="Setting" />
              </figure>
            </div>
            <div class="d-flex flex-column gap-lg-3 gap-2">
              <h3>Local Discounts</h3>
              <p>
                Easily discover discounts within a 5KM radius of your location.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-5">
          <div
            class="d-flex gap-lg-4 gap-md-3 gap-2 justify-content-center"
            data-aos="fade-up"
          >
            <div>
              <figure>
                <img src="/images/icon/download.svg" alt="download" />
              </figure>
            </div>
            <div class="d-flex flex-column gap-lg-3 gap-2">
              <h3>Smart Search</h3>
              <p>
                Search discounts by category, product, or store for tailored
                savings.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-5">
          <div
            class="d-flex gap-lg-4 gap-md-3 gap-2 justify-content-center"
            data-aos="fade-up"
          >
            <div>
              <figure>
                <img src="/images/icon/friends.svg" alt="friends" />
              </figure>
            </div>
            <div class="d-flex flex-column gap-lg-3 gap-2">
              <h3>User Friendly</h3>
              <p>
                Enjoy an easy-to-use platform designed for seamless navigation.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-5">
          <div
            class="d-flex gap-lg-4 gap-md-3 gap-2 justify-content-center"
            data-aos="fade-up"
          >
            <div>
              <figure>
                <img src="/images/icon/support.svg" alt="support" />
              </figure>
            </div>
            <div class="d-flex flex-column gap-lg-3 gap-2">
              <h3>24hrs Chat Support</h3>
              <p>
                Our team is available 24/7 to assist with any questions or
                issues.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="d-flex align-items-center justify-content-center mt-2 gap-lg-4 gap-3"
        data-aos="fade-up"
      >
        <div class="d-flex"><a href="#" class="hover1">Download</a></div>
        <div class="d-flex">
          <NuxtLink to="/features" class="hover2">Learn More</NuxtLink>
        </div>
      </div>
    </div>
  </section>
  <!-- ======== End of 1.3. Advantages section ========  -->
  <!-- ======== 1.4. Partners section ========  -->
  <Slider />
  <!-- ======== End of 1.4. Partners section ========  -->
  <!-- ======== 1.5. Services section ========  -->
  <Services />
  <!-- ======== End of 1.5. Services section ========  -->
  <!-- ========  1.6. Stats section ========  -->
  <section class="Stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-5 mb-lg-0 mb-md-0 mb-2">
          <div class="position-relative">
            <figure>
              <img
                data-aos="zoom-in-up"
                src="/images/index/Stats_Phone.webp"
                alt="Mobile"
              />
            </figure>
            <img src="/images/icon/dotedLine_Stats.svg" alt="Dot_Line" />
            <img
              data-aos="zoom-in-up"
              data-aos-delay="200"
              src="/images/bg/circle.webp"
              alt="Circle_Images"
            />
          </div>
        </div>
        <div class="col-lg-6 col-md-7 mt-lg-0 mt-md-0 mt-5">
          <div class="d-flex flex-column gap-lg-4 gap-3" data-aos="fade-up">
            <h2>Unlock Local Discounts Today!</h2>
            <p class="m-0">
              Discover incredible local discounts! Whether you're shopping,
              dining, or exploring, enjoy exclusive savings in your community.
              Find deals across your favorite spots and make the most of what’s
              around you without breaking the bank.
            </p>
            <p class="m-0">
              From timeless classics to new experiences, there’s something for
              everyone. Don't miss out—start unlocking your local deals today!
            </p>
            <hr />
            <div class="d-flex gap-lg-5 gap-md-4 gap-3">
              <div>
                <h2 class="flex">
                  <count-up class="number" :end-val="135">0</count-up>M+
                </h2>
                <p>App Downloads</p>
              </div>
              <div>
                <h2 class="flex">
                  <count-up class="number" :end-val="200">0</count-up>M+
                </h2>
                <p>User Reviews</p>
              </div>
            </div>
            <div class="d-flex gap-lg-4 gap-md-4 gap-3">
              <div class="d-flex">
                <a href="#" class="hover1">Download</a>
              </div>
              <div class="d-flex">
                <NuxtLink to="about" class="hover2">Learn More</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ======== End of 1.6. Stats section ========  -->
  <!-- ======== 1.7. Benefits section ========  -->
  <section class="Benefits">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <div>
            <h2 data-aos="fade-up">Solve Your Problem With DiscountsLK App</h2>
            <div class="d-flex flex-column gap-lg-4 gap-3 me-0">
              <div
                class="d-flex gap-lg-4 gap-3 Benefits_Card"
                data-aos="fade-up"
              >
                <div>
                  <img src="/images/icon/Home_Icon.png" alt="Benefits_Icon1" />
                </div>
                <div class="d-flex flex-column gap-3">
                  <h3>Search Broad Categories</h3>
                  <p>
                    Explore a wide range of categories to find exactly what you
                    need. Our comprehensive search makes it easy to discover
                    great options.
                  </p>
                </div>
              </div>
              <div
                class="d-flex gap-lg-4 gap-3 Benefits_Card"
                data-aos="fade-up"
              >
                <div>
                  <img
                    src="/images/icon/BenefitsIcon2.svg"
                    alt="Benefits_Icon1"
                  />
                </div>
                <div class="d-flex flex-column gap-3">
                  <h3>Money Saving Features</h3>
                  <p>
                    Take advantage of features designed to help you save. Enjoy
                    exclusive discounts that ensure you get the best deals.
                  </p>
                </div>
              </div>
              <div
                class="d-flex gap-lg-4 gap-3 Benefits_Card"
                data-aos="fade-up"
              >
                <div>
                  <img
                    src="/images/icon/BenefitsIcon3.svg"
                    alt="Benefits_Icon1"
                  />
                </div>
                <div class="d-flex flex-column gap-3">
                  <h3>Away From Real Estate Agents</h3>
                  <p>
                    Enjoy a hassle-free experience by connecting directly with
                    discounts. Say goodbye to agents and navigate your options
                    independently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div
            class="position-relative d-flex align-items-center justify-content-center"
          >
            <div
              class="Price d-flex flex-column gap-lg-4 gap-md-3 gap-2"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <div class="d-flex flex-column">
                <div><i class="fa-solid fa-circle-check fa-xl"></i></div>
                <span class="Small_text mt-lg-3 mt-md-2 mt-2">Save upto</span>
              </div>
              <div class="d-flex flex-column">
                <span class="flex mb-1"
                  >$<count-up class="number" end-val="2864">0</count-up></span
                >
                <span class="Small_text">to Find your Smart Home</span>
              </div>
            </div>
            <div class="credit" data-aos="zoom-in" data-aos-delay="500">
              <i class="fa-regular fa-credit-card"></i>
            </div>
            <div class="home" data-aos="zoom-in" data-aos-delay="500">
              <i class="fa-solid fa-house fa-xl"></i>
            </div>
            <img
              data-aos="zoom-in-up"
              data-aos-delay="200"
              src="/images/bg/circle.webp"
              alt="Circle_Images"
            />
            <img
              data-aos="zoom-in-up"
              src="/images/index/Benefits_Mobile.webp"
              alt="Mobile"
            />
            <img src="/images/icon/doted-line2.svg" alt="Dot_Line" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ======== End of 1.7. Benefits section ========  -->
  <!-- ======== 1.8. Rating section ========  -->
  <Rating />
  <!-- ======== End of 1.8. Rating section ========  -->
  <!-- ======== 1.9. About_App section ========  -->
  <Swiper />
  <!-- ======== End of 1.9. About_App section ========  -->
  <!-- ======== 1.10. GetApp section ========  -->
  <GetApp />
  <!-- ======== End of 1.10. GetApp section ========  -->
  <div class="Testimonial_Plan_bg">
    <!-- ======== 1.11. Testimonial section ========  -->
    <!-- <Testimonial /> -->
    <!-- ======== End of 1.11. Testimonial section ========  -->
    <!-- ======== 1.12. Plan section ========  -->
    <Plan />
    <!-- ======== End of 1.12. Plan section ========  -->
  </div>
  <!-- ======== 1.13. FAQ section ========  -->
  <FQA />
  <!-- ======== End of 1.13. FAQ section ========  -->
  <!-- ======== 1.14. Community section ========  -->
  <Community />
  <!-- ======== End of 1.14. Community section ========  -->
  <!-- ======== 1.15. Register section ========  -->
  <Register />
</template>
