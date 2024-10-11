document.addEventListener("DOMContentLoaded", function() {
    const contenedorPrincipal = document.getElementById("contenedor-principal");
    const urlActual = window.location.href;
    const mappings = {
        'SB': {
            'contenedor-30-SB': 'variable30.php',
            'contenedor-29-SB': 'variable29.php',
            'contenedor-28-SB': 'variable28.php',
            'contenedor-27-SB': 'variable27.php',
            'contenedor-26-SB': 'variable26.php',
            'contenedor-25-SB': 'variable25.php',
            'contenedor-24-SB': 'variable24.php',
            'contenedor-23-SB': 'variable23.php',
            'contenedor-22-SB': 'variable22.php',
            'contenedor-21-SB': 'variable21.php',
            'contenedor-20-SB': 'variable20.php',
            'contenedor-19-SB': 'variable19.php',
            'contenedor-18-SB': 'variable18.php',
            'contenedor-17-SB': 'variable17.php',
            'contenedor-16-SB': 'variable16.php',
            'contenedor-15-SB': 'variable15.php',
            'contenedor-14-SB': 'variable14.php',
            'contenedor-13-SB': 'variable13.php',
            'contenedor-12-SB': 'variable12.php',
            'contenedor-11-SB': 'variable11.php',
            'contenedor-10-SB': 'variable10.php',
            'contenedor-9-SB': 'variable9.php',
            'contenedor-8-SB': 'variable8.php',
            'contenedor-7-SB': 'variable7.php',
            'contenedor-6-SB': 'variable6.php',
            'contenedor-5-SB': 'variable5.php',
            'contenedor-4-SB': 'variable4.php',
            'contenedor-3-SB': 'variable3.php',
            'contenedor-2-SB': 'variable2.php',
            'contenedor-1-SB': 'variable1.php'
        }
    };


    /********************************GRAFICAS******************************************/
    
 //graficas 1
 function inicializarGrafica_sb1() {
    const ctx = document.getElementById('myChart_sb1').getContext('2d');

    // Realiza la solicitud al archivo PHP
    fetch('SB/graficasSB/grafica-1.php')
        .then(response => response.json())
        .then(data => {
            // Extraer las etiquetas y los valores desde los datos recibidos
            const labels = data.map(item => item.nomgeo);
            const values = data.map(item => item.co_m_iss22);

            // Crear la gráfica con los datos extraídos
            new Chart(ctx, {
                type: 'line',  // Cambiado a gráfico de líneas
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Mujeres embarazadas de 15 a 39 años que recibieron controles prenatales en el ISSEMyM',
                        data: values,
                        backgroundColor: '#99D7CD',
                        borderColor: '#3FAD76',
                        borderWidth: 2,
                        fill: true,  // No llenar el área debajo de la línea
                    }]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: 'Mujeres embarazadas de 15 a 39 años que recibieron controles prenatales en el ISSEMyM 2022'
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

//graficas 2
function inicializarGrafica_sb2() {
    const ctx = document.getElementById('myChart_sb2').getContext('2d');
    let chart; // Para almacenar la instancia del gráfico

    fetch('SB/graficasSB/grafica-2.php')
        .then(response => response.json())
        .then(data => {
            const labels = data.map(item => item.nomgeo);
            const values1 = data.map(item => item.ppobt_m_21);
            const values2 = data.map(item => item.ppobt_h_21);

            chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Proyección de Población total mujeres 2021',
                            data: values1,
                            backgroundColor: 'rgba(210, 105, 30, 0.2)',
                            borderColor: 'rgba(210, 105, 30, 1)',
                            borderWidth: 2,
                            fill: false,
                            pointRadius: 5, // Tamaño del punto
                            pointBackgroundColor: 'rgba(210, 105, 30, 1)', // Color del punto
                            pointBorderColor: 'rgba(255, 255, 255, 1)' // Borde del punto
                        },
                        {
                            label: 'Proyección de Población total hombres 2021',
                            data: values2,
                            backgroundColor: 'rgba(70, 130, 180, 0.2)',
                            borderColor: 'rgba(70, 130, 180, 1)',
                            borderWidth: 2,
                            fill: false,
                            pointRadius: 5, // Tamaño del punto
                            pointBackgroundColor: 'rgba(70, 130, 180, 1)', // Color del punto
                            pointBorderColor: 'rgba(255, 255, 255, 1)' // Borde del punto
                        }
                    ]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: 'GRAFICAS SALUD Y BIENESTAR 2'
                        }
                    },
                    elements: {
                        line: {
                            tension: 0.2
                        }
                    }
                }
            });

            // Escuchar cambios en el campo de búsqueda
            document.getElementById('searchInput').addEventListener('input', function () {
                const searchTerm = this.value.toLowerCase();
                const filteredLabels = [];
                const filteredValues1 = [];
                const filteredValues2 = [];

                // Filtrar los datos en base al término de búsqueda
                labels.forEach((label, index) => {
                    if (label.toLowerCase().includes(searchTerm)) {
                        filteredLabels.push(label);
                        filteredValues1.push(values1[index]);
                        filteredValues2.push(values2[index]);
                    }
                });

                // Actualizar la gráfica con los datos filtrados
                chart.data.labels = filteredLabels;
                chart.data.datasets[0].data = filteredValues1;
                chart.data.datasets[1].data = filteredValues2;
                chart.update();
            });
        })
        .catch(error => console.error('Error al obtener los datos:', error));
}

 //graficas 3
 function inicializarGrafica_sb3() {
    const ctx = document.getElementById('myChart_sb3').getContext('2d');

    // Realiza la solicitud al archivo PHP
    fetch('SB/graficasSB/grafica-3.php')
        .then(response => response.json())
        .then(data => {
            // Extraer las etiquetas y los valores desde los datos recibidos
            const labels = data.map(item => item.nomgeo);
            const values = data.map(item => item.carp_del_f);

            // Crear la gráfica con los datos extraídos
            new Chart(ctx, {
                type: 'line',  // Cambiado a gráfico de líneas
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Número de carpetas de intestigación por municipo',
                        data: values,
                        backgroundColor: '#FFBFBF',
                        borderColor: '#FF4040',
                        borderWidth: 2,
                        fill: true,  // No llenar el área debajo de la línea
                    }]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: 'GRAFICAS SALUD Y BIENESTAR 3'
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
//graficas 30
function inicializarGrafica_sb30() {
    const ctx = document.getElementById('myChart_sb30').getContext('2d');

    // Realiza la solicitud al archivo PHP
    fetch('SB/graficasSB/grafica-30.php')
        .then(response => response.json())
        .then(data => {
            // Extraer las etiquetas y los valores desde los datos recibidos
            const labels = data.map(item => item.nomgeo);
            const values = data.map(item => item.lact06ms23);

            // Crear la gráfica con los datos extraídos
            new Chart(ctx, {
                type: 'line',  // Cambiado a gráfico de líneas
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Numero de lactantes de 0 a 6 meses que son alimentados exclusivamente con leche materna 2023',
                        data: values,
                        backgroundColor: '#CCB8ED',
                        borderColor: '#FA83CD',
                        borderWidth: 2,
                        fill: true,  // No llenar el área debajo de la línea
                    }]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: 'Lactantes de 0 a 6 meses que son alimentados exclusivamente con leche materna 2023'
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
                if (url == 'SB/variable1.php') {
                    inicializarGrafica_sb1();
                }else if (url == 'SB/variable2.php') {
                    inicializarGrafica_sb2();
                } else if (url == 'SB/variable3.php') {
                    inicializarGrafica_sb3();
                }else if (url == 'SB/variable30.php') {
                    inicializarGrafica_sb30();
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




