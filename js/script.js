// Grabbing elements function (preety the same to jQuery func)

const selectElem = selector => {
    const elem = document.querySelector(selector)
    if (elem) {
        return elem;
    }
    throw new Error(`Something wwent wrong, make sure that ${selector} exist or is typed correctly`)
}



// Styling navbar when scroll 
const scrollHeader = () => {
    const headerElem = selectElem('#header')
    if (this.scrollY >= 15){
        headerElem.classList.add('activated')
    }else{
        headerElem.classList.remove('activated')
    }
}
window.addEventListener('scroll', scrollHeader) 

// Toggle opening menu

const menuToggleIcon = selectElem ('#menu-toggle-icon')

const toggleMenu = () => {
    const mobileMenu = selectElem('#menu')
    mobileMenu.classList.toggle('activated')
    menuToggleIcon.classList.toggle('activated')
}

menuToggleIcon.addEventListener('click', toggleMenu)

// Toggle to switch theme and store current one in the local storage
// Selecting elements to work with
const bodyElem = document.body;
const themeToggleBtn = selectElem('#theme-toggle-btn')
const currentTheme = localStorage.getItem('currentTheme')
themeToggleBtn.addEventListener('click', () => {
    bodyElem.classList.toggle('light-theme')
    // if light theme is set it will be stored in local storage, when class gets removed it will be removed from localStorage respectively
    if (bodyElem.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', "themeActive")
    } else {
        localStorage.removeItem('currentTheme')
    }
})
// if light theme is in local storage it will be applied automatically if you close and open site 
if (currentTheme) {
    bodyElem.classList.add('light-theme')
}

// Search form toggle

// Selecting elems we are going to work with
const searchBtn = selectElem('#search-icon')
const closeBtn = selectElem('#form-close-btn')
const searchForm = selectElem('.search-form-container')
// Event listener to open search window
searchBtn.addEventListener ('click' , () => {
    searchForm.classList.add('activated')
})


// Event listener to close search window using button
closeBtn.addEventListener('click', () => {
    searchForm.classList.remove('activated')
})
// Event listener to close search window using Escape key on keyboard
window.addEventListener('keyup', (e) => {
    if(e.key === 'Escape') {
        searchForm.classList.remove('activated')
    }
})

// Sign in form toggle

// Selecting elements to work with

const sign_in = selectElem('#sign-in')
const closeBtnSI = selectElem('#form-close-btn-1')
const sign_inForm = selectElem('.sign-in-form-container')
const sign_in1 = selectElem('#sign-in-1')

console.log(sign_in)
console.log(closeBtnSI)
console.log(sign_inForm)
console.log(sign_in1)

// Event listener to open sign in window


sign_in.addEventListener('click', () => {
    sign_inForm.classList.add('activated')
})

// Event listener to close sign in window using btn 
closeBtnSI.addEventListener('click', () => {
    sign_inForm.classList.remove('activated')
})
// Event listener to close sign in window using esc key

window.addEventListener('keyup', (e) => {
    if(e.key === 'Escape') {
        sign_inForm.classList.remove('activated')
    }
})

// Swiper.js code 
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination : {
        el :'.swiper-pagination'
    },
    breakpoints: {
        700: {
           slidesPerView: 2 
        },
        1200: {
           slidesPerView: 3 
        }
    }
})

