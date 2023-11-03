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
const rollout$$ = document.querySelector('.carouselV2__p--rollout')


/**
 * Esta función muestra u oculta el banner en función de la posición del scroll.
 */

const detectingBanner = () => {
    if(scrollY === 0) {
        banner$$.classList.add('inactive')
    } if(scrollY >= 100){
        banner$$.classList.remove('inactive')
    } 
}

/**
 * Detecta el desplazamiento de la página y aplica una clase CSS a los elementos según su posición en la ventana.
 *
 * @param {Array} elements - Un array de elementos HTML a los que se aplicará la clase 'active' cuando estén en la vista.
 * @param {number} scrollOffset - La cantidad de desplazamiento (scroll) en píxeles requerida para activar los elementos.
 */

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

    setTimeout(() => {
        detectingScroll([rollout$$], 550)
    })
})

window.addEventListener('scroll', function() {
    var scrollYValue = window.scrollY;
    console.log(scrollYValue); // Esto imprimirá el valor actual de scrollY en la consola.
});


const videos$$ = []
const circles$$ = []
const contents$$ = []

for (let i = 1; i <=5; i++){
    videos$$.push(document.querySelector(`.video${i}`))
    circles$$.push(document.querySelector(`.circle${i}`))
    contents$$.push(document.querySelector(`.content${i}`))
}


/**
 * Gestiona la activación y desactivación de elementos en el carrusel 
 * al hacer clic en uno de los círculos/botón.
 *
 * @param {Element} button - El botón/circulo en el que se hizo clic.
 */

const carouselV1 = (button) => {
    // Desactiva todos los elementos a modo de reset
    circles$$.forEach((circle) => circle.classList.remove('circle-active'))
    videos$$.forEach((video) => video.classList.add('inactive'))
    contents$$.forEach((content) => content.classList.add('inactive'))

    const index = circles$$.indexOf(button);
    if (index >= 0) {
        // Y activa solo el contenido correspondiente al pulsar uno de los botones
        circles$$[index].classList.add('circle-active');
        videos$$[index].classList.remove('inactive');
        contents$$[index].classList.remove('inactive');
    }
}


/**
 * Asigna un evento de clic a cada círculo para controlar la función 'carouselV1'.
 */
    
circles$$.forEach((circle, index) => circle.addEventListener('click', () =>{
    carouselV1(circles$$[index])
}))




/**
 * Agrega un evento 'click' a cada elemento del carrusel.
 * Al hacer clic en un elemento del carrusel, se activa ese elemento y se desactivan los demás.
 */

const carouselV2 = () => {
    
    const slides$$ = document.querySelectorAll('.slider__slide')
    const images$$ = document.querySelectorAll('.carouselV2__img')
    
    slides$$.forEach((slide, index) => slide.addEventListener('click', () => {

        slides$$.forEach((slide) => slide.classList.remove('isSlideActive'))
        images$$.forEach((image) => image.classList.add('inactive'))

        if (index >= 0) {
            slides$$[index].classList.add('isSlideActive')
            images$$[index].classList.remove('inactive')
        } 
    }))

    
}

carouselV2()



/**
 * Maneja el clic en el botón de showcase 1 en la sección "slider-specifications".
 * Muestra el primer showcase y oculta el segundo.
 */

buttonShowcase1$$.addEventListener('click', () => {
    showcase1$$.style.display = 'block';
    showcase2$$.style.display = 'none'
    buttonShowcase2$$.classList.remove('button-on')
    buttonShowcase1$$.classList.add('button-on')
})

/**
 * Maneja el clic en el botón de showcase 2.
 * Muestra el segundo showcase y oculta el primero.
 */

buttonShowcase2$$.addEventListener('click', () => {
    showcase1$$.style.display = 'none';
    showcase2$$.style.display = 'block';
    buttonShowcase2$$.classList.add('button-on')
    buttonShowcase1$$.classList.remove('button-on')
    buttonShowcase1$$.classList.add('button-off')
})






