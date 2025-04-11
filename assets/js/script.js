// sponsers slider
var swiper = new Swiper(".sponsers__slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

// sponser video slider
var swiper = new Swiper(".sponsers__video_slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//   slider video play/pause
document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll(".video__slider_video");

  videos.forEach(function (video) {
    video.addEventListener("click", function () {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  });
});

// =========== Hide second modal on NO click ===========

document.addEventListener("DOMContentLoaded", function () {
  const noLabelBtn = document.getElementById("no-label");
  const secondModalEl = document.getElementById("secondModal");
  const thirdModalEl = document.getElementById("thirdModal");

  const secondModal = bootstrap.Modal.getOrCreateInstance(secondModalEl);
  const thirdModal = bootstrap.Modal.getOrCreateInstance(thirdModalEl);

  noLabelBtn.addEventListener("click", function () {
    secondModal.hide();

    // Listen for second modal fully hidden
    secondModalEl.addEventListener("hidden.bs.modal", function handler() {
      thirdModal.show();
      // Remove the listener to avoid multiple triggers
      secondModalEl.removeEventListener("hidden.bs.modal", handler);
    });
  });
});

// ============ open Terms Modal ================

document.addEventListener("DOMContentLoaded", function () {
  const termTrigger = document.getElementById("term-modal-trigger");
  const termsModalEl = document.getElementById("termsModal");

  const termsModal = bootstrap.Modal.getOrCreateInstance(termsModalEl);

  termTrigger.addEventListener("click", function () {
    // Show the terms modal without hiding the underlying one
    termsModal.show();

    // Optional: elevate termsModal so it looks layered
    termsModalEl.classList.add("modal-top");
  });

  // Optional: remove the z-index class when termsModal closes
  termsModalEl.addEventListener("hidden.bs.modal", function () {
    termsModalEl.classList.remove("modal-top");
  });
});



// ============ open Product Modal ================

document.addEventListener("DOMContentLoaded", function () {
  const productTrigger = document.getElementById("item__modal_trigger");
  const productModalEl = document.getElementById("productModal");

  const productModal = bootstrap.Modal.getOrCreateInstance(productModalEl);

  productTrigger.addEventListener("click", function () {
    productModal.show();
    productModalEl.classList.add("modal-top");
  });

  productModalEl.addEventListener("hidden.bs.modal", function () {
    productModalEl.classList.remove("modal-top");
  });
});






