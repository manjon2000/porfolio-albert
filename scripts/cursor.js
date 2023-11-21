document.addEventListener("DOMContentLoaded", (init) => {
  const ObserverElement = (fn, containerObserver) => {
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fn();
        }
      });
    }).observe(containerObserver);
  };

  let aboutInterestsContainer = document.querySelector(".about__interests");
  ObserverElement(() => {
    let aboutInterestsItems = document.querySelectorAll(
      ".about__interests-item"
    );
    aboutInterestsItems.forEach((element, idx) => {
      new Promise((resolve, reject) => {
        if (resolve) {
          setTimeout(() => {
            element.style.opacity = "1";
          }, 500 * (idx + 1 - 0.3));
        }
      });
    });
  }, aboutInterestsContainer);

  let ProjectsContainer = document.querySelector(".projects__wrapper");
  ObserverElement(() => {
    let aboutInterestsItems = document.querySelectorAll(".projects__card");
    aboutInterestsItems.forEach((element, idx) => {
      new Promise((resolve, reject) => {
        if (resolve) {
          setTimeout(() => {
            element.style.opacity = "1";
          }, 500 * (idx + 1 - 0.3));
        }
      });
    });
  }, ProjectsContainer);

  let SkillsContainer = document.querySelector(".skills__wrapper");
  ObserverElement(() => {
    let aboutInterestsItems = document.querySelectorAll(".skills__item");
    aboutInterestsItems.forEach((element, idx) => {
      new Promise((resolve, reject) => {
        if (resolve) {
          setTimeout(() => {
            element.style.opacity = "1";
          }, 500 * (idx + 1 - 0.3));
        }
      });
    });
  }, SkillsContainer);
});
