const btns = document.querySelectorAll(".btn");
const spanEmail = document.querySelectorAll(".email_alrt");
const inputElement = document.querySelectorAll("input[type=text]");

btns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        inputElement[index].value
      )
    ) {
    } else {
      spanEmail[index].classList.toggle("show");
    }
  });
});
