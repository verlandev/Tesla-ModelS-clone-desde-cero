const banner$$ = document.querySelector(".banner");

const nav$$ = document.querySelector(".nav")
const headerLinks$$ = document.querySelector(".header-links")

const separatorH2$$ = document.querySelector(".separator__h2");
const infoContainers$$ = document.querySelectorAll(".hero-section__container");
const buttonsHero$$ = document.querySelector(".hero-section__buttons");

const captionTexts$$ = document.querySelectorAll(".descriptions-section__text");

const ctaSectionsLeft$$ = document.querySelectorAll(".cta-sections__left");
const ctaSectionsRight$$ = document.querySelectorAll(".cta-sections__right");

const heroInformativeInfo$$ = document.querySelectorAll(".hero-informative__info");
const heroInformativeCtaButtons$$ = document.querySelectorAll(".hero-informative-cta__buttons");

const containerOne$$ = document.querySelector(".tesla-vision__text--container-one");
const containerTwo$$ = document.querySelector(".tesla-vision__text--container-two");
const containerThree$$ = document.querySelector(".tesla-vision__text--container-three");

const specificationsShowcasesPanel$$ = document.querySelector(".slider-specifications__content");

const buttonShowcase1$$ = document.querySelector(".slider-specifications__button--modelPlaid");
const buttonShowcase2$$ = document.querySelector(".slider-specifications__button--modelS");
const showcase1$$ = document.querySelector(".slider-specifications__showcase1");
const showcase2$$ = document.querySelector(".slider-specifications__showcase2");
const rollout$$ = document.querySelector(".carouselV2__p--rollout");
const buttonMenu$$ = document.querySelector(".header__button-menu")


/**
 * Esta función muestra u oculta el banner en función de la posición del scroll.
 */

const detectingBanner = () => {
  if (scrollY === 0) {
    banner$$.classList.add("inactive");
  }
  if (scrollY >= 100) {
    banner$$.classList.remove("inactive");
  }
};


const menuResponsive = () => {
  // Versión mobile
  // Tengo que quitar el botón de menú a partir de que la pantalla sea superior o igual a 700
  if(window.innerWidth <= 800 ) {
    buttonMenu$$.classList.remove('inactive')
    nav$$.classList.add('inactive')
    headerLinks$$.classList.add('inactive')
    banner$$.classList.add('active')

  } else {
    buttonMenu$$.classList.add('inactive')
    nav$$.classList.remove('inactive')
    headerLinks$$.classList.remove('inactive')
  }
}

window.addEventListener('resize', menuResponsive);
window.addEventListener('orientationchange', menuResponsive);
window.onload = () => {
  menuResponsive(); // Llama a la función después de que todo ha cargado
};



/**
 * Detecta el desplazamiento de la página y aplica una clase CSS a los elementos según su posición en la ventana.
 *
 * @param {Array} elements - Un array de elementos HTML a los que se aplicará la clase 'active' cuando estén en la vista.
 * @param {number} scrollOffset - La cantidad de desplazamiento (scroll) en píxeles requerida para activar los elementos.
 */

