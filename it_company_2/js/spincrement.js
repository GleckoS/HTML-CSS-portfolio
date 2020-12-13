$(document).ready(function () {
    let show = true
    const countbox = ".statistic-numbers__item-number"
    $(window).on("scroll load resize", function () {
        if (!show) return false
        const w_top = $(window).scrollTop()
        const e_top = $(countbox).offset().top
        const w_height = $(window).height()
        const d_height = $(document).height()
        const e_height = $(countbox).outerHeight()
        if (w_top + 1000 >= e_top || w_height + w_top === d_height || e_height + e_top < w_height) {
            $(countbox).delay(200).spincrement({
                thousandSeparator: "",
                duration: 2500
            })
            show = false
        }
    });
});