const menu = document.querySelector("#menu");
const obrir = document.querySelector("#obrir");
const tancar = document.querySelector("#tancar");

obrir.addEventListener("click",() => {
    menu.classList.add("visible");
});

tancar.addEventListener("click", () => {
    menu.classList.remove("visible");
});


