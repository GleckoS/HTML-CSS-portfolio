const mobileNav = () => {

    let el = document.getElementById("navigation-list")
    let el2 = document.getElementById("hero-content")
    let el3 = document.getElementById("nav-search__mobile")

    if (el.classList.contains('active')) {
        el3.classList.remove('active')
        el2.classList.remove('active')
        el.classList.remove('active')
    } else {
        el3.classList.add('active')
        el2.classList.add('active')
        el.classList.add('active')
    }
}