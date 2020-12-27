window.addEventListener('load', function () {

    if (document.body.classList.contains('fullScreen') && window.innerWidth > 1024) {

        const sections = document.querySelectorAll("section")
        const content = document.querySelector(".main-content")
        let spinValue = 0
        let canScroll = true

        const buttons = document.querySelectorAll('.nav-list__item');

        buttons[0].classList.add('_active');

        for ( let i=0; i<buttons.length; i++ ) {

            buttons[i].addEventListener('click', function() {
                document.querySelector('.nav-list__item._active').classList.remove('_active');
                this.classList.add('_active');
                spinValue = i;
                scrollContent(spinValue);

            });

        }

        window.addEventListener('wheel', function (e) {

            if (canScroll) {

                canScroll = false

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

            }

            setTimeout(() => {
                canScroll = true
            }, 560)
        })


        function scrollContent(count) {
            content.setAttribute('style', 'transform: translateY(-' + count * 100 + 'vh)')

            document.querySelector('.nav-list__item._active').classList.remove('_active');
            buttons[count].classList.add('_active');
        }
    }
})

const animItems = document.querySelectorAll(`._anim-items`)
if (animItems.length > 0) {
    window.addEventListener(`wheel`, () => {

        setTimeout(() => {

            function animOnScroll() {
                for (let index = 0; index < animItems.length; index++) {
                    const animItem = animItems[index]
                    const animItemHeight = animItem.offsetHeight
                    const animItemOffSet = offset(animItem).top
                    const animStart = 4
                    let animItemPoint = window.innerHeight - animItemHeight / animStart
                    if (animItemHeight > window.innerHeight) {
                        animItemPoint = window.innerHeight - window.innerHeight / animStart
                    }
                    if ((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight)) {
                        animItem.classList.add(`_active`)
                    } else {
                        if (!(animItem.classList.contains(`_anim-no-hide`))) {
                            animItem.classList.remove(`_active`)
                        }
                    }
                }
            }

            function offset(el) {
                const rect = el.getBoundingClientRect()
                let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop
                return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
            }

            setTimeout(() => {
                animOnScroll()
            }, 300)

        }, 100)
    })
}
