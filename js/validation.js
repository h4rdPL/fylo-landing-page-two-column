const emailInput = document.getElementById("email");
const heroSubmitBtn = document.getElementById("hero__submitBtn");
const accessSubmitBtn = document.getElementById("access__submitBtn");
const heroError = document.getElementById("hero__error");
const accessError = document.getElementById("access__error");
const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

const heroValidate = (e) => {
  e.preventDefault();
  const email = emailInput.value;
  email.match(pattern)
    ? heroError.classList.remove("active")
    : heroError.classList.add("remove");
};

const accessValidate = (e) => {
  e.preventDefault();
  const email = emailInput.value;
  email.match(pattern)
    ? accessError.classList.remove("active")
    : accessError.classList.add("active");
};

heroSubmitBtn.addEventListener("click", heroValidate);
accessSubmitBtn.addEventListener("click", accessValidate);
