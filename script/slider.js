const slider = document.querySelector(".slider");
const dotBox = slider.querySelector(".slider__dots");
const img = slider.querySelector(".slider__img");;
const currentSlide = slider.querySelector(".slider__img")


let slides = ["images/jpg/hero1.png", "images/jpg/hero2.png", "images/jpg/hero3.png"]

let counter = 0;

for(let i = 0; i < slides.length; i++ ) {
    let dot = document.createElement("li");
    dot.classList.add("slider__dot");
    dot.setAttribute("data-navid", i);
    if (i==0) {
        dot.classList.add("active");
    }
    dotBox.append(dot);
}

const dots = slider.querySelectorAll(".slider__dot");
const nav = slider.querySelectorAll("[data-navid]");

for (let elem of nav) {
    elem.addEventListener("click", ()=>{
        counter = elem.dataset.navid;
        change(counter);
    })
}

function change (num) {
    currentSlide.src = slides[num];

    for(let elem of nav) {
        elem.classList.remove("active");
    }
    
    let activate = slider.querySelectorAll(`[data-navid = "${num}"]`);
    for(let a of activate) {
        a.classList.add("active");
    }
}

function autoslide () {
    if (counter > slides.length-1) {
        counter = 0;
    }
    change(counter);
    counter++;
}

setInterval(()=>{
    autoslide();
},5000);




