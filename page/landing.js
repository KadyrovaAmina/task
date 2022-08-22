const inputs = Array.from(document.querySelectorAll("input"))
const textarea = document.querySelector("textarea")
const formBtn = document.querySelector(".form__button")

inputs.push(textarea);

function validForm() {
    inputs.forEach((input) => {
    if (!input.value) {
      input.classList.add("input:invalid");
    } else {
      input.classList.remove("input:invalid");
    }
  });
}

formBtn.addEventListener('click', validForm)


const cookiesBlock = document.querySelector(".cookies");

cookiesBlock.querySelector(".cookies__button").addEventListener("click", () => {
  const cookieAnimationInterval = setInterval(() => {
    dissapearingAnimation(cookiesBlock, cookieAnimationInterval);
  }, 30);
});

window.addEventListener("load", () => {
  let amount = 0;
  const cookieBlockHeight = cookiesBlock.offsetHeight;

  cookiesBlock.style.display = "flex";
  cookiesBlock.style.bottom = "-" + cookiesBlock.offsetHeight + "px";

  const frame = () => {
    cookiesBlock.style.transform = `translateY(${-amount}px)`;
    amount++;
    if (amount === cookiesBlock.offsetHeight) {
      clearInterval(interval);
    }
  };

  const interval = setInterval(frame, 10);
});