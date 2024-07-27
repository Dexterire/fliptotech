let me = document.querySelectorAll(".question-answer");
let show = document.querySelector("#show-menu");
let hide = document.querySelector("#hide-menu");
let menu = document.querySelector(".net");

me.forEach((fqs) => {
  fqs.addEventListener("click", () => {
    fqs.classList.toggle("answer");
    document.querySelectorAll(".fq-icon").textContent = "-";
  });
});

show.addEventListener("click", () => {
  menu.style.display = "block";
});
hide.addEventListener("click", () => {
  menu.style.display = "none";
});
