//alerta categorias -- variables USO PARA RESPONSIVE
function violencia_genero() {
    Swal.fire({
        title: '<img src="assets/img/iconos-categorias/violencia-genero2.png" alt="Violencia de Género" class="icono-categoria--alertas">Violencia de Género',          
        html: `
            <ul class="categorias-lista--sweet tipografia-gob">
                <li class="categoria-item"><a href="views/categorias.php?contenedor-1-v">Carpeta de investigación por delitos contra la familia 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-2-v">Carpetas de investigación por abuso sexual 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-3-v">Carpetas de investigación por acoso sexual 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-4-v">Carpetas de investigación por delitos contra la libertad y seguridad sexual 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-5-v">Carpetas de investigación por el delito de hostigamiento 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-6-v">Carpetas de investigación por el delito de Incesto 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-7-v">Carpetas de investigación por el delito de violación simple y equiparada 2021</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-8-v">Carpetas de investigación por el presunto delito de feminicidio 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-9-v">Carpetas de investigación por violencia de género 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-10-v">Carpetas de investigación por violencia familiar 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-11-v">Carpetas de investigación relacionadas con el delito de trata de personas 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-12-v">Defunciones por homicidio m-h 2020</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-13-v">Incumplimiento de obligaciones de asistencia familiar 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-14-v">Llamadas de emergencia  violencia contra la pareja 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-15-v">Llamadas de emergencia acoso u hostigamiento sexual 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-16-v">Llamadas de emergencia incidentes de violencia contra la  Mujeres 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-17-v">Llamadas de emergencia relacionadas con incidentes de violación Mujeres 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-18-v">Llamadas de emergencia relacionadas con incidentes de violencia familiar 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-19-v">Llamadas de emergencia trata de personas Mujeres 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-20-v">Llamadas de emergencia violación infantil Mujeres 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-21-v">Operativos  transporte público 2021</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-22-v">Personas localizadas con vida M-H-I 2020</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-23-v">Personas localizadas sin vida M-H-I 2020</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-24-v">Quejas  Conductas sexuales inapropiadas por parte del  2021</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-25-v">Quejas recibidas en relación a actos de violencia en el transporte 2021</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-26-v">Quejas recibidas en relación a actos de violencia en el transporte público (personas afectadas) m-h 2021</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-27-v">Reportes por desaparición de personas mujeres - hombres- indeterminado 2020</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-28-v">Llamadas de emergencia trata de personas Mujeres 2022</a></li>
                <button id="ver-mas-v" class="btn-ver-mas">+</button>
            </ul>`,
        showConfirmButton: false,  // Ocultamos el botón de confirmación
        position: "center",
        backdrop: '#2b2b2c69',
        width: 800,  
        showClass: {
            popup: 'animate__animated animate__fadeInDownBig'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutDown'
        },
        customClass:{
            popup: 'custom-swal-popup',
            confirmButton: 'custom-ok-button'
        },
        didOpen: () => {
             //botón de cerrar en la esquina superior derecha
             const closeButton = document.createElement('button');
             closeButton.innerHTML = '&times;'; // símbolo
             closeButton.classList.add('custom-close-button');
             closeButton.onclick = () => Swal.close(); // Cerrar 
             document.querySelector('.swal2-popup').prepend(closeButton);

            let items = document.querySelectorAll('.categoria-item');
            let verMasBtn = document.getElementById('ver-mas-v');
            let itemsToShow = 10;  // Número de elementos a mostrar inicialmente
            let totalItems = items.length;

            // Ocultar todos menos los primeros 10
            items.forEach((item, index) => {
                if (index >= itemsToShow) {
                    item.style.display = 'none';
                }
            });

            // Manejar el clic del botón para mostrar más
            verMasBtn.addEventListener('click', () => {
                let hiddenItems = [...items].filter(item => item.style.display === 'none');
                hiddenItems.slice(0, 10).forEach(item => {
                    item.style.display = 'list-item';
                });

                // Si ya se han mostrado todos los elementos, ocultar el botón
                if (hiddenItems.length <= 10) {
                    verMasBtn.style.display = 'none';
                }
            });
        }
    });
}

function igualdad_legal() {
    Swal.fire({
        title: ' <img src="assets/img/iconos-categorias/igualdad-legal.png" class="icono-categoria--alertas" alt="Igualdad Legal">Igualdad Legal',          
        html: `
            <ul class="categorias-lista--sweet tipografia-gob">
                <li class="categoria-item"><a href="views/categorias.php?contenedor-1-il">Acceso a servicios especializados en violencia de género mujeres 2020</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-2-il">Delitos por violencia obstétrica por distrito 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-3-il">Instancias receptoras de denuncias de violencia contra las mujeresm 2021</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-4-il">Niñas y niños con referentes privados de la libertad 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-5-il">Niñas y niños viviendo con sus madres privadas de la libertad 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-6-il">Personas relacionadas con la violencia de género m-h 2020</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-7-il">Población  recibir sentencia en la entidad, fuero común m-h 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-8-il">Población interna  en proceso de recibir sentencia, fuero federal m-h 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-9-il">Población interna sentenciada , fuero federal m-h 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-10-il">Población interna sentenciada en los centros preventivos  m-h 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-11-il">Población penitenciaria 2020</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-12-il">Programas sensibles al género m-h 2022</a></li>
                <li class="categoria-item"><a href="views/categorias.php?contenedor-13-il">Reparación del daño de las víctimas de violencia contra las mujeres m-h 2020</a></li>
                <button id="ver-mas-i" class="btn-ver-mas">+</button>
            </ul>`,
        showConfirmButton: false,  // Ocultamos el botón de confirmación
        position: "center",
        backdrop: '#2b2b2c69',
        width: 800,  
        showClass: {
            popup: 'animate__animated animate__fadeInDownBig'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutDown'
        },
        customClass:{
            popup: 'custom-swal-popup',
            confirmButton: 'custom-ok-button'
        },
        didOpen: () => {
             //botón de cerrar en la esquina superior derecha
             const closeButton = document.createElement('button');
             closeButton.innerHTML = '&times;'; // símbolo
             closeButton.classList.add('custom-close-button');
             closeButton.onclick = () => Swal.close(); // Cerrar 
             document.querySelector('.swal2-popup').prepend(closeButton);

            let items = document.querySelectorAll('.categoria-item');
            let verMasBtn = document.getElementById('ver-mas-i');
            let itemsToShow = 10;  // Número de elementos a mostrar inicialmente
            let totalItems = items.length;

            // Ocultar todos menos los primeros 10
            items.forEach((item, index) => {
                if (index >= itemsToShow) {
                    item.style.display = 'none';
                }
            });

            // Manejar el clic del botón para mostrar más
            verMasBtn.addEventListener('click', () => {
                let hiddenItems = [...items].filter(item => item.style.display === 'none');
                hiddenItems.slice(0, 10).forEach(item => {
                    item.style.display = 'list-item';
                });

                // Si ya se han mostrado todos los elementos, ocultar el botón
                if (hiddenItems.length <= 10) {
                    verMasBtn.style.display = 'none';
                }
            });
        }
    });
}