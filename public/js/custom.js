// ====== pre-loader ======
document.addEventListener("DOMContentLoaded", function () {
  var preloader = document.createElement("div");
  preloader.className = "preloader";

  var text = document.createElement("span");
  text.className = "preloader-text";
  text.innerText = "APPIFIC";
  preloader.appendChild(text);

  var canvas = document.createElement("canvas");
  canvas.id = "preloaderCanvas";
  document.body.appendChild(preloader);
  preloader.appendChild(canvas);

  var ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var mouse = {
    x: undefined,
    y: undefined,
  };

  var maxDistance = 100;
  var lines = [];
  for (var i = 0; i < 50; i++) {
    lines.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1,
      vy: (Math.random() - 0.5) * 1,
    });
  }

  var dots = [
    { radius: 30, speed: 0.05, angle: 0 },
    { radius: 50, speed: 0.03, angle: 0 },
    { radius: 70, speed: 0.02, angle: 0 },
  ];

  function drawLine(line, color = "#E85838", thickness = 1) {
    ctx.beginPath();
    ctx.moveTo(line.x, line.y);
    ctx.lineTo(line.x + 20, line.y + 20);
    ctx.strokeStyle = color;
    ctx.lineWidth = thickness;
    ctx.stroke();
  }

  function drawDot(dot) {
    var x = canvas.width / 2 + Math.cos(dot.angle) * dot.radius;
    var y = canvas.height - 150 + Math.sin(dot.angle) * dot.radius;
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "#E85838";
    ctx.fill();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    lines.forEach(function (line) {
      let dx = mouse.x - line.x;
      let dy = mouse.y - line.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < maxDistance) {
        let moveAwayFactor = 1 + (maxDistance - distance) / maxDistance;
        line.vx = (line.vx + (dx / distance) * moveAwayFactor) * -1;
        line.vy = (line.vy + (dy / distance) * moveAwayFactor) * -1;
      }
      line.x += line.vx;
      line.y += line.vy;
      if (line.x > canvas.width || line.x < 0) {
        line.vx *= -1;
      }
      if (line.y > canvas.height || line.y < 0) {
        line.vy *= -1;
      }
      drawLine(line);
    });
    dots.forEach(function (dot) {
      dot.angle += dot.speed;
      drawDot(dot);
    });
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener("mousemove", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
  });

  function removePreloader() {
    setTimeout(function () {
      preloader.style.transition = "opacity 0.5s ease";
      preloader.style.opacity = "0";
      setTimeout(function () {
        preloader.style.display = "none";
        preloader.remove();
        var siteWrapper = document.querySelector(".site-wrapper");
        if (siteWrapper === null) {
          return;
        }
        siteWrapper.style.display = "block";
        siteWrapper.style.opacity = "0";
        siteWrapper.style.transition = "opacity 0.5s ease";
        setTimeout(() => {
          siteWrapper.style.opacity = "1";
          AOS.init({
            once: true,
            duration: 1500,
          });
        }, 10);
      }, 500);
    }, 1500);
  }
  window.addEventListener("load", function () {
    removePreloader();
  });
});

// ====== 1.1 header (aside navigation bar) =====
if (document.getElementById("mySidenav")) {
  function open_aside() {
    "use strict";
    const sidepanel = document.getElementById("mySidenav");
    if (sidepanel) {
      sidepanel.style.left = "0";
    } else {
      console.error("Error: Side panel element not found!");
    }
  }
  function close_aside() {
    "use strict";
    const sidepanel = document.getElementById("mySidenav");
    if (sidepanel) {
      sidepanel.style.left = "-355px";
    } else {
      console.error("Error: Side panel element not found!");
    }
  }
  // aside page button
  let slid = document.getElementById("slid-btn");
  if (slid !== null) {
    slid.onclick = () => {
      let dropdwon = document.getElementById("slid-drop");
      dropdwon.classList.toggle("aside-dropdwon");
    };
  }
}

// ====== 1.1 header (dropdown bar) ======
const dropdowns = document.querySelectorAll(".navbar .dropdown");
dropdowns.forEach((dropdown) => {
  const dropdownMenu = dropdown.querySelector(".dropdown-menu");
  dropdownMenu.style.maxHeight = "0";
  dropdown.addEventListener("mouseenter", () => {
    dropdownMenu.style.visibility = "visible";
    dropdownMenu.style.maxHeight = `${dropdownMenu.scrollHeight}px`;
  });
  dropdown.addEventListener("mouseleave", () => {
    dropdownMenu.style.visibility = "hidden";
    dropdownMenu.style.maxHeight = "0";
  });
});

// 1.2. Hero section === Subscribe successfully massage
const aboutFor = document.getElementById("Subscribe-massage");
const aboutMessag = document.getElementById("Succes-box");
if (aboutFor !== null) {
  aboutFor.addEventListener("submit", (event) => {
    event.preventDefault();
    aboutMessag.innerHTML = `
    <i class="fa-solid fa-check"></i>       
    <h4>Congratulation</h4>
    <h5>You Subscribe Successfully</h5>
    `;
    aboutMessag.style.display = "block";
    aboutFor.reset();
    setTimeout(() => {
      aboutMessag.style.display = "none";
    }, 3000);
  });
}

