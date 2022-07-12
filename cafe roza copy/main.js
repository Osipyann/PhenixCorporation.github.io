const headerMenuButton = document.querySelector(".header-menu-button")
const headerMenu = document.querySelector(".header-menu")
const main = document.querySelector("main")
const header = document.querySelector("header")
const sec3Slider = document.querySelector(".sec3-slider")
const sec3SliderPerv = document.querySelector(".sec3-slider-perv");
const sec3SliderNext = document.querySelector(".sec3-slider-next");

headerMenuButton.addEventListener("click", () => {
    headerMenuButton.classList.toggle("header-menu-button-opened")
    headerMenu.classList.toggle("header-menu-opened")
    header.classList.toggle("header-solid")
    main.classList.toggle("blured")
    document.body.classList.toggle("nonscroll")
    document.querySelector("html").classList.toggle("nonscroll")
})

let sec3SliderPos = 0;
sec3Slider.scrollTo({
    left: sec3SliderPos
})

sec3SliderNext.addEventListener("click", () => {
    if (sec3SliderPos >= window.innerWidth*2) {
        sec3SliderPos = -window.innerWidth
    }
    sec3SliderPos += window.innerWidth
    sec3Slider.scrollTo({
        left: sec3SliderPos,
        behavior: "smooth"
    })
})

sec3SliderPerv.addEventListener("click", () => {
    if (sec3SliderPos <= 0) {
        sec3SliderPos = window.innerWidth*3
    }
    sec3SliderPos -= window.innerWidth
    sec3Slider.scrollTo({
        left: sec3SliderPos,
        behavior: "smooth"
    })
    console.log(sec3SliderPos);
})

let screenPos;

let section2 = {
    sec2: document.querySelector(".section2"),
    sec2Pos: 0,
}

let section3 = {
    sec3: document.querySelector(".section3"),
    sec3Pos: 0,
}

let section4 = {
    sec4: document.querySelector(".section4"),
    sec4Pos: 0,
}

let section5 = {
    sec5: document.querySelector(".section5"),
    sec5Pos: 0,
}

let section6 = {
    sec6: document.querySelector(".section6"),
    sec6Pos: 0,
}

let section7 = {
    sec7: document.querySelector(".section7"),
    sec7Pos: 0,
}

window.addEventListener("scroll", () => {
    screenPos = window.innerHeight

    if (this.scrollY > 800) {
        header.classList.add("headerSolid")
    } else {
        header.classList.remove("headerSolid")
    }

    section2.sec2Pos = section2.sec2.getBoundingClientRect().top;
    if (section2.sec2Pos+300 < screenPos) {
        section2.sec2.classList.add("sec2Active")
    }

    section3.sec3Pos = section3.sec3.getBoundingClientRect().top;
    if (section3.sec3Pos+300 < screenPos) {
        section3.sec3.classList.add("sec3Active")
    }

    section4.sec4Pos = section4.sec4.getBoundingClientRect().top;
    if (section4.sec4Pos+300 < screenPos) {
        section4.sec4.classList.add("sec4Active")
    }

    section5.sec5Pos = section5.sec5.getBoundingClientRect().top;
    if (section5.sec5Pos+300 < screenPos) {
        section5.sec5.classList.add("sec5Active")
    }

    section6.sec6Pos = section6.sec6.getBoundingClientRect().top;
    if (section6.sec6Pos+300 < screenPos) {
        section6.sec6.classList.add("sec6Active")
    }

    section7.sec7Pos = section7.sec7.getBoundingClientRect().top;
    if (section7.sec7Pos+300 < screenPos) {
        section7.sec7.classList.add("sec7Active")
    }
})