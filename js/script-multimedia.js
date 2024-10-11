// Selecciona todos los elementos de video y tooltip
const videos = document.querySelectorAll('.video');
const tooltips = document.querySelectorAll('#tooltip');

videos.forEach((video, index) => {
  const tooltip = tooltips[index];

  // Mostrar el tooltip y reproducir el video cuando el mouse pasa por encima
  video.addEventListener('mouseover', function() {
    tooltip.style.visibility = 'visible';
    video.play();
  });

  // Ocultar el tooltip y pausar el video cuando se quita el mouse
  video.addEventListener('mouseout', function() {
    tooltip.style.visibility = 'hidden';
    video.pause();
  });
});

document.getElementById('videoContainer').addEventListener('click', function() {
    Swal.fire({
        title: 'Igualdad',
        html: `
           <iframe src="https://drive.google.com/file/d/1bdoG-xwIUHr1Qlds1ynxuz1mDeo2k4OF/preview" width="640" height="480" allow="autoplay"></iframe>
        `,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'Cerrar',
        width: 800,
        showClass: {
            popup: 'animate__animated animate__fadeInDown animate__faster tipografia-gob'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp tipografia-gob'
          },
          customClass:{
            confirmButton: 'custom-ok-button--encuesta'
          }
    });
});

document.getElementById('videoContainer2').addEventListener('click', function() {
    Swal.fire({
        title: 'Señal de Auxilio',
        html: `
            <iframe src="https://drive.google.com/file/d/1UZxsj5jmdQBH0LxOCpLqY4DjglZ5KobX/preview" width="640" height="480" allow="autoplay"></iframe>
        `,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'Cerrar',
        width: 800,
        showClass: {
            popup: 'animate__animated animate__fadeInDown animate__faster tipografia-gob'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp tipografia-gob'
          },
          customClass:{
            confirmButton: 'custom-ok-button--encuesta'
          }
    });
});

document.getElementById('videoContainer3').addEventListener('click', function() {
    Swal.fire({
        title: 'Señal de Auxilio',
        html: `
            <video width="100%" controls>
                <source src="../../assets/multimedia/Spot Señal VGEM (No Veda).mp4" type="video/mp4">
                Tu navegador no soporta el elemento de video.
            </video>
        `,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'Cerrar',
        width: 800,
        showClass: {
            popup: 'animate__animated animate__fadeInDown animate__faster tipografia-gob'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp tipografia-gob'
          },
          customClass:{
            confirmButton: 'custom-ok-button--encuesta'
          }
    });
});

document.getElementById('videoContainer4').addEventListener('click', function() {
    Swal.fire({
        title: 'Igualdad',
        html: `
            <video width="100%" controls>
                <source src="../../assets/multimedia/caja de Herramientas V3 HD.mp4" type="video/mp4">
                Tu navegador no soporta el elemento de video.
            </video>
        `,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'Cerrar',
        width: 800,
        showClass: {
            popup: 'animate__animated animate__fadeInDown animate__faster tipografia-gob'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp tipografia-gob'
          },
          customClass:{
            confirmButton: 'custom-ok-button--encuesta'
          }
    });
});

document.getElementById('videoContainer5').addEventListener('click', function() {
    Swal.fire({
        title: 'Señal de Auxilio',
        html: `
            <video width="100%" controls>
                <source src="../../assets/multimedia/Spot Señal VGEM (No Veda).mp4" type="video/mp4">
                Tu navegador no soporta el elemento de video.
            </video>
        `,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'Cerrar',
        width: 800,
        showClass: {
            popup: 'animate__animated animate__fadeInDown animate__faster tipografia-gob'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp tipografia-gob'
          },
          customClass:{
            confirmButton: 'custom-ok-button--encuesta'
          }
    });
});

