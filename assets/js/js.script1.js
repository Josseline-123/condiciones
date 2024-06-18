function calcular() {
    try {
        var a = parseFloat(document.querySelector('#valor1').value) || 0,
        b = parseFloat(document.querySelector('#valor2').value) || 0;
        c = parseFloat(document.querySelector('#valor3').value) || 0;
        document.querySelector('#totales').value = a + b + c ;
    } catch (e) { }

    
}

     