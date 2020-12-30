const portfolio = [
    {
        imgSrc: 'img/it_company.html.webp',
        link: './src/portfolio/it_company_2/it_company.html',
        title: 'It Company',
        text: 'Corporation website'
    },
    {
        imgSrc: 'img/trans_light.html.webp',
        link: './src/portfolio/trans_light_3/trans_light.html',
        title: 'Trans-light',
        text: 'Corporation website'
    },
    {
        imgSrc: 'img/porten_clock.html.webp',
        link: './src/portfolio/porten_clock_1/porten_clock.html',
        title: 'porten-clock',
        text: 'Corporation website'
    }
]
portfolio.map(item => {
    let str = `
        <div class="portfolio-content__item">
            <div class="portfolio-content__item-inner">
                <img alt="preview of site" class="portfolio-content__item-img" src="${item.imgSrc}"/>
            </div>
            <div class="portfolio-content__item-inform">
                <h5 class="portfolio-content__item-title">${item.title}</h5>
                <p class="portfolio-content__item-text">${item.text}</p>
                <a href="${item.link}" class="portfolio-content__item-link">VIEW</a>
            </div>
        </div>
        `
    let doc = new DOMParser().parseFromString(str, 'text/html')
    document.getElementById("portfolio-content").append(doc.firstChild)
})