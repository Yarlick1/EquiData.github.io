//PARA CREAR UN LOAD ANTES DE QUE CARGUE EL CONTENIDO

// Función para iniciar la animación
function startAnimation() {
    anime({
      targets: '.animated-div',
      translateX: '5rem',
      scale: [.75, .9],
      delay: function(el, index) {
        return index * 30;
      },
      direction: 'alternate',
      loop: true
    });
  }

  // Función para ocultar los elementos animados y mostrar el nuevo elemento
  function showNewElement() {
    const animatedDivs = document.getElementById('animatedDivs');
    const newElement = document.getElementById('newElement');
    // Ocultar los divs animados
    animatedDivs.classList.add('hidden');
    
    // Mostrar el nuevo elemento
    newElement.classList.remove('hidden');
  }

  // Iniciar la animación
  startAnimation();

  // Establecer un temporizador de 5 segundos antes de cambiar los elementos
  setTimeout(showNewElement, 5000);