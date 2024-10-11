/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
      
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
    
