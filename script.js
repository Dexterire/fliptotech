let me = document.querySelectorAll(".question-answer");
// let answers = document.querySelector(".answers");

me.forEach((fqs) => {
  fqs.addEventListener("click", () => {
    fqs.classList.toggle("answer");
    document.querySelectorAll(".fq-icon").textContent = "-";
  });
});
