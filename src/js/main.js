window.addEventListener('load', fullPageScroll())


window.addEventListener(`wheel`, () => {
    setTimeout(() => {
        animOnScroll()
    }, 500)
})


if (window.innerWidth > 1024) {
    VanillaTilt.init(document.querySelector(".about"), {
        max: 3,
        speed: 200
    })
}