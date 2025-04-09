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
              slidesPerView: 3,
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
    document.addEventListener('DOMContentLoaded', function () {
        const videos = document.querySelectorAll('.video__slider_video');

        videos.forEach(function (video) {
            video.addEventListener('click', function () {
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        });
    });