// ====== 1.4. Partners section ======
if (document.querySelector(".Partners_Slider")) {
  $(".Partners_Slider").slick({
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 3000,
    slidesToShow: 6,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
}

// 1.7. Register section === Search Domain massage
const aboutFor2 = document.getElementById("Subscribe-massage2");
const aboutMessag2 = document.getElementById("Succes-box2");
if (aboutFor2 !== null) {
  aboutFor2.addEventListener("submit", (event) => {
    event.preventDefault();
    aboutMessag2.innerHTML = `
    <i class="fa-solid fa-check"></i>       
    <h4>Congratulation</h4>
    <h5>You Subscribe Successfully</h5>
    `;
    aboutMessag2.style.display = "block";
    aboutFor2.reset();
    setTimeout(() => {
      aboutMessag2.style.display = "none";
    }, 3000);
  });
}

// ====== 1.9. About_App section ======
if (document.querySelector(".About_App_Slider")) {
  $(".About_App_Slider").slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}

// Numbers Animations for spans
function animateNumbers(num, finalValue, duration) {
  let start = null;
  const finalValueStr = num.getAttribute("data-final-value");
  const charCount = finalValueStr.length;
  num.style.display = "inline-block";
  num.style.width = `${charCount}ch`;
  const numberFormatter = new Intl.NumberFormat("en-US");
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    num.textContent = numberFormatter.format(Math.floor(progress * finalValue));
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      num.style.display = "inline";
    }
  }
  window.requestAnimationFrame(step);
}
function startNumberAnimation() {
  const numbers = document.querySelectorAll(".number");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const finalValue = parseInt(
            entry.target.getAttribute("data-final-value")
          );
          animateNumbers(entry.target, finalValue, 2000);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  numbers.forEach((num) => observer.observe(num));
}
startNumberAnimation();
window.addEventListener("load", startNumberAnimation);

/* ======== 1.10 Testionials Slider ======== */
if (document.querySelector(".Testimonials")) {
  document.addEventListener("DOMContentLoaded", function () {
    const sliderData = Array.from(
      document.querySelectorAll("#testimonialSlider .slide")
    ).map((el, index) => ({
      id: index,
      img: el.querySelector("img").getAttribute("src"),
      name: el.querySelector("h3").textContent,
      role: el.querySelector("span").textContent,
      para: el.querySelector("p").textContent,
      stars: el.querySelectorAll(".stars i").length,
      active: index === 0,
    }));
    const MAX_VISIBLE_SLIDES = 7;
    const imagesContainer = document.getElementById("imagesContainer");
    const sliderContainer = document.getElementById("testimonialSlider");
    sliderContainer.innerHTML = "";
    function reorderSliderData(activeId) {
      const activeIndex = sliderData.findIndex((item) => item.id === activeId);
      const beforeActive = sliderData.slice(0, activeIndex);
      const afterActive = sliderData.slice(activeIndex + 1);
      const reordered = [
        ...beforeActive,
        sliderData[activeIndex],
        ...afterActive,
      ];
      while (reordered.findIndex((item) => item.id === activeId) !== 3) {
        reordered.unshift(reordered.pop());
      }
      return reordered;
    }

    let previousActiveId = null;

    function generateSlider() {
      const activeItem = sliderData.find((item) => item.active);
      if (previousActiveId === null) previousActiveId = activeItem.id;
      const orderedSliderData = reorderSliderData(activeItem.id);
      imagesContainer.innerHTML = "";
      sliderContainer.innerHTML = "";

      orderedSliderData.forEach((item, index) => {
        if (index < MAX_VISIBLE_SLIDES) {
          const imageElement = document.createElement("img");
          imageElement.src = item.img;
          imageElement.alt = `image${item.id}`;
          imageElement.className = item.active ? "active" : "";
          imagesContainer.appendChild(imageElement);
          if (item.id === activeItem.id || item.id === previousActiveId) {
            imageElement.style.opacity = "0";
            setTimeout(() => {
              imageElement.style.transition = "opacity 0.3s ease-out";
              imageElement.style.opacity = "1";
            }, 300);
          }
          imagesContainer.appendChild(imageElement);

          if (item.active) {
            const contentElement = document.createElement("div");
            contentElement.className = "active-content";
            let starsHtml = "";
            for (let i = 1; i <= 5; i++) {
              starsHtml +=
                i <= item.stars
                  ? '<i class="fa fa-star fa-lg px-1"></i>'
                  : '<i class="fa fa-star fa-lg px-1" style="color: grey;"></i>';
            }
            contentElement.innerHTML = `
     <div class="stars"> ${starsHtml}</div>
      <p>${item.para}</p> 
      <h3>${item.name}</h3>
      <span>${item.role}</span>
  `;
            sliderContainer.appendChild(contentElement);

            contentElement.style.transform = "scale(0)";
            setTimeout(() => {
              contentElement.style.opacity = "1";
              contentElement.style.transform = "scale(1)";
            }, 300);
          }
          imageElement.addEventListener("click", () =>
            setActiveSlider(item.id)
          );
        }
      });

      previousActiveId = activeItem.id;

      sliderContainer.style.opacity = "0";
      sliderContainer.style.transform = "scale(0)";
      setTimeout(() => {
        sliderContainer.style.transition =
          "opacity 0.3s ease-out, transform 0.3s ease-out";
        sliderContainer.style.opacity = "1";
        sliderContainer.style.transform = "scale(1)";
      }, 300);
    }

    function generateDots() {
      const dotsContainer = document.getElementById("dotsContainer");
      dotsContainer.innerHTML = "";

      sliderData.forEach((item) => {
        const dotElement = document.createElement("span");
        dotElement.classList.add("dot");
        if (item.active) {
          dotElement.classList.add("active");
        }
        dotElement.addEventListener("click", () => setActiveSlider(item.id));
        dotsContainer.appendChild(dotElement);
      });

      const activeDotIndex = sliderData.findIndex((item) => item.active);
      const dots = document.querySelectorAll(".dot");
      if (dots.length > 0 && activeDotIndex >= 0) {
        const dotWidth = dots[0].offsetWidth;
        const containerWidth = dotsContainer.offsetWidth;
        const scrollToPosition =
          activeDotIndex * dotWidth - containerWidth / 2 + dotWidth / 2;
        dotsContainer.scrollLeft = scrollToPosition;
      }
    }

    function setActiveSlider(id) {
      sliderData.forEach((item) => {
        item.active = item.id === id;
      });
      generateSlider();
      generateDots();
      document.querySelectorAll(".sliderbtn").forEach((btn) => {
        btn.classList.remove("activecolor");
        if (btn.getAttribute("data-name") === `myBtn${id}`) {
          btn.classList.add("activecolor");
        }
      });
    }

    let autoSlideInterval;

    function moveToNextSlide() {
      const currentIndex = sliderData.findIndex((item) => item.active);
      const nextIndex = (currentIndex + 1) % MAX_VISIBLE_SLIDES;
      setActiveSlider(sliderData[nextIndex].id);
    }

    function startAutoSlide() {
      autoSlideInterval = setInterval(moveToNextSlide, 3000);

      function stopAutoSlide() {
        clearInterval(autoSlideInterval);
      }

      const sliderElements = [
        imagesContainer,
        sliderContainer,
        document.getElementById("dotsContainer"),
      ];
      sliderElements.forEach((element) => {
        element.addEventListener("mouseenter", stopAutoSlide);
        element.addEventListener("mouseleave", startAutoSlide);
      });
    }

    generateDots();
    generateSlider();
    startAutoSlide();
  });
}

