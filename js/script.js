/* ==========  menu show ===========*/

// const showMenu = (toggleId, navId)=>{
//     const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId)

//     if ( toggle && nav) {
//         toggle.addEventListener('click', ()=>{
//             nav.classList.toggle('show')
//         })
//     }
// }


// showMenu('nav-toggle', 'nav-menu')

const ToggId = document.getElementById('toggId')
const Menu = document.getElementById('nav-menu') 
ToggId.onclick =() => Menu.classList.toggle('show')


/* ========== active and remove menu  ===========*/
const navLink = document.querySelectorAll('.nav__link')

function LinkAction (){
    // active link
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')

// remove menu mobil
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n=> n.addEventListener('click',LinkAction ))

/* ========== scroll reveal animation  ===========*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '88px',
    duration: 2000,
    reset: true
})
/*scrool home*/
sr.reveal('.home__title',{})
sr.reveal('.button',{delay:200})
sr.reveal('.home__img',{delay:400})
sr.reveal('.home__social__icons',{interval: 200})
/*scrool about*/
sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay:400})
sr.reveal('.about__text',{delay:400})

/* scrool skill */
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay: 200})
sr.reveal('.skills__data',{interval: 400})
sr.reveal('.skill__img',{delay:400})
/* work skill */
sr.reveal('.work__img',{interval: 400})
/* contact skill */
sr.reveal('.contact__input',{interval: 400})