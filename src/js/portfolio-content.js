const portfolio = [
    {
        imgSrc: './src/img/it_company.html.webp',
        link: './src/portfolio/it_company_2/it_company.html',
        title: 'It Company',
        text: 'Corporation website',
        type: 'homepage'
    },
    {
        imgSrc: './src/img/trans_light.html.webp',
        link: './src/portfolio/trans_light_3/trans_light.html',
        title: 'Trans-light',
        text: 'Corporation website',
        type: 'homepage'
    },
    {
        imgSrc: './src/img/porten_clock.html.webp',
        link: './src/portfolio/porten_clock_1/porten_clock.html',
        title: 'porten-clock',
        text: 'Corporation website',
        type: 'homepage'
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
                <h5 class="portfolio-content__item-title">${item.title}</h5>
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

const homepages = () => {
    clearClasses()
    document.getElementById('homepages').classList.add('_active')
    container.innerHTML = '';
    portfolio.map(item => {
        if (item.type === 'homepage') {
            addItems(item)
        }
    })
}

const landings = () => {
    clearClasses()
    document.getElementById('landings').classList.add('_active')
    container.innerHTML = '';
    portfolio.map(item => {
        if (item.type === 'landings') {
            addItems(item)
        }
    })
}

const ecommerce = () => {
    clearClasses()
    document.getElementById('ecommerce').classList.add('_active')
    container.innerHTML = '';
    portfolio.map(item => {
        if (item.type === 'ecommerce') {
            addItems(item)
        }
    })
}