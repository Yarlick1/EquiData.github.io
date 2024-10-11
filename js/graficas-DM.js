document.addEventListener("DOMContentLoaded", function() {
    const contenedorPrincipal = document.getElementById("contenedor-principal");
    const urlActual = window.location.href;
    const mappings = {
        'DM': {
            'contenedor-6-DM': 'variable6.php',
            'contenedor-5-DM': 'variable5.php',
            'contenedor-4-DM': 'variable4.php',
            'contenedor-3-DM': 'variable3.php',
            'contenedor-2-DM': 'variable2.php',
            'contenedor-1-DM': 'variable1.php'
        }
    };


    /********************************GRAFICAS******************************************/
    
 //graficas 1
 function inicializarGrafica_dm1() {
    const ctx = document.getElementById('myChart_dm1').getContext('2d');

    // Realiza la solicitud al archivo PHP
    fetch('DM/graficasDM/grafica-1.php')
        .then(response => response.json())
        .then(data => {
            // Extraer las etiquetas y los valores desde los datos recibidos
            const labels = data.map(item => item.nomgeo);
            const values = data.map(item => item.divadmin22);

            // Crear la gráfica con los datos extraídos
            new Chart(ctx, {
                type: 'line',  // Cambiado a gráfico de líneas
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Divorcios administrativos',
                        data: values,
                        backgroundColor: '#A0BEDB',
                        borderColor: '#016C59',
                        borderWidth: 2,
                        fill: true,  // No llenar el área debajo de la línea
                    }]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: 'Divorcios Administrativo 2022'
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
function inicializarGrafica_dm2() {
    const ctx = document.getElementById('myChart_dm2').getContext('2d');
    let chart; // Para almacenar la instancia del gráfico

    fetch('DM/graficasDM/grafica-2.php')
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
                            text: 'GRAFICAS DEMOGRAFIA 2'
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
 function inicializarGrafica_dm3() {
    const ctx = document.getElementById('myChart_dm3').getContext('2d');

    // Realiza la solicitud al archivo PHP
    fetch('DM/graficasDM/grafica-3.php')
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
                            text: 'GRAFICAS DEMOGRAFIA 3'
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
                if (url == 'DM/variable1.php') {
                    inicializarGrafica_dm1();
                }else if (url == 'DM/variable2.php') {
                    inicializarGrafica_dm2();
                } else if (url == 'DM/variable3.php') {
                    inicializarGrafica_dm3();
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




