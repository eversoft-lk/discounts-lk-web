<template>
  <header>
    <nav class="navbar navbar-expand-lg container pt-lg-3 pt-2">
      <div class="container-fluid">
        <a class="nav-logo p-0" href="/">
          <figure><img src="/images/logo.svg" alt="logo" /></figure>
        </a>
        <button class="open-aside" @click="open_aside" type="button">
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
    <!--===== aside navigation sidebar =====-->
    <aside>
      <div :class="{ 'right-sidebar': true, open: isAsideOpen }" id="mySidenav">
        <div
          class="side-nav-logo d-flex justify-content-between align-items-center ps-2 pe-1 nav-logo"
        >
          <figure class="navbar-brand">
            <a href="/">
              <img src="/images/logo.svg" alt="img" class="" />
            </a>
          </figure>
          <button class="fa-solid fa-xmark" @click="close_aside"></button>
        </div>
        <ul class="pt-4">
          <li class="nav-item active">
            <NuxtLink aria-current="page" to="/" @click.native="close_aside"
              >Home</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink to="/about" @click.native="close_aside">About</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/contact" @click.native="close_aside"
              >Contact</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink to="/pricing" @click.native="close_aside"
              >Pricing</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink to="/features" @click.native="close_aside"
              >Features</NuxtLink
            >
          </li>
          <!-- <li class="nav-item">
            <div
              class="d-flex align-items-center justify-content-between"
              id="slid-btn"
            >
              <button class="a-slid page-btn">Pages</button>
              <i class="fa-solid fa-caret-down pe-2"></i>
            </div>
            <ul id="slid-drop">
              <li>
                <NuxtLink to="/blog" @click.native="close_aside"
                  >Our Blog</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/blog-detail" @click.native="close_aside"
                  >Blog Detail</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/features" @click.native="close_aside"
                  >Features</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/team" @click.native="close_aside">Team</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/testimonial" @click.native="close_aside"
                  >Testimonials</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/faq" @click.native="close_aside">FAQs</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/404" @click.native="close_aside">404</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/coming-soon" @click.native="close_aside"
                  >Coming Soon</NuxtLink
                >
              </li>
            </ul>
          </li> -->
        </ul>
      </div>
    </aside>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isAsideOpen: false,
    };
  },
  methods: {
    open_aside() {
      this.isAsideOpen = true;
    },
    close_aside() {
      this.isAsideOpen = false;
    },
  },
};
</script>

<style scoped>
.right-sidebar {
  position: fixed;
  right: -100%;
  top: 0;
  width: 300px;
  height: 100%;
  background-color: #fff;
  transition: right 0.3s ease;
  z-index: 1000;
}
.right-sidebar.open {
  left: 0;
}
</style>
