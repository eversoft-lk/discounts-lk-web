<template>
  <header>
    <nav class="navbar navbar-expand-lg container pt-lg-3 pt-2">
      <div class="container-fluid">
        <a class="nav-logo p-0" href="index.html">
          <figure><img src="/images/logo.svg" alt="logo" /></figure>
        </a>
        <button class="open-aside" onclick="open_aside()" type="button">
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            class="navbar-nav d-flex justify-content-center align-items-center gap-lg-4 gap-md-2 gap-sm-2 gap-2 mb-2 mb-lg-0"
          >
            <li class="nav-item">
              <NuxtLink class="nav-link active" to="/">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/about">About</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/contact">Contact</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/pricing">Pricing</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/features">Features</NuxtLink>
            </li>
            <!-- <li class="dropdown">
              <a class="nav-link d-flex align-item-center gap-1" href="#"
                >Pages <i class="fa-sharp fa-solid fa-sort-down"></i
              ></a>

              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="Blog.html">Blog</a></li>
                <li>
                  <a class="dropdown-item" href="BlogDetail.html"
                    >Blog Details</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="Features.html">Features</a>
                </li>
                <li><a class="dropdown-item" href="FAQ.html">FAQs</a></li>
                <li><a class="dropdown-item" href="Team.html">Team</a></li>
                <li>
                  <a class="dropdown-item" href="Testimonial.html"
                    >Testimonials</a
                  >
                </li>
                <li><a class="dropdown-item" href="404.html">404</a></li>
                <li>
                  <a class="dropdown-item" href="ComingSoon.html"
                    >Coming Soon</a
                  >
                </li>
              </ul>
            </li> -->
          </ul>
        </div>
        <a href="#" class="hover1 down-btn">Download</a>
      </div>
    </nav>
    <!--===== aside navigation slidebar =====-->
    <aside>
      <div id="mySidenav" class="right-sidbar">
        <div
          class="side-nav-logo d-flex justify-content-between align-items-center ps-2 pe-1 nav-logo"
        >
          <figure class="navbar-brand">
            <a href="index.html">
              <img src="/images/logo.svg" alt="img" class="" />
            </a>
          </figure>
          <button class="fa-solid fa-xmark" onclick="close_aside()"></button>
        </div>
        <ul class="pt-4">
          <li class="nav-item active">
            <a aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a href="About.html">About</a>
          </li>
          <li class="nav-item">
            <a href="Pricing.html">Pricing</a>
          </li>
          <li class="nav-item">
            <a href="Contact.html">Contact</a>
          </li>
          <li class="nav-item">
            <div
              class="d-flex align-items-center justify-content-between"
              id="slid-btn"
            >
              <button class="a-slid page-btn">Pages</button>
              <i class="fa-solid fa-caret-down pe-2"></i>
            </div>
            <ul id="slid-drop">
              <li><a href="Blog.html">Our Blog</a></li>
              <li><a href="BlogDetail.html">Blog Detail</a></li>
              <li><a href="Features.html">Features</a></li>
              <li><a href="Team.html">Team</a></li>
              <li><a href="Testimonial.html">Testimonials</a></li>
              <li><a href="FAQ.html">FAQs</a></li>
              <li><a href="404.html">404</a></li>
              <li><a href="ComingSoon.html">Coming Soon</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  </header>
</template>
