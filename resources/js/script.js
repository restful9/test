function animate() {
  var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

  function resetValues() {
    anime.set(".spark", {
      translateX: function() {
        return anime.random(0, width - 48);
      },
      translateY: 0,
      opacity: 1
    });

    anime({
      targets: ".spark",
      translateY: ["-10vh", "-80vh"],
      easing: "linear",
      opacity: 0,
      delay: anime.stagger(anime.random(800, 2000)),
      duration: 3000,
      complete: resetValues
    });
  }

  anime({
    targets: [".flame-light", ".heading .is-small"],
    opacity: 0.5,
    easing: "easeInOutQuad",
    duration: 3000,
    loop: true,
    direction: "alternate"
  });
  resetValues();
}

document.addEventListener("DOMContentLoaded", animate);