document.getElementById('videoContainer6').addEventListener('click', function() {
    Swal.fire({
        title: 'Igualdad',
        html: `
            <video width="100%" controls>
                <source src="../../assets/multimedia/caja de Herramientas V3 HD.mp4" type="video/mp4">
                Tu navegador no soporta el elemento de video.
            </video>
        `,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'Cerrar',
        width: 800,
        showClass: {
            popup: 'animate__animated animate__fadeInDown animate__faster tipografia-gob'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp tipografia-gob'
          },
          customClass:{
            confirmButton: 'custom-ok-button--encuesta'
          }
    });
});

document.getElementById('videoContainer7').addEventListener('click', function() {
    Swal.fire({
        title: 'Señal de Auxilio',
        html: `
            <video width="100%" controls>
                <source src="../../assets/multimedia/Spot Señal VGEM (No Veda).mp4" type="video/mp4">
                Tu navegador no soporta el elemento de video.
            </video>
        `,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'Cerrar',
        width: 800,
        showClass: {
            popup: 'animate__animated animate__fadeInDown animate__faster tipografia-gob'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp tipografia-gob'
          },
          customClass:{
            confirmButton: 'custom-ok-button--encuesta'
          }
    });
});

document.getElementById('videoContainer8').addEventListener('click', function() {
    Swal.fire({
        title: 'Igualdad',
        html: `
            <video width="100%" controls>
                <source src="../../assets/multimedia/caja de Herramientas V3 HD.mp4" type="video/mp4">
                Tu navegador no soporta el elemento de video.
            </video>
        `,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'Cerrar',
        width: 800,
        showClass: {
            popup: 'animate__animated animate__fadeInDown animate__faster tipografia-gob'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp tipografia-gob'
          },
          customClass:{
            confirmButton: 'custom-ok-button--encuesta'
          }
    });
});

document.getElementById('videoContaine9').addEventListener('click', function() {
    Swal.fire({
        title: 'Señal de Auxilio',
        html: `
            <video width="100%" controls>
                <source src="../../assets/multimedia/Spot Señal VGEM (No Veda).mp4" type="video/mp4">
                Tu navegador no soporta el elemento de video.
            </video>
        `,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'Cerrar',
        width: 800,
        showClass: {
            popup: 'animate__animated animate__fadeInDown animate__faster tipografia-gob'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp tipografia-gob'
          },
          customClass:{
            confirmButton: 'custom-ok-button--encuesta'
          }
    });
});

document.getElementById('videoContainer10').addEventListener('click', function() {
    Swal.fire({
        title: 'Igualdad',
        html: `
            <video width="100%" controls>
                <source src="../../assets/multimedia/caja de Herramientas V3 HD.mp4" type="video/mp4">
                Tu navegador no soporta el elemento de video.
            </video>
        `,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'Cerrar',
        width: 800,
        showClass: {
            popup: 'animate__animated animate__fadeInDown animate__faster tipografia-gob'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp tipografia-gob'
          },
          customClass:{
            confirmButton: 'custom-ok-button--encuesta'
          }
    });
});

document.getElementById('videoContainer11').addEventListener('click', function() {
    Swal.fire({
        title: 'Señal de Auxilio',
        html: `
            <video width="100%" controls>
                <source src="../../assets/multimedia/Spot Señal VGEM (No Veda).mp4" type="video/mp4">
                Tu navegador no soporta el elemento de video.
            </video>
        `,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'Cerrar',
        width: 800,
        showClass: {
            popup: 'animate__animated animate__fadeInDown animate__faster tipografia-gob'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp tipografia-gob'
          },
          customClass:{
            confirmButton: 'custom-ok-button--encuesta'
          }
    });
});

document.getElementById('videoContainer12').addEventListener('click', function() {
    Swal.fire({
        title: 'Igualdad',
        html: `
            <video width="100%" controls>
                <source src="../../assets/multimedia/caja de Herramientas V3 HD.mp4" type="video/mp4">
                Tu navegador no soporta el elemento de video.
            </video>
        `,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'Cerrar',
        width: 800,
        showClass: {
            popup: 'animate__animated animate__fadeInDown animate__faster tipografia-gob'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp tipografia-gob'
          },
          customClass:{
            confirmButton: 'custom-ok-button--encuesta'
          }
    });
});