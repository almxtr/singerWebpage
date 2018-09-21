const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;

// Set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {
  // Reset opacity of all imgs
  imgs.forEach(img => (img.style.opacity = 1));

  // Change current img to src of clicked img
  current.src = e.target.src;

  //Add Fade in class
  current.classList.add("fade-in");

  //remove fade-in class after .5s
  setTimeout(() => current.classList.remove("fade-in"), 500);

  // Change opacity
  e.target.style.opacity = opacity;
}
