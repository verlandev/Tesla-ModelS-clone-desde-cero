const banner$$ = document.querySelector('.banner')

const separatorH2$$ = document.querySelector('.separator__h2')
const infoContainers$$ = document.querySelectorAll('.infoContainer')
const buttonsHero$$ = document.querySelector('.buttonsHero')

// Creamos una función que gestione el banner

const detectingBanner = () => {
    if(scrollY === 0 || scrollY <= 70 ) {
        banner$$.classList.add('inactive')
    } if(scrollY >= 100){
        banner$$.classList.remove('inactive')
    } 
}


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

// Creamos otra función que añade o quita la clase "active" en función del scroll
// y agregamos un setTimeOut para replicar el efecto de la página y que los elementos
// aparezcan en distinto orden

window.addEventListener('scroll', () => {
    detectingBanner()

    setTimeout(() => {
        detectingScroll([separatorH2$$],450)
    },1000)

    setTimeout(() => {
        infoContainers$$.forEach(function(container){
            detectingScroll([container], 450)
        })
    }, 500)

    setTimeout(() => {
        detectingScroll([buttonsHero$$], 450)
    }, 1500)
})