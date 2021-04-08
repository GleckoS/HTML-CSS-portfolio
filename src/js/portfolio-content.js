const portfolio = [
    {
        imgSrc: './src/img/it_company.html.webp',
        link: './src/portfolio/it_company_2/it_company.html',
        title: 'It Company',
        text: 'Corporation website',
        type: 'homepages'
    },
    {
        imgSrc: './src/img/trans_light.html.webp',
        link: './src/portfolio/trans_light_3/trans_light.html',
        title: 'Trans-light',
        text: 'Corporation website',
        type: 'homepages'
    },
    {
        imgSrc: './src/img/porten_clock.html.webp',
        link: './src/portfolio/porten_clock_1/porten_clock.html',
        title: 'porten-clock',
        text: 'Corporation website',
        type: 'homepages'
    },
    {
        imgSrc: './src/img/aninstudiourody.png',
        link: 'http://aninstudiourody.com',
        title: 'An & IN Studio Urody',
        text: 'Corporation website',
        type: 'homepages'
    },
    {
        imgSrc: './src/img/podrozy.png',
        link: './src/portfolio/podrozy_4/podrozy.html',
        title: 'Biuro podroży',
        text: 'Corporation website',
        type: 'ecommerce'
    },
    {
        imgSrc: './src/img/teremochek.png',
        link: 'https://teremochek.club',
        title: 'Child haircut',
        text: 'Corporation website',
        type: 'landings'
    }
]

let container = document.getElementById("portfolio-content")
let buttons = Array.from(document.querySelectorAll('.portfolio-sort__button'))

const addItems = (item) => {
    let str = `
        <div class="portfolio-content__item">
            <div class="portfolio-content__item-inner">
                <img alt="preview of site" class="portfolio-content__item-img" src="${item.imgSrc}"/>
            </div>
            <div class="portfolio-content__item-inform">
                <h3 class="portfolio-content__item-title">${item.title}</h3>
                <p class="portfolio-content__item-text">${item.text}</p>
                <a href="${item.link}" class="portfolio-content__item-link">VIEW</a>
            </div>
        </div>
        `
    let doc = new DOMParser().parseFromString(str, 'text/html')
    container.append(doc.firstChild)
}

const clearClasses = () => {
    buttons.forEach(node => {
        node.classList.remove('_active')
    })
}

const initialContent = () => {
    clearClasses()
    document.getElementById('all').classList.add('_active')
    container.innerHTML = '';
    portfolio.map(item => {
        addItems(item)
    })
}

const changeTab = (e) => {
    clearClasses()
    e.classList.add('_active')
    container.innerHTML = '';
    portfolio.map(item => {
        if (item.type === e.id) {
            addItems(item)
        }
    })
}