function detectingScroll(elements, scrollOffset) {
  elements.forEach(function (element) {
    const elementOffset = element.getBoundingClientRect().top + scrollY;
    
    if (scrollY >= elementOffset - scrollOffset) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}


/**
 * Maneja el evento de desplazamiento y activa la detección de elementos específicos.
 * @function
 * @name handleScroll
 * @global
 */


const handleScroll = () => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight

  let scrollThreshold

  if(windowWidth >= 1200) {
    // Pantalla grande
    scrollThreshold = windowHeight * 0.9
  } else if(windowWidth >= 768) {
    // Pantalla mediana
    scrollThreshold = windowHeight * 0.3
  } else {
    // Pantalla pequeña
    scrollThreshold = windowHeight * 0.9
  }

  detectingBanner()
  detectingScroll(infoContainers$$, scrollThreshold);
  detectingScroll([separatorH2$$], scrollThreshold);
  detectingScroll([buttonsHero$$], scrollThreshold);
  detectingScroll(captionTexts$$, scrollThreshold);
  detectingScroll(ctaSectionsLeft$$, scrollThreshold);
  detectingScroll(ctaSectionsRight$$, scrollThreshold);
  detectingScroll(heroInformativeInfo$$, scrollThreshold);
  detectingScroll(heroInformativeCtaButtons$$, scrollThreshold);
  detectingScroll([containerOne$$], scrollThreshold);
  detectingScroll([containerTwo$$], scrollThreshold);
  detectingScroll([containerThree$$], scrollThreshold);
  detectingScroll([specificationsShowcasesPanel$$], scrollThreshold);
  detectingScroll([rollout$$], scrollThreshold);
}
window.addEventListener('scroll', handleScroll);


// const handleScroll = () => {

//   detectingBanner()

//   let width = window.innerWidth

//   if (900 <= width <= 2000) {
//     detectingScroll([separatorH2$$], 700);
//     detectingScroll(infoContainers$$, 500);
//     detectingScroll([buttonsHero$$], 500);
//     detectingScroll(captionTexts$$, 400);
//     detectingScroll(ctaSectionsLeft$$, 400);
//     detectingScroll(ctaSectionsRight$$, 400);
//     detectingScroll(heroInformativeInfo$$, 500);
//     detectingScroll(heroInformativeCtaButtons$$, 700);
//     detectingScroll([containerOne$$], 400);
//     detectingScroll([containerTwo$$], 400);
//     detectingScroll([containerThree$$], 400);
//     detectingScroll([specificationsShowcasesPanel$$], 500);
//     detectingScroll([rollout$$], 200);
//   }

 
// }


window.addEventListener("scroll", function () {
  var scrollYValue = window.scrollY;
  console.log(scrollYValue); // Esto imprimirá el valor actual de scrollY en la consola.
});


/**
 * Inicializa los elementos del carrusel: videos, círculos y contenidos.
 * Los selecciona y almacena en arreglos para su uso posterior.
 */
const videos$$ = [];
const circles$$ = [];
const contents$$ = [];

for (let i = 1; i <= 5; i++) {
  videos$$.push(document.querySelector(`.video${i}`));
  circles$$.push(document.querySelector(`.circle${i}`));
  contents$$.push(document.querySelector(`.content${i}`));
}
/**
 * A continuación gestiona la activación y desactivación de elementos en el carrusel
 * al hacer clic en uno de los círculos/botón.
 *
 * @param {Element} button - El botón/circulo en el que se hizo clic.
 */

const carouselV1 = (button) => {
  // Desactiva todos los elementos a modo de reset
  circles$$.forEach((circle) => circle.classList.remove("circle-active"));
  videos$$.forEach((video) => video.classList.add("inactive"));
  contents$$.forEach((content) => content.classList.add("inactive"));

  const index = circles$$.indexOf(button);
  if (index >= 0) {
    // Y activa solo el contenido correspondiente al pulsar uno de los botones
    circles$$[index].classList.add("circle-active");
    videos$$[index].classList.remove("inactive");
    contents$$[index].classList.remove("inactive");
  }
};

/**
 * Finalmente, asigna un evento de clic a cada círculo para controlar la función 'carouselV1'.
 */

circles$$.forEach((circle, index) =>
  circle.addEventListener("click", () => {
    carouselV1(circles$$[index]);
  })
);


/**
 * Inicializa un carrusel de tipo específico para gestionar la interacción de los elementos.
 * @param {string} carouselType 'models' o 'countries' según las clases aplicadas en el proyecto.
 */

const carouselV2 = (carouselType) => {

  const slides$$ = document.querySelectorAll(`.carousel2__slide--${carouselType}`);
  const images$$ = document.querySelectorAll(`.carousel2__asset--${carouselType}`);

  // Aplicamos el manejo de slides actualizando las clases
  slides$$.forEach((slide, index) =>
    slide.addEventListener("click", () => {
      if (carouselType === "models" || carouselType === "countries" || carouselType === 'features') {
        slides$$.forEach((slide) => slide.classList.remove("isSlideActive"));
        images$$.forEach((image) => image.classList.add("inactive"));

        if (index >= 0) {
          slides$$[index].classList.add("isSlideActive");
          images$$[index].classList.remove("inactive");
        }
      }
    })
  );
};

carouselV2("models");
carouselV2("countries");
carouselV2("features");

/**
 * Maneja el clic en el botón de showcase 1 en la sección "slider-specifications".
 * Muestra el primer showcase y oculta el segundo.
 */

buttonShowcase1$$.addEventListener("click", () => {
  showcase1$$.style.display = "block";
  showcase2$$.style.display = "none";
  buttonShowcase2$$.classList.remove("button-on");
  buttonShowcase1$$.classList.add("button-on");
});

/**
 * Maneja el clic en el botón de showcase 2.
 * Muestra el segundo showcase y oculta el primero.
 */

buttonShowcase2$$.addEventListener("click", () => {
  showcase1$$.style.display = "none";
  showcase2$$.style.display = "block";
  buttonShowcase2$$.classList.add("button-on");
  buttonShowcase1$$.classList.remove("button-on");
  buttonShowcase1$$.classList.add("button-off");
});

console.log(window.innerWidth)