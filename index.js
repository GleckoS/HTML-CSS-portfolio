window.addEventListener('load', function () {

    if ( document.body.classList.contains('fullScreen') && window.innerWidth > 1024 ) {

        const sections = document.querySelectorAll("section")
        const content = document.querySelector(".main-content")
        let spinValue = 0

        window.addEventListener('wheel', function (e) {
            if (e.deltaY > 0) {
                if (spinValue < sections.length - 1) {
                    spinValue += 1
                }
            } else {
                if (spinValue > 0) {
                    spinValue -= 1
                }
            }
            scrollContent(spinValue)
        })

        function scrollContent(count) {
            content.setAttribute('style', 'transform: translateY(-' + count * 100 + 'vh)')
        }
    }
})