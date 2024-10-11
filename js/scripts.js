/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
// Navbar shrink function
var navbarShrink = function () {
    // Selecciona el elemento de la barra de navegación
    const navbarCollapsible = document.body.querySelector('#mainNav');
    // Selecciona las imágenes por ID
    const imagenBlanco = document.getElementById('img-edoB');
    const imagenColor = document.getElementById('img-edoC');

    // Verifica si navbarCollapsible existe
    if (!navbarCollapsible) {
        return;
    }

    //Lógica para agregar o quitar clases en función del scroll
    if (window.scrollY === 0) {
        //navbarCollapsible.classList.remove('navbar-shrink', 'navbar-shrink--blue');
        navbarCollapsible.classList.add('navbar-shrink--blue');
        imagenBlanco.style.display = 'block';
        imagenColor.style.display = 'none';
    } else if (window.scrollY <= 400) {
        navbarCollapsible.classList.add('navbar-shrink--blue');
        imagenBlanco.style.display = 'block';
        imagenColor.style.display = 'none';
    } else if (window.scrollY >= 400) {
        navbarCollapsible.classList.add('navbar-shrink--blue');
        imagenBlanco.style.display = 'block';
        imagenColor.style.display = 'none';
    }
    
};

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});


//barra de progreso
document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.scroll-container');
    const progressBar = document.querySelector('.scroll-progress-bar');

    scrollContainer.addEventListener('scroll', function() {
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const scrollLeft = scrollContainer.scrollLeft;
        const scrollPercentage = (scrollLeft / maxScrollLeft) * 100;
        progressBar.style.width = scrollPercentage + '%';
    });
});


//animacion scroll
document.addEventListener("DOMContentLoaded", function (){
    const container = document.querySelector("#scrollContainer");
    let hasScrolled = false;
    let animationInterval;

    //agregar animacion
    function addAnimation() {
        if (!hasScrolled) {
            container.classList.add("hero-scroll-gallery__container--animate-hero");
            //Remover la clase despues de la animacion para que se pueda reiniciar
            setTimeout(() => {
               container.classList.remove("hero-scroll-gallery__container--animate-hero"); 
            }, 1400);
        }
    }

    //Funcion para inicializar el intervalo de animacion
    function startAnimationInterval() {
        animationInterval = setInterval(addAnimation, 3 * 1000); //05s      
    }


    //Detectar scroll en el contenedor carrusel
    container.addEventListener("scroll", function () {
        hasScrolled = true;
        // Detener el intervalo si el usuario ha deslizado
        clearInterval(animationInterval);
        // Iniciar el intervalo de animación
    });
        // Iniciar el intervalo de animacións
        startAnimationInterval();
});

