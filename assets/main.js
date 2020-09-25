const body = document.body;
document.addEventListener("DOMContentLoaded", ()=>{
    gsap.from(body, {
        opacity:0,
        duration:1,
        y:-500,
        ease:"bounce"
    })
    gsap.to(body, {
        opacity:1,
        duration:2,
        scale:1,
        ease:"back"
    })
    gsap.to(slider, {
        scale:2,
        opacity:1,
        y:-20,
        duration:2,
        ease:"power",
        repeat:5
    })
})


const navbar__content = document.querySelector(".navbar__content");
const slider = document.querySelector(".fa-arrow-up");
slider.addEventListener("click", ()=>{
    gsap.to(slider, {
        scale:2,
        duration:2,
        ease:"power",
        repeat:0
    })
    window.scrollBy(0,750);
})
const bar = document.querySelector(".fa-bars");
bar.addEventListener("click", ()=>{
    gsap.from(navbar__content, {
        opacity:0,
        scale:0
    })
    gsap.to(navbar__content, {ease:"bounce", scale:1, duration:1})
    navbar__content.classList.toggle("show");
})

