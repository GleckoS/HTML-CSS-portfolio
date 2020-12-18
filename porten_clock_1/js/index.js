const openClose = (id) => {
    let el = document.getElementsByClassName("content")
    if (el[id].classList.contains('active')) {
        el[id].classList.remove('active')
    } else {
        el[id].clientWidth
        el[id].classList.add('active');
    }
}