const mobileNav = () => {
    let el = document.getElementById("hero-bg")
    let el2 = document.getElementById("nav-list")
    let el3 = document.getElementById("hero-content")
    let el4 = document.getElementById("nav-search__mobile")
    if (el.classList.contains('active')) {
        el4.classList.remove('active')
        el3.classList.remove('active')
        el2.classList.remove('active')
        el.classList.remove('active')
    } else {
        el4.classList.add('active')
        el3.classList.add('active')
        el2.classList.add('active')
        el.classList.add('active')
    }
}