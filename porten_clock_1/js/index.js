const openClose = (id) => {
    let el = document.getElementsByClassName("footer-content")
    if (el[id].classList.contains('active')) {
        el[id].classList.remove('active')
    } else {
        el[id].classList.add('active');
    }
}

const mobileNav = () => {
    let el = document.getElementById("nav-search__mobile")
    let el2 = document.getElementById("nav-list")
    if (el.classList.contains('active') && el2.classList.contains('active')) {
        el2.classList.remove('active')
        el.classList.remove('active')
    } else {
        el2.classList.add('active')
        el.classList.add('active');
    }
}