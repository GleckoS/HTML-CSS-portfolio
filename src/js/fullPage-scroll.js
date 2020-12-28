const fullPageScroll = () => {
    if (document.body.classList.contains('fullScreen') && window.innerWidth > 1024) {
        const sections = document.querySelectorAll("section")
        const content = document.querySelector(".main-content")
        let spinValue = 0
        let canScroll = true

        const buttons = document.querySelectorAll('.nav-list__item')

        buttons[0].classList.add('_active')

        for (let i = 0; i < buttons.length; i++) {

            buttons[i].addEventListener('click', function () {
                document.querySelector('.nav-list__item._active').classList.remove('_active')
                this.classList.add('_active')
                spinValue = i
                scrollContent(spinValue)

            })

        }

        window.addEventListener('wheel', (e) => {

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


        const scrollContent = (count) => {
            content.setAttribute('style', 'transform: translateY(-' + count * 100 + 'vh)')

            document.querySelector('.nav-list__item._active').classList.remove('_active')
            buttons[count].classList.add('_active')
        }
    }
}