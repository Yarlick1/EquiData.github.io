document.addEventListener("DOMContentLoaded", function() {
    const contenedorPrincipal = document.getElementById("contenedor-principal");
    const urlActual = window.location.href;
    const mappings = {
        'DS': {
            'contenedor-7-DS': 'variable7.php',
            'contenedor-6-DS': 'variable6.php',
            'contenedor-5-DS': 'variable5.php',
            'contenedor-4-DS': 'variable4.php',
            'contenedor-3-DS': 'variable3.php',
            'contenedor-2-DS': 'variable2.php',
            'contenedor-1-DS': 'variable1.php'
        }
    };


    /********************************GRAFICAS******************************************/
    
 //graficas 1
 function inicializarGrafica_ds1() {
    const ctx = document.getElementById('myChart_ds1').getContext('2d');

    // Realiza la solicitud al archivo PHP
    fetch('DS/graficasDS/grafica-1.php')
        .then(response => response.json())
        .then(data => {
            // Extraer las etiquetas y los valores desde los datos recibidos
            const labels = data.map(item => item.nomgeo);
            const value1 = data.map(item => item.mej_viv_m);
            const value2 = data.map(item => item.mej_viv_h);

            // Crear la gráfica con los datos extraídos
            new Chart(ctx, {
                type: 'line',  // Cambiado a gráfico de líneas
                data: {
                    labels: labels,
                    datasets: [
                        {
                        label: 'Mujeres',
                        data: value1,
                        backgroundColor: '#F0F9E8',
                        borderColor: '#0868AC',
                        borderWidth: 2,
                        fill: true,  // No llenar el área debajo de la línea
                    },{
                        label: 'Hombres',
                        data: value2,
                        backgroundColor: '#F7FCF5',
                        borderColor: '#00441B',
                        borderWidth: 2,
                        fill: true,  // No llenar el área debajo de la línea
                    }
                    ]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: 'Personas que accedieron a paquetes de materiales y apoyos diversos para mejorar sus viviendas en localidades rurales Hombres 2021'
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
function inicializarGrafica_ds2() {
    const ctx = document.getElementById('myChart_ds2').getContext('2d');
    let chart; // Para almacenar la instancia del gráfico

    fetch('DS/graficasDS/grafica-2.php')
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
                            text: 'GRAFICAS DESIGUALDAD 2'
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
 function inicializarGrafica_ds3() {
    const ctx = document.getElementById('myChart_ds3').getContext('2d');

    // Realiza la solicitud al archivo PHP
    fetch('DS/graficasDS/grafica-3.php')
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
                            text: 'GRAFICAS DESIGUALDAD 3'
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
//graficas 7
function inicializarGrafica_ds7() {
    const ctx = document.getElementById('myChart_ds7').getContext('2d');

    // Realiza la solicitud al archivo PHP
    fetch('DS/graficasDS/grafica-7.php')
        .then(response => response.json())
        .then(data => {
            // Extraer las etiquetas y los valores desde los datos recibidos
            const labels = data.map(item => item.nomgeo);
            const value1 = data.map(item => item.mej_vi_m23);
            const value2 = data.map(item => item.mej_vi_h23);

            // Crear la gráfica con los datos extraídos
            new Chart(ctx, {
                type: 'line',  // Cambiado a gráfico de líneas
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Número de personas que accedieron a paquetes de materiales y apoyos diversos para mejorar sus viviendas Mujeres 2023',
                        data: value1,
                        borderColor: '#980043',
                        borderWidth: 2,
                        fill: true,  // No llenar el área debajo de la línea
                    },
                    {
                        label: 'Número de personas que accedieron a paquetes de materiales y apoyos diversos para mejorar sus viviendas Hombres 2023',
                        data: value2,
                        borderColor: '#045A8D',
                        borderWidth: 2,
                        fill: true,  // No llenar el área debajo de la línea
                    }]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: 'Personas que accedieron a paquetes de materiales y apoyos diversos para mejorar sus viviendas Mujeres 2023'
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    elements: {
                        line: {
                            tension: 0 // Suavizar las líneas si lo deseas
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
                if (url == 'DS/variable1.php') {
                    inicializarGrafica_ds1();
                }else if (url == 'DS/variable2.php') {
                    inicializarGrafica_ds2();
                } else if (url == 'DS/variable3.php') {
                    inicializarGrafica_ds3();
                }else if (url == 'DS/variable7.php') {
                    inicializarGrafica_ds7();
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




