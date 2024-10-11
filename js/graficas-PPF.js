document.addEventListener("DOMContentLoaded", function() {
    const contenedorPrincipal = document.getElementById("contenedor-principal");
    const urlActual = window.location.href;
    const mappings = {
        'PPF': {
            'contenedor-1-PPF': 'variable1.php'
        }
    };


    /********************************GRAFICAS******************************************/
    
 //graficas 1
 function inicializarGrafica_ppf1() {
    const ctx = document.getElementById('myChart_ppf1').getContext('2d');

    // Realiza la solicitud al archivo PHP
    fetch('PPF/graficasPPF/grafica-1.php')
        .then(response => response.json())
        .then(data => {
            // Extraer las etiquetas y los valores desde los datos recibidos
            const labels = data.map(item => item.nomgeo);
            const value1 = data.map(item => item.pansodfm23);
            const value2 = data.map(item => item.pansodfh23);

            // Crear la gráfica con los datos extraídos
            new Chart(ctx, {
                type: 'line',  // Cambiado a gráfico de líneas
                data: {
                    labels: labels,
                    datasets: [
                        {
                        label: 'Programa de atención de niñas, niños y adolescentes en situación de orfandad por el delito de feminicidio y desaparición para el Estado de México Mujeres 2023',
                        data: value1,
                        borderColor: '#980043',
                        borderWidth: 2,
                        fill: true,  // No llenar el área debajo de la línea
                    },
                    {
                        label: 'Programa de atención de niñas, niños y adolescentes en situación de orfandad por el delito de feminicidio y desaparición para el Estado de México Hombres 2023',
                        data: value2,
                        borderColor: '#006837',
                        borderWidth: 2,
                        fill: true,  // No llenar el área debajo de la línea
                    }
                    ]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: 'Programa de atención de niñas, niños y adolescentes en situación de orfandad por el delito de feminicidio y desaparición para el Estado de México 2023'
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    elements: {
                        line: {
                            tension: 0.2 // Suavizar las líneas si lo deseas
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error al obtener los datos:', error));
}




    function cargarContenedor(url) {
        contenedorPrincipal.innerHTML = '';
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                contenedorPrincipal.innerHTML = xhr.responseText;
                console.log(`Contenido cargado desde: ${url}`);
                if (url == 'PPF/variable1.php') {
                    inicializarGrafica_ppf1();
                }else{
                    console.error('Error N');
                }
            } else {
                console.error(`Error al cargar el contenido desde: ${url}`);
            }
        };
        xhr.send();
    }

    function buscarYcargarContenedor() {
        for (const [prefix, mappingsByPrefix] of Object.entries(mappings)) {
            for (const [key, file] of Object.entries(mappingsByPrefix)) {
                if (urlActual.includes(key)) {
                    cargarContenedor(`${prefix}/${file}`);
                    return; // Salir una vez que se encuentra el contenedor
                }
            }
        }
        console.log("No se encontró un contenedor específico en la URL.");
    }

    buscarYcargarContenedor();
});




