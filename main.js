const banner$$ = document.querySelector('.banner')

const separatorH2$$ = document.querySelector('.separator__h2')
const infoContainers$$ = document.querySelectorAll('.infoContainer')
const buttonsHero$$ = document.querySelector('.buttonsHero')

const captionTexts$$ = document.querySelectorAll('.captionText')

const ctaSectionsLeft$$ = document.querySelectorAll('.ctaSectionsLeft')
const ctaSectionsRight$$ = document.querySelectorAll('.ctaSectionsRight')

const heroInformativeInfo$$ = document.querySelectorAll('.hero-informative-info')
const heroInformativeCtaButtons$$ = document.querySelectorAll('.hero-informative-cta-buttons')

const containerOne$$ = document.querySelector('.tesla-vision-content-text--container-one')
const containerTwo$$ = document.querySelector('.tesla-vision-content-text--container-two')
const containerThree$$ = document.querySelector('.tesla-vision-content-text--container-three')

const specificationsShowcasesPanel$$ = document.querySelector('.slider-specifications-content')

const buttonShowcase1$$ = document.querySelector('.slider-specifications-content-buttons__button--modelPlaid')
const buttonShowcase2$$ = document.querySelector('.slider-specifications-content-buttons__button--modelS')
const showcase1$$ = document.querySelector('.slider-specifications-content-showcase1')
const showcase2$$ = document.querySelector('.slider-specifications-content-showcase2')

// Creamos una función que gestione el banner

const detectingBanner = () => {
    if(scrollY === 0) {
        banner$$.classList.add('inactive')
    } if(scrollY >= 100){
        banner$$.classList.remove('inactive')
    } 
}

// Creamos una función que al pulsar un botón muestre uno u otro showcase

buttonShowcase1$$.addEventListener('click', () => {
    showcase1$$.style.display = 'block';
    showcase2$$.style.display = 'none'
    buttonShowcase2$$.classList.remove('button-on')
    buttonShowcase1$$.classList.add('button-on')
})

buttonShowcase2$$.addEventListener('click', () => {
    showcase1$$.style.display = 'none';
    showcase2$$.style.display = 'block';
    buttonShowcase2$$.classList.add('button-on')
    buttonShowcase1$$.classList.remove('button-on')
    buttonShowcase1$$.classList.add('button-off')
})


// Creamos una función que identifique la altura del scroll a cada vez

function detectingScroll(elements, scrollOffset) {
    elements.forEach(function(element){
        const elementOffset = element.getBoundingClientRect().top + scrollY;

        if(scrollY >= elementOffset - scrollOffset) {
            element.classList.add('active')
        } else {
            element.classList.remove('active')
        }
    })
}

detectingBanner()
// Creamos otra función que añade o quita la clase "active" en función del scroll
// y agregamos un setTimeOut para replicar el efecto de la página y que los elementos
// aparezcan en distinto orden

window.addEventListener('scroll', () => {
    detectingBanner()

    setTimeout(() => {
        detectingScroll([separatorH2$$], 450)
    },500)

    setTimeout(() => {
        infoContainers$$.forEach((container) => {
            detectingScroll([container], 450)
        })
    }, 200)

    setTimeout(() => {
        detectingScroll([buttonsHero$$], 450)
    }, 700)

    setTimeout(() => {
        captionTexts$$.forEach((caption) => {
            detectingScroll([caption], 500)
        })
    }, 500)

    setTimeout(() => {
        ctaSectionsLeft$$.forEach((ctaSection) => {
            detectingScroll([ctaSection], 500)
        })
    }, 300)

    setTimeout(() => {
        ctaSectionsRight$$.forEach((ctaSection) => {
            detectingScroll([ctaSection], 500)
        })
    }, 100)

    setTimeout(() => {
        heroInformativeInfo$$.forEach((videoInfo) => {
            detectingScroll([videoInfo], 500)
        })
    }, 100)

    setTimeout(() => {
        heroInformativeCtaButtons$$.forEach((heroInformativeCtaButton) => {
            detectingScroll([heroInformativeCtaButton], 500)
        })
    }, 100)

    setTimeout(() => {
        detectingScroll([containerOne$$], 450)
    }, 200)

    setTimeout(() => {
        detectingScroll([containerTwo$$],450)
    }, 500)

    setTimeout(() => {
        detectingScroll([containerThree$$], 450)
    }, 800)

    setTimeout(() => {
        detectingScroll([specificationsShowcasesPanel$$], 450)
    }, 800)
})

window.addEventListener('scroll', function() {
    var scrollYValue = window.scrollY;
    console.log(scrollYValue); // Esto imprimirá el valor actual de scrollY en la consola.
});