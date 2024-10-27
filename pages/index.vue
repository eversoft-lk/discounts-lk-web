<script setup></script>

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
          <h1>Smart Home Application</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lectus aliquam facilisis
            nunc ultricies enim nunc elementum vulputate.
          </p>
          <div class="d-flex">
            <form action="#" id="Subscribe-massage">
              <input
                class="Email"
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
              <span
                >$<span class="number" data-final-value="2864">0</span>
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
              <span
                >$<span class="number" data-final-value="2864">0</span
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
        <p>
          Join Over <span class="number" data-final-value="4400">0</span>+
          Members
        </p>
      </div>
    </div>
  </section>
  <!-- ======== End of 1.2. Hero section ========  -->
  <!-- ========  1.3. Advantages section ========  -->
  <section class="Advantages">
    <div class="container">
      <h2 data-aos="fade-up">Appific Makes Your Life Easy</h2>
      <p class="Advantages-p" data-aos="fade-up">
        Lorem ipsum dolor sit amet consectetur. Tincidunt nunc ac phasellus
        amet. Risus est faucibus placerat sed vestibulum orci in vulputate
        pellentesque.
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
              <h3>Fully Functional</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Tincidunt nunc ac
                phasellus amet. Risus est faucibus placerat sed vestibulum orci
                in vulputate pellentesque.
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
              <h3>Download Anywhere</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Tincidunt nunc ac
                phasellus amet. Risus est faucibus placerat sed vestibulum orci
                in vulputate pellentesque.
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
                Lorem ipsum dolor sit amet consectetur. Tincidunt nunc ac
                phasellus amet. Risus est faucibus placerat sed vestibulum orci
                in vulputate pellentesque.
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
                Lorem ipsum dolor sit amet consectetur. Tincidunt nunc ac
                phasellus amet. Risus est faucibus placerat sed vestibulum orci
                in vulputate pellentesque.
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
          <a href="Features.html" class="hover2">Learn More</a>
        </div>
      </div>
    </div>
  </section>
  <!-- ======== End of 1.3. Advantages section ========  -->
  <!-- ======== 1.4. Partners section ========  -->
  <section class="Partners">
    <h2 class="d-none">Lorem, ipsum dolor</h2>
    <div class="container">
      <hr />
      <div class="Partners_Slider" data-aos="zoom-in">
        <div>
          <a href="#"
            ><img src="/images/index/Partners_logo1.webp" alt="logo1"
          /></a>
        </div>
        <div>
          <a href="#"
            ><img src="/images/index/Partners_logo2.webp" alt="logo2"
          /></a>
        </div>
        <div>
          <a href="#"
            ><img src="/images/index/Partners_logo3.webp" alt="logo3"
          /></a>
        </div>
        <div>
          <a href="#"
            ><img src="/images/index/Partners_logo4.webp" alt="logo4"
          /></a>
        </div>
        <div>
          <a href="#"
            ><img src="/images/index/Partners_logo5.webp" alt="logo5"
          /></a>
        </div>
        <div>
          <a href="#"
            ><img src="/images/index/Partners_logo6.webp" alt="logo6"
          /></a>
        </div>
        <div>
          <a href="#"
            ><img src="/images/index/Partners_logo1.webp" alt="logo7"
          /></a>
        </div>
        <div>
          <a href="#"
            ><img src="/images/index/Partners_logo2.webp" alt="logo8"
          /></a>
        </div>
        <div>
          <a href="#"
            ><img src="/images/index/Partners_logo3.webp" alt="logo9"
          /></a>
        </div>
        <div>
          <a href="#"
            ><img src="/images/index/Partners_logo4.webp" alt="logo10"
          /></a>
        </div>
        <div>
          <a href="#"
            ><img src="/images/index/Partners_logo5.webp" alt="logo11"
          /></a>
        </div>
        <div>
          <a href="#"
            ><img src="/images/index/Partners_logo6.webp" alt="logo12"
          /></a>
        </div>
      </div>
      <hr />
    </div>
  </section>
  <!-- ======== End of 1.4. Partners section ========  -->
  <!-- ======== 1.5. Services section ========  -->
  <section class="Services">
    <div class="container">
      <h2 data-aos="fade-up">How Can We Help You with Appific</h2>
      <p class="Services_p" data-aos="fade-up">
        Lorem ipsum dolor sit amet consectetur. Tincidunt nunc ac phasellus
        amet. Risus est faucibus placerat sed vestibulum orci in vulputate
        pellentesque.
      </p>
      <div class="row d-flex gap-md-0 gap-4 mt-lg-5">
        <div class="col-lg-4 col-md-4 d-flex">
          <div class="Services_Card" data-aos="flip-left">
            <div class="mb-2">
              <img src="/images/icon/Easily_Manage.png" alt="Manage" />
            </div>
            <h4>Easily Manage</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tincidunt nunc ac
              phasellus amet. Risus est faucibus placerat sed vestibulum.
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
            <h4>Find Home Easily</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tincidunt nunc ac
              phasellus amet. Risus est faucibus placerat sed vestibulum.
            </p>
            <div class="mt-2">
              <a class="hover4" href="Features.html">Learn More</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 d-flex">
          <div class="Services_Card" data-aos="flip-left">
            <div class="mb-2">
              <img
                src="/images/icon/Quick_Messege.svg"
                alt="Quick_Messege"
              />
            </div>
            <h4>Quick Messaging</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tincidunt nunc ac
              phasellus amet. Risus est faucibus placerat sed vestibulum.
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
            <h2>You Can Find Your Sweet Home Hassle Free.</h2>
            <p class="m-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took.
            </p>
            <p class="m-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <hr />
            <div class="d-flex gap-lg-5 gap-md-4 gap-3">
              <div>
                <h2><span class="number" data-final-value="135">0</span>M+</h2>
                <p>App Downloads</p>
              </div>
              <div>
                <h2><span class="number" data-final-value="200">0</span>M+</h2>
                <p>User Reviews</p>
              </div>
            </div>
            <div class="d-flex gap-lg-4 gap-md-4 gap-3">
              <div class="d-flex">
                <a href="#" class="hover1">Download</a>
              </div>
              <div class="d-flex">
                <a href="About.html" class="hover2">Learn More</a>
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
            <h2 data-aos="fade-up">
              Solve Your Problem With Appific Home Finder
            </h2>
            <div class="d-flex flex-column gap-lg-4 gap-3 me-0">
              <div
                class="d-flex gap-lg-4 gap-3 Benefits_Card"
                data-aos="fade-up"
              >
                <div>
                  <img
                    src="/images/icon/Home_Icon.png"
                    alt="Benefits_Icon1"
                  />
                </div>
                <div class="d-flex flex-column gap-3">
                  <h3>Search Broad Categories</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever.
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever.
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever.
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
                <span class="mb-1"
                  >$<span class="number" data-final-value="2864">0</span></span
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
  <section class="Rating">
    <div class="container">
      <div class="d-flex justify-content-around align-items-center">
        <div
          class="d-flex flex-column align-items-center justify-content-center gap-lg-3 gap-md-3 gap-2"
          data-aos="fade-up"
        >
          <h1><span class="number" data-final-value="162">0</span>+</h1>
          <p>App Downloads</p>
        </div>
        <hr />
        <div
          class="d-flex flex-column align-items-center justify-content-center gap-lg-3 gap-md-3 gap-2"
          data-aos="fade-up"
        >
          <h1><span class="number" data-final-value="182">0</span>+</h1>
          <p>Satisfied Clients</p>
        </div>
        <hr />
        <div
          class="d-flex flex-column align-items-center justify-content-center gap-lg-3 gap-md-3 gap-2"
          data-aos="fade-up"
        >
          <h1><span class="number" data-final-value="188">0</span>+</h1>
          <p>Brands Joined</p>
        </div>
        <hr />
        <div
          class="d-flex flex-column align-items-center justify-content-center gap-lg-3 gap-md-3 gap-2"
          data-aos="fade-up"
        >
          <h1><span class="number" data-final-value="166">0</span>+</h1>
          <p>Successful Campaigns</p>
        </div>
      </div>
    </div>
  </section>
  <!-- ======== End of 1.8. Rating section ========  -->
  <!-- ======== 1.9. About_App section ========  -->
  <section class="About_App">
    <div
      class="text-center d-flex align-items-center flex-column"
      data-aos="fade-up"
    >
      <h2 class="mb-3 w-75">What We Make</h2>
      <p class="w-75 m-sm-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
    <div class="About_App_Slider">
      <div class="d-flex justify-content-around">
        <figure>
          <img
            src="/images/index/About_App_img1.webp"
            alt="About_App_img1"
            data-aos="flip-left"
          />
        </figure>
        <figure>
          <img
            src="/images/index/About_App_img2.webp"
            alt="About_App_img2"
            data-aos="flip-left"
          />
        </figure>
        <figure>
          <img
            src="/images/index/About_App_img3.webp"
            alt="About_App_img3"
            data-aos="flip-left"
          />
        </figure>
        <figure>
          <img
            src="/images/index/About_App_img4.webp"
            alt="About_App_img4"
            data-aos="flip-left"
          />
        </figure>
        <figure>
          <img
            src="/images/index/About_App_img5.webp"
            alt="About_App_img5"
            data-aos="flip-left"
          />
        </figure>
      </div>
      <div class="d-flex justify-content-around">
        <figure>
          <img
            src="/images/index/About_App_img1.webp"
            alt="About_App_img6"
            data-aos="flip-left"
          />
        </figure>
        <figure>
          <img
            src="/images/index/About_App_img2.webp"
            alt="About_App_img7"
            data-aos="flip-left"
          />
        </figure>
        <figure>
          <img
            src="/images/index/About_App_img3.webp"
            alt="About_App_img8"
            data-aos="flip-left"
          />
        </figure>
        <figure>
          <img
            src="/images/index/About_App_img4.webp"
            alt="About_App_img9"
            data-aos="flip-left"
          />
        </figure>
        <figure>
          <img
            src="/images/index/About_App_img5.webp"
            alt="About_App_img10"
            data-aos="flip-left"
          />
        </figure>
      </div>
      <div class="d-flex justify-content-around">
        <figure>
          <img
            src="/images/index/About_App_img1.webp"
            alt="About_App_img11"
            data-aos="flip-left"
          />
        </figure>
        <figure>
          <img
            src="/images/index/About_App_img2.webp"
            alt="About_App_img12"
            data-aos="flip-left"
          />
        </figure>
        <figure>
          <img
            src="/images/index/About_App_img3.webp"
            alt="About_App_img13"
            data-aos="flip-left"
          />
        </figure>
        <figure>
          <img
            src="/images/index/About_App_img4.webp"
            alt="About_App_img14"
            data-aos="flip-left"
          />
        </figure>
        <figure>
          <img
            src="/images/index/About_App_img5.webp"
            alt="About_App_img15"
            data-aos="flip-left"
          />
        </figure>
      </div>
    </div>
  </section>
  <!-- ======== End of 1.9. About_App section ========  -->
  <!-- ======== 1.10. GetApp section ========  -->
  <section class="GetApp">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 position-relative">
          <div class="GetApp_Mobiles">
            <img
              data-aos="zoom-in-up"
              data-aos-delay="200"
              src="/images/index/GetApp_Mobile1.webp"
              alt="GetApp_Mobile1"
            />
            <img
              data-aos="zoom-in-up"
              data-aos-delay="200"
              src="/images/index/GetApp_Mobile2.webp"
              alt="GetApp_Mobile2"
            />
            <img
              data-aos="zoom-in-up"
              data-aos-delay="500"
              src="/images/bg/GetApp_BG.webp"
              alt="GetApp_Circle"
            />
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div data-aos="fade-up">
            <h1>Download Latest Version Of The App From</h1>
            <p class="GetApp_P">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took.
            </p>
            <div
              class="d-flex gap-lg-4 gap-3 justify-content-md-start justify-content-center"
            >
              <a href="#">
                <div>
                  <div
                    class="d-flex Social align-items-center gap-2 hover2 w-100"
                  >
                    <div><i class="fa-brands fa-google-play"></i></div>
                    <div>
                      <p>GET IN ON</p>
                      <h5>Google Play</h5>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div>
                  <div class="d-flex align-items-center gap-2 hover2 w-100">
                    <div><i class="fa-brands fa-apple"></i></div>
                    <div>
                      <p>Download on the</p>
                      <h5>App Store</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ======== End of 1.10. GetApp section ========  -->
  <div class="Testimonial_Plan_bg">
    <!-- ======== 1.11. Testimonial section ========  -->
    <section class="Testimonials">
      <div class="Dots_lines position-relative">
        <img src="/images/icon/doted-line1.svg" alt="Dashed_Line_left" />
        <img src="/images/icon/doted-line2.svg" alt="Dashed_Line_Right" />
      </div>
      <div class="container">
        <div
          class="text-center d-flex align-items-center flex-column"
          data-aos="fade-up"
        >
          <h2 class="mb-lg-4 mb-3 w-75">Testimonial</h2>
          <p class="w-75">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div
          class="images-container"
          id="imagesContainer"
          data-aos="fade-up"
          data-aos-delay="400"
        ></div>
        <div
          class="Testimonial_Slider"
          id="testimonialSlider"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div class="slide">
            <img src="/images/Slider/testimonial_1.webp" alt="Image" />
            <div class="stars">
              <i class="fa fa-star"></i><i class="fa fa-star"></i
              ><i class="fa fa-star"></i><i class="fa fa-star"></i
              ><i class="fa fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem accumsan sit quis
              lacus varius. Lectus quis mauris amet
            </p>
            <h3>Sophia</h3>
            <span>Software Engineer</span>
          </div>
          <div class="slide">
            <img src="/images/Slider/testimonial_2.webp" alt="Isabella" />
            <div class="stars">
              <i class="fa fa-star"></i><i class="fa fa-star"></i
              ><i class="fa fa-star"></i><i class="fa fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem accumsan sit quis
              lacus varius. Lectus quis mauris amet
            </p>
            <h3>Isabella</h3>
            <span>Data Analyst</span>
          </div>
          <div class="slide">
            <img src="/images/Slider/testimonial_3.webp" alt="Emma" />
            <div class="stars">
              <i class="fa fa-star"></i><i class="fa fa-star"></i
              ><i class="fa fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem accumsan sit quis
              lacus varius. Lectus quis mauris amet
            </p>
            <h3>Emma</h3>
            <span>UI/UX Designer</span>
          </div>
          <div class="slide">
            <img src="/images/Slider/testimonial_4.webp" alt="Ethan" />
            <div class="stars">
              <i class="fa fa-star"></i><i class="fa fa-star"></i
              ><i class="fa fa-star"></i><i class="fa fa-star"></i
              ><i class="fa fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem accumsan sit quis
              lacus varius. Lectus quis mauris amet
            </p>
            <h3>Ethan</h3>
            <span>DevOps Engineer</span>
          </div>
          <div class="slide">
            <img src="/images/Slider/testimonial_5.webp" alt="Olivia" />
            <div class="stars">
              <i class="fa fa-star"></i><i class="fa fa-star"></i
              ><i class="fa fa-star"></i><i class="fa fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem accumsan sit quis
              lacus varius. Lectus quis mauris amet
            </p>
            <h3>Olivia</h3>
            <span>Product Manager</span>
          </div>
          <div class="slide">
            <img src="/images/Slider/testimonial_6.webp" alt="Liam" />
            <div class="stars">
              <i class="fa fa-star"></i><i class="fa fa-star"></i
              ><i class="fa fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem accumsan sit quis
              lacus varius. Lectus quis mauris amet
            </p>
            <h3>Liam</h3>
            <span>Cloud Solutions Architect</span>
          </div>
          <div class="slide">
            <img src="/images/Slider/testimonial_7.webp" alt="Noah" />
            <div class="stars">
              <i class="fa fa-star"></i><i class="fa fa-star"></i
              ><i class="fa fa-star"></i><i class="fa fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem accumsan sit quis
              lacus varius. Lectus quis mauris amet
            </p>
            <h3>Noah</h3>
            <span>Cybersecurity Specialist</span>
          </div>
        </div>
        <div class="dots-container" id="dotsContainer" data-aos="fade-up"></div>
      </div>
    </section>
    <!-- ======== End of 1.11. Testimonial section ========  -->
    <!-- ======== 1.12. Plan section ========  -->
    <section class="Plan">
      <div class="container">
        <h2 class="text-center" data-aos="fade-up">Price Plan</h2>
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
                  <h2>$<span class="number" data-final-value="24">0</span></h2>
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
                <a class="hover1" href="Pricing.html">Get Started</a>
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
                  <h2>$<span class="number" data-final-value="35">0</span></h2>
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
                <a class="hover1" href="Pricing.html">Get Started</a>
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
                  <h2>$<span class="number" data-final-value="50">0</span></h2>
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
                <a class="hover1" href="Pricing.html">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ======== End of 1.12. Plan section ========  -->
  </div>
  <!-- ======== 1.13. FAQ section ========  -->
  <section class="FAQ">
    <div class="container">
      <div
        class="d-flex justify-content-center align-items-center text-center flex-column gap-3"
        data-aos="fade-up"
      >
        <h2>Frequently Asked Questions</h2>
        <p class="w-75">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
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
                  Lorem ipsum dolor sit amet consectetur?
                  <i class="fa-solid fa-plus"></i
                  ><i class="fa-solid fa-minus"></i>
                </button>
              </h4>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. In vitae turpis massa sed elementum tempus egestas
                    sed. Diam in arcu cursus euismod. Dolor sed viverra ipsum
                    nunc aliquet bibendum enim facilisis gravida
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
                  Lorem ipsum dolor sit amet consectetur?
                  <i class="fa-solid fa-plus"></i
                  ><i class="fa-solid fa-minus"></i>
                </button>
              </h4>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. In vitae turpis massa sed elementum tempus egestas
                    sed. Diam in arcu cursus euismod. Dolor sed viverra ipsum
                    nunc aliquet bibendum enim facilisis gravida
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
                  Lorem ipsum dolor sit amet consectetur?
                  <i class="fa-solid fa-plus"></i
                  ><i class="fa-solid fa-minus"></i>
                </button>
              </h4>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. In vitae turpis massa sed elementum tempus egestas
                    sed. Diam in arcu cursus euismod. Dolor sed viverra ipsum
                    nunc aliquet bibendum enim facilisis gravida
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
                  Lorem ipsum dolor sit amet consectetur?
                  <i class="fa-solid fa-plus"></i
                  ><i class="fa-solid fa-minus"></i>
                </button>
              </h4>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. In vitae turpis massa sed elementum tempus egestas
                    sed. Diam in arcu cursus euismod. Dolor sed viverra ipsum
                    nunc aliquet bibendum enim facilisis
                  </h5>
                </div>
              </div>
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
              <p>House in <span>Loss Angles</span></p>
            </div>
            <div
              class="Payment d-flex align-items-center justify-content-center gap-lg-5 gap-md-3 gap-2"
            >
              <div>
                <p>Total Payment</p>
                <h5>$<span class="number" data-final-value="1800">0</span></h5>
              </div>
              <div>
                <a href="Pricing.html" class="hover2">Book Now</a>
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
  <!-- ======== End of 1.13. FAQ section ========  -->
  <!-- ======== 1.14. Community section ========  -->
  <section class="Community">
    <div
      class="d-flex justify-content-center align-items-center flex-column text-center gap-3 mb-lg-5 mb-4"
      data-aos="fade-up"
    >
      <h2>Join Our Global Community</h2>
      <p class="w-75 m-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
    <div class="mt-lg-4">
      <div
        class="d-flex justify-content-center align-items-center text-center gap-lg-5 gap-4 w-100 position-relative"
      >
        <div data-aos="flip-left">
          <h1><span class="number" data-final-value="200">0</span>M</h1>
          <h4>Customers</h4>
        </div>
        <div data-aos="flip-left">
          <h1><span class="number" data-final-value="188">0</span>M+</h1>
          <h4>Users</h4>
        </div>
        <div data-aos="flip-left">
          <h1><span class="number" data-final-value="22">0</span>K+</h1>
          <h4>Subscribers</h4>
        </div>
      </div>
    </div>
  </section>
  <!-- ======== End of 1.14. Community section ========  -->
  <!-- ======== 1.15. Register section ========  -->
  <section class="Register">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 position-relative">
          <figure class="position-absolute" data-aos="zoom-in-up">
            <img
              src="/images/index/Register_Img.webp"
              alt="Register_Img"
              data-aos="zoom-in-up"
              data-aos-delay="200"
            />
          </figure>
        </div>
        <div class="col-lg-7">
          <div data-aos="fade-up">
            <h1 class="mb-lg-4 mb-3">Get The App Register Now!</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took.
            </p>
            <form
              action="https://html-templates.evonicmedia.com/"
              id="Subscribe-massage2"
              class="w-100 d-flex justify-content-between gap-2 align-items-center"
            >
              <input
                class="w-75 border-0"
                name="Email"
                type="email"
                placeholder="Enter Your Email For Registration"
                required
                autocomplete="on"
              />
              <button class="hover2" type="submit">Submit</button>
            </form>
            <div id="Succes-box2" class="validation"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
