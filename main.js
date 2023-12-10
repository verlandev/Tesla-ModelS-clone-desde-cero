const banner$$ = document.querySelector(".banner");

const nav$$ = document.querySelector(".nav")
const headerLinks$$ = document.querySelector(".header-links")

const separatorH2$$ = document.querySelector(".separator__h2");
const infoContainers$$ = document.querySelectorAll(".hero-section__container");
const buttonsHero$$ = document.querySelector(".hero-section__buttons");

const captionTexts$$ = document.querySelectorAll(".descriptions-section__text");

const ctaSectionsTitles$$ = document.querySelectorAll(".cta-sections__titles");
const ctaSectionsDescription$$ = document.querySelectorAll(".cta-sections__description");

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
const rollout$$ = document.querySelector(".carousel-v2__p--rollout");
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
  detectingScroll(ctaSectionsTitles$$, scrollThreshold);
  detectingScroll(ctaSectionsDescription$$, scrollThreshold);
  detectingScroll(heroInformativeInfo$$, scrollThreshold);
  detectingScroll(heroInformativeCtaButtons$$, scrollThreshold);
  detectingScroll([containerOne$$], scrollThreshold);
  detectingScroll([containerTwo$$], scrollThreshold);
  detectingScroll([containerThree$$], scrollThreshold);
  detectingScroll([specificationsShowcasesPanel$$], scrollThreshold);
  detectingScroll([rollout$$], scrollThreshold);
}
window.addEventListener('scroll', handleScroll);


// window.addEventListener("scroll", function () {
//   var scrollYValue = window.scrollY;
//   console.log(scrollYValue); // Esto imprimirá el valor actual de scrollY en la consola.
// });


/**
 * Se inicializan los elementos del carrusel: vídeos, botones circulares y contenidos.
 * Se seleccionan y almacenan en arreglos para su posterior uso
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
 * Función para gestionar la visualización del carrusel al hacer clic en un círculo.
 * Se desactivan los elementos a modo de reset y se activa solo el contenido correspondiente al índice actual.
 * 
 * @param {number} index - El índice del círculo seleccionado
 */

const carouselV1 = async (index) => {
  try {
    // Desactiva todos los elementos a modo de reset
    circles$$.forEach((circle) => circle.classList.remove("circle-active"));
    videos$$.forEach((video) => video.classList.add("inactive"));
    contents$$.forEach((content) => content.classList.add("inactive"));
  
    if (index >= 0) {
      // Y activa solo el contenido correspondiente al pulsar uno de los botones
      circles$$[index].classList.add("circle-active");
      videos$$[index].classList.remove("inactive");
      contents$$[index].classList.remove("inactive");
    }
    
  } catch (error) {
    console.log("Error en la función de carouselV1", error)
  }
};

/**
 * Conseguimos que el carrusel vaya en autoplay con 5 segundos para cada diapositiva.
 * Establecemos el índice actual, el tiempo de intervalo y un identificador para controlar la transición automática del carrusel
 */

let currentIndex = 0;
const intervalTime = 5000;
let intervalId;

const nextSlide = () => {
  try {
    currentIndex = (currentIndex + 1) % circles$$.length;
    carouselV1(currentIndex)    
  } catch (error) {
    console.log("Error en la función de nextSlide", error)
  }
}

/**
 * Iniciamos el intervalo automático del carrusel una vez se carga la página.
 * Nos aseguramos de mostrar la primera diapositiva al cargar la página
 */

const startInterval = () => {
  try {
    intervalId = setInterval(nextSlide, intervalTime)
  } catch (error) {
    console.log("error en la función startInterval", error)    
  }
}

carouselV1(currentIndex)
startInterval()

/**
 * Asigna un evento clic a cada botón circular para controlar la función "carouselV1"
 */

circles$$.forEach((circle, index) =>
  circle.addEventListener("click", () => {
    try {
      currentIndex = index;
      carouselV1(currentIndex);
    } catch (error) {
      console.log("Error en la función de clic", error)
    }
  })
);



/**
 * Inicializa un carrusel de tipo específico para gestionar la interacción de los elementos.
 * @param {string} carouselType 'models' o 'countries' según las clases aplicadas en el proyecto.
 */

const carouselVersion2 = (carouselType) => {
  const container$$ = document.querySelector(`.carousel-v2__slider--${carouselType}`) 
  const slides$$ = document.querySelectorAll(`.carousel-v2__slide--${carouselType}`);
  const images$$ = document.querySelectorAll(`.carousel-v2__asset--${carouselType}`);
  

  // Aplicamos el manejo de slides actualizando las clases
  slides$$.forEach((slide, index) =>
    slide.addEventListener("click", () => {
      if (carouselType === "models" || carouselType === "countries" || carouselType === 'features') {
        slides$$.forEach((slide) => slide.classList.remove("slide-active"));
        images$$.forEach((image) => image.classList.add("inactive"));

        if (index >= 0) {
          slides$$[index].classList.add("slide-active");
          images$$[index].classList.remove("inactive");          
        }

        if (window.innerWidth <= 768) {
          if(carouselType === 'models') {
            let position = index
            let operation = position * -40
            container$$.style.transform = `translateX(${operation}%)`
            container$$.style.transition = "0.5s ease"
          } else if (carouselType === 'countries' || carouselType === 'features') {
            const slideWidth = slides$$[0].offsetWidth
            console.log(slideWidth)
            let position = index
            let operation = position * (-slideWidth)
            container$$.style.transform = `translateX(${operation}px)`
            container$$.style.transition = "0.5s ease"
          }       
         
        }
      }

    })
    );
};


carouselVersion2("models");
carouselVersion2("countries");
carouselVersion2("features");

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

//console.log(window.innerWidth)