
document.getElementById('dbSelect1').addEventListener('change', function() {
    const selectedValue = this.value;
    indicador_mostrar(selectedValue);
});

function indicador_mostrar(value) {
    // Lógica para manejar la opción seleccionada
    if (value === 'opcion1') {
        // Código para la opción1
        console.log('Indicador 1');
        document.getElementById('indicador1').style.display = "block";
        document.getElementById('indicador2').style.display = "none";
    } else if (value === 'opcion2') {
        // Código para la opción2
        console.log('Indicador 2');
        document.getElementById('indicador1').style.display = "none";
        document.getElementById('indicador2').style.display = "block";
    }
    // Agrega más condiciones según las opciones
}
    
    
    
