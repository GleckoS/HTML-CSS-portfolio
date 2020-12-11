$(document).ready(function () {
    let show = true
    const countbox = ".statistic-numbers-item__number"
    $(window).on("scroll load resize", function () {
        if (!show) return false
        const w_top = $(window).scrollTop()
        const e_top = $(countbox).offset().top
        const w_height = $(window).height()
        const d_height = $(document).height()
        const e_height = $(countbox).outerHeight()
        if (w_top + 500 >= e_top || w_height + w_top === d_height || e_height + e_top < w_height) {
            $(countbox).spincrement({ /* repair */
                thousandSeparator: "",
                duration: 1200
            })
            show = false
        }
    });

});