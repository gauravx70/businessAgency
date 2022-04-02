//  navbar starts
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("change");
  menu.classList.toggle("change");
});
// navbar ends
// section-2 video
const video = document.querySelector(".video");
const bar = document.querySelector(".video-bar");
const btn = document.querySelector(".buttons i");

const any = () => {
  if (video.paused) {
    video.play();
    btn.className = "fas fa-pause-circle";
    video.style.opacity = ".7";
  } else {
    video.pause();
    btn.className = "fas fa-play-circle";
    video.style.opacity = ".3";
  }
};
btn.addEventListener("click", () => {
  any();
});

video.addEventListener("timeupdate", () => {
  const barWidth = video.currentTime / video.duration;
  bar.style.width = `${barWidth * 100}%`;
  if (video.ended) {
    btn.className = "fas fa-play-circle";
    video.style.opacity = ".3";
  }
});


// section-3 pricing cards

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },

});
// section-3 pricing cards ends 