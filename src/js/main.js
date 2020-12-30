initialContent() /* инициализация контента портфолио */

window.addEventListener(`scroll`, () => {
    setTimeout(() => {
        animOnScroll() /* инициализация проверка на анимацию на телефонах */
    }, 500)
})
window.addEventListener(`wheel`, () => {
    setTimeout(() => {
        animOnScroll() /* инициализация проверка на анимацию на компьютерах */
    }, 500)
})

if (window.innerWidth > 1024) {

    VanillaTilt.init(document.querySelector(".about"), { /* инициализация 3d Hero */
        max: 3,
        speed: 200
    })

    window.addEventListener('load', particles())

    window.addEventListener('load', fullPageScroll())
}

