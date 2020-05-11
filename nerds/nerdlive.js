var writeUs = document.getElementById("writeUs");
var popup = document.querySelector(".modal");
var close = document.querySelector("#close-item")

writeUs.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-show");
})

close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-show");
})

/*БОЛЬШОЙ СЛАЙДЕР*/

var firstController = document.getElementById("first-controller");
var secondController = document.getElementById("second-controller");
var thirdController = document.getElementById("third-controller");

var firstSlide = document.getElementById("first-slide");
var secondSlide = document.getElementById("second-slide");
var thirdSlide = document.getElementById("third-slide");

firstController.addEventListener("click", function (event) {
    event.preventDefault();
    secondController.classList.remove("active");
    thirdController.classList.remove("active");
    secondSlide.style.display = "none";
    thirdSlide.style.display = "none";
    firstController.classList.add("active");
    firstSlide.style.display = "block";
})

secondController.addEventListener("click", function (event) {
    event.preventDefault();
    firstController.classList.remove("active");
    thirdController.classList.remove("active");
    firstSlide.style.display = "none";
    thirdSlide.style.display = "none";
    secondController.classList.add("active");
    secondSlide.style.display = "block";
})

thirdController.addEventListener("click", function (event) {
    event.preventDefault();
    firstController.classList.remove("active");
    secondController.classList.remove("active");
    firstSlide.style.display = "none";
    secondSlide.style.display = "none";
    thirdController.classList.add("active");
    thirdSlide.style.display = "block";
})