// 3.2. Contact section === Submit massage
const aboutFor3 = document.getElementById("Subscribe-massage3");
const aboutMessag3 = document.getElementById("Succes-box3");
if (aboutFor3 !== null) {
  aboutFor3.addEventListener("submit", (event) => {
    event.preventDefault();
    aboutMessag3.innerHTML = `
    <i class="fa-solid fa-check"></i>       
    <h4>Congratulation</h4>
    <h5>Details Submitted</h5>
    `;
    aboutMessag3.style.display = "block";
    aboutFor3.reset();
    setTimeout(() => {
      aboutMessag3.style.display = "none";
    }, 3000);
  });
}

// =============== 5.1. Blog ============
document.addEventListener("DOMContentLoaded", function () {
  let currentDate = new Date();

  let formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  let dateElements = document.getElementsByClassName("date");
  for (let i = 0; i < dateElements.length; i++) {
    dateElements[i].innerText = formattedDate;
  }
});

// =============== 6.2. Reply Section ============
const aboutFor4 = document.getElementById("Subscribe-massage4");
const aboutMessag4 = document.getElementById("Succes-box4");
if (aboutFor4 !== null) {
  aboutFor4.addEventListener("submit", (event) => {
    event.preventDefault();
    aboutMessag4.innerHTML = `
    <i class="fa-solid fa-check"></i>       
    <h4>Congratulation</h4>
    <h5>Details Submitted</h5>
    `;
    aboutMessag4.style.display = "block";
    aboutFor4.reset();
    setTimeout(() => {
      aboutMessag4.style.display = "none";
    }, 3000);
  });
}

// =============== scroll to top button =============
if (document.querySelector(".scrollToTopButton")) {
  document.addEventListener("DOMContentLoaded", function () {
    toggleButtonVisibility();
  });

  var backToTopButton = document.querySelector(".scrollToTopButton");
  var circle = document.querySelector(".progress-ring__circle");
  var radius = circle.r.baseVal.value;
  var circumference = radius * 2 * Math.PI;

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  function toggleButtonVisibility() {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("show-btn");
    } else {
      backToTopButton.classList.remove("show-btn");
    }

    var scrollPercentage =
      (document.documentElement.scrollTop + document.body.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);
    var offset = circumference - scrollPercentage * circumference;
    circle.style.strokeDashoffset = offset;
  }

  window.addEventListener("scroll", function () {
    toggleButtonVisibility();
  });

  backToTopButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => (circle.style.strokeDashoffset = circumference), 500);
  });
}
