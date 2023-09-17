window.onscroll = function() {
    let y = window.scrollY;
    //console.log(y)
}

const separatorH2$$ = document.querySelector('.separator__h2')
const scrollSeparatorH2 = 450
const infoContainer$$ = document.querySelector('.infoContainer')
const scrollInfoContainer = 300

window.addEventListener("scroll", function() {
    if(scrollY >= scrollSeparatorH2) {
        separatorH2$$.classList.add('active')
    } if (scrollY < scrollSeparatorH2) {
        separatorH2$$.classList.remove('active')
    }
})