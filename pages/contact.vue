<template>
  <section class="Subpage_Hero">
    <div class="container">
      <div class="d-flex justify-content-center px-lg-5 px-md-4 px-3">
        <h2 data-aos="zoom-in-up">Contact Us</h2>
      </div>
    </div>
  </section>
  <!-- ======== FQA section ========  -->
  <FQA />
  <section class="Contact">
    <h2 class="d-none">Lorem, ipsum dolor</h2>
    <div class="container">
      <div class="row flex-lg-row flex-column-reverse">
        <div class="col-lg-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36692.198056712055!2d-122.45744662978882!3d37.77022795386011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1716969660518!5m2!1sen!2s"
            style="border: 0; height: 522px"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            data-aos="fade-up"
          ></iframe>
        </div>
        <div class="col-lg-6">
          <div
            class="d-flex flex-column justify-content-between h-100"
            data-aos="fade-up"
          >
            <p class="pe-lg-5 pe-sm-4 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <form
              class="h-100 d-flex flex-column justify-content-between gap-3"
              id="Subscribe-massage3"
            >
              <div class="d-flex gap-sm-4 gap-3">
                <input
                  class="w-50"
                  type="text"
                  placeholder="Your Name"
                  required
                />
                <input
                  class="w-50"
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div class="d-flex gap-sm-4 gap-3">
                <input
                  class="w-50"
                  type="number"
                  placeholder="Phone Number"
                  required
                />
                <input
                  class="w-50"
                  type="text"
                  placeholder="Project Details"
                  required
                />
              </div>
              <textarea
                placeholder="Write here message"
                class="w-100"
                rows="11"
                required
              ></textarea>
              <button class="hover3 mt-sm-4" type="submit">Submit</button>
            </form>
            <div id="Succes-box3" class="validation"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ======== End of 3.2. Contact section ========  -->
  <!-- ======== 3.3. Contact_Info section ========  -->
  <section class="Contact_Info">
    <h2 class="d-none">Lorem, ipsum dolor</h2>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <a href="#">
            <div
              class="d-flex flex-column text-center align-items-center h-100"
              data-aos="flip-left"
            >
              <figure>
                <i class="fa-solid fa-house-chimney"></i>
              </figure>
              <p>121 King Street, Melbourne Evonic Soft 3000 New york, USA.</p>
            </div>
          </a>
        </div>
        <div class="col-lg-4 col-md-4">
          <a href="#">
            <div
              class="d-flex flex-column text-center align-items-center h-100"
              data-aos="flip-left"
            >
              <figure>
                <i class="fa-solid fa-phone"></i>
              </figure>
              <div>
                <p>+1(800) 060-07-30</p>
                <p>+2(800) 030-09-85</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-lg-4 col-md-4">
          <a href="#">
            <div
              class="d-flex flex-column text-center align-items-center h-100"
              data-aos="flip-left"
            >
              <figure>
                <i class="fa-solid fa-envelope"></i>
              </figure>
              <p>
                <span
                  class="__cf_email__"
                  data-cfemail="146d7b73757a777b54716c75796478713a777b79"
                  >[email&#160;protected]</span
                >
                <span
                  class="__cf_email__"
                  data-cfemail="7900161e18171a16391c01181409151c571a1614"
                  >[email&#160;protected]</span
                >
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- ======== End of 3.3. Contact_Info section ========  -->

  <!-- ======== 1.15. Register section ========  -->
  <Register />
</template>
