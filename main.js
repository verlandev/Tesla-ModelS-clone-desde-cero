window.onscroll = function() {
    let y = window.scrollY;
    //console.log(y)
}

const separatorH2$$ = document.querySelector('.separator__h2')
const scrollSeparatorH2 = 450
// const heroInfo$$ = document.querySelector('.heroInfo')
// const scrollHeroInfo = 200
const infoContainers$$ = document.querySelectorAll('.infoContainer')
const scrollInfoContainers = 450

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

window.addEventListener("scroll", function() {
    detectingScroll([separatorH2$$], 450)
    
    infoContainers$$.forEach(function(container){
        detectingScroll([container], 450)
    })

})