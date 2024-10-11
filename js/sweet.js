//Sweet para encuesta
function mostrarEncuesta() {
    Swal.fire({
        title: '<h4 class="tipografia-gob">Encuesta de satisfacción EquiData <img src="assets/img/Logo-equidataok-icono.ico" alt="EquiData" class="icono-sweet--encuesta"></h4>',
        html: `
         
            <p class="tipografia-gob text-aling-justify font-zise--15px">Queremos mejorar tu experiencia de navegación en EquiData, por eso te pedimos que nos ayudes a responder esta breve encuesta. ¡Tu opinión es muy importante!</p>
            <div class="encuesta tipografia-gob">
                <label for="pregunta1" class="tipografia-gob">1. ¿Encontraste la información que buscabas?</label><br>
                <input type="radio" id="informacion_si" name="informacion" value="Sí" class="tipografia-gob">
                <label for="informacion_si" class="tipografia-gob">Sí</label><br>
                <input type="radio" id="informacion_no" name="informacion" value="No" class="tipografia-gob">
                <label for="informacion_no" class="tipografia-gob">No</label><br><br>
                
                <label for="objetivo" class="tipografia-gob">2. ¿Cuál fue el motivo de tu visita a la plataforma de EquiData?</label><br>

                <select name="objetivo" id="objetivo" class="tipografia-gob margin-top-1rem">
                <br><br>    
                    <option value="Investigación">Investigación</option>
                    <option value="Académico">Académico</option>
                    <option value="Personal">Personal</option>
                    <option value="Informativo">Informativo</option>
                    <option value="Consultoría">Consultoría</option>
                    <option value="Análisis de datos para creación de proyectos (Gobierno y servicio público)">Análisis de datos para creación de proyectos (Gobierno y servicio público)</option>
                    <option value="Análisis de datos para generar evaluaciones a las políticas públicas y proyectos con perspectiva de género (Organizaciones de la Sociedad Civil)">Análisis de datos para generar evaluaciones a las políticas públicas y proyectos con perspectiva de género........ver más</option>
                </select><br><br>

                <label for="informacion_busqueda" class="tipografia-gob">3. ¿Qué tipo de información buscaste?</label><br>
                <select name="informacion_busqueda[]" id="informacion_busqueda"  class="tipografia-gob margin-top-1rem">
                    <option value="Violencia de género">Violencia de género</option>
                    <option value="Igualdad legal">Igualdad legal</option>
                    <option value="Toma de decisiones">Toma de decisiones</option>
                    <option value="Desigualdad">Desigualdad</option>
                    <option value="Demografía">Demografía</option>
                    <option value="Población prioritaria">Población prioritaria</option>
                    <option value="Desarrollo económico">Desarrollo económico</option>
                    <option value="Salud y bienestar">Salud y bienestar</option>
                    <option value="Desarrollo educativo">Desarrollo educativo</option>
                    <option value="Niñas, niños y adolescentes">Niñas, niños y adolescentes</option>
                    <option value="Pacto por la Primera Infancia">Pacto por la Primera Infancia</option>
                </select><br><br>

                <label for="frecuencia">4. ¿Con que frecuencia consultas EquiData?</label><br>
                <select name="frecuencia" id="frecuencia" class="tipografia-gob margin-top-1rem">
                    <option value="Diario">Diario</option>
                    <option value="Semanalmente">Semanalmente</option>
                    <option value="Mensualmente">Mensualmente</option>
                    <option value="Casi nunca">Casi nunca</option>
                </select><br><br>

                <label for="nuevamente">5. ¿Consultarías nuevamente la plataforma?</label><br>
                <input type="radio" id="nuevamente_si" name="nuevamente" value="Sí" class="tipografia-gob">
                <label for="nuevamente_si" class="tipografia-gob">Sí</label><br>
                <input type="radio" id="nuevamente_no" name="nuevamente" value="No" class="tipografia-gob">
                <label for="nuevamente_no" class="tipografia-gob">No</label><br><br>

                <label for="pregunta6" class="tipografia-gob">6. ¿Te fue útil la información?</label><br>
                <input type="radio" id="util_si" name="util" value="Sí" class="tipografia-gob">
                <label for="util_si" class="tipografia-gob">Sí</label><br>
                <input type="radio" id="util_no" name="util" value="No" class="tipografia-gob">
                <label for="util_no" class="tipografia-gob">No</label><br><br>

                <label for="comentarios">*Comentarios de mejora:</label><br>
                <textarea name="comentarios" id="comentarios" rows="4" cols="50" class="margin-top-1rem tipografia-gob"></textarea><br><br>
            
                
                
                
                 `,
        confirmButtonText: 'Enviar',
        showCancelButton: true,
        showClass: {
            popup: 'animate__animated animate__fadeInDown animate__faster tipografia-gob'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp tipografia-gob'
          },
          customClass:{
            confirmButton: 'custom-ok-button--encuesta'
          },
          preConfirm: () => {
            const informacion = document.querySelector('input[name="informacion"]:checked')?.value;
            const objetivo = document.getElementById('objetivo').value;
            const informacion_busqueda = document.getElementById('informacion_busqueda').value;
            const frecuencia = document.getElementById('frecuencia').value;
            const nuevamente = document.querySelector('input[name="nuevamente"]:checked')?.value;
            const comentarios = document.getElementById('comentarios').value;
            const util = document.querySelector('input[name="util"]:checked')?.value;
    
            if (!informacion || !objetivo || !informacion_busqueda || !frecuencia || !nuevamente || !util) {
                Swal.showValidationMessage(`Por favor, completa todos los campos`);
                return false;
            }
    
            return { informacion, objetivo, informacion_busqueda, frecuencia, nuevamente, comentarios, util };
        }
    }).then((result) => {
        if (result.isConfirmed) {
             // Enviar los datos con Axios
            axios.post('/api/Consultas/newEncuesta', result.value)
            .then(response => {
                // Manejar la respuesta de éxito
                Swal.fire({
                    title: "¡Gracias!",
                    text: "Tu respuesta ha sido registrada.",
                    icon: "success",
                    confirmButtonText: 'Cerrar',
                    showClass: {
                        popup: 'tipografia-gob animate__zoomIn '
                      },
                      customClass:{
                        confirmButton: 'custom-ok-button--encuesta'
                    },
                  });
            })
            .catch(error => {
                // Manejar la respuesta de error
                Swal.fire({
                    title: "Error",
                    text: "Hubo un problema al enviar tu respuesta.",
                    icon: "error",
                    confirmButtonText: 'Cerrar',
                    showClass: {
                        popup: 'tipografia-gob animate__zoomOut'
                      },
                      customClass:{
                        confirmButton: 'custom-ok-button--encuesta'
                    },
                  });
            });
            
        }
    });
    document.getElementById('objetivo').addEventListener('change', function() {
        const selectedOption = this.options[this.selectedIndex];
        if (selectedOption.value.includes('Análisis de datos para generar evaluaciones a las políticas públicas')) {
            alert(selectedOption.value);
        }
    });
}

//sweet para "saber mas Equidata"
function sweetsabermas() {
    Swal.fire({
        title: 'EquiData <img src="assets/img/Logo-equidataok-icono.ico" alt="EquiData" class="icono-sweet--sabermas">',          
        html: "<p class='tipografia-gob text-aling-justify'>Es una plataforma de acceso libre y público, creada por la Secretaría de las Mujeres del Estado de México en colaboración con el Instituto Nacional de Estadística y Geografía (INEGI), esta plataforma reúne datos y estadísticas sobre temas importantes como la violencia de género, igualdad legal, toma de decisiones, desigualdad, demografía, grupos prioritarios, desarrollo económico, salud y bienestar, educación, sostenibilidad y también sobre niñas, niños y adolescentes. Además, incluye mapas y gráficos para hacer más clara la información. </p>",
        confirmButtonText: 'Cerrar',
        position: "bottom",
        backdrop: `
        rgb(66 22 83 / 41%)
        left top
        no-repeat
        `, 
        showClass: {
        popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
        `
        },
        hideClass: {
        popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
        `
        },
        customClass:{
            popup: 'custom-swal-popup',
            confirmButton: 'custom-ok-button'
        }
    });
}
