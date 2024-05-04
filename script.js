let menuIcon = document.querySelector('#menu-icon');
let navbar=Document.querySelector('.navbar');
let sections=document.querySelector('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute;

        if(top >= offset && top <offset+height){
            navlinks.forEach(links=>{
                links.classList.remove('header nav a [href*='+ id+'] ').classList.add
                ('active')
            })
        }
    });
}